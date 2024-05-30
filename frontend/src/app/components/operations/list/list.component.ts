import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OperationService } from '../../../services/operation.service';
import { OperationModel } from '../../../models/operation.model';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { TypeModel } from '../../../models/type.model';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
    selector: 'app-list',
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        RouterLink,
        CardComponent,
        FormsModule
    ],
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {

    public operations?: OperationModel[];
    public types?: TypeModel[];
    public account_number?: string;
    public lengthOfArray?: number;


    public async handleEvent(event: number) {
        try {
            await this.operationService.delete(event);

            this.operations = await this.operationService.getOperations(this.account_number!)
            if (this.operations.length === 0) this.lengthOfArray = 0;
            else this.lengthOfArray = -1;
        } catch (err) {
            console.log(err)
        }
    }

    public async search() {
        this.operations = await this.operationService.getOperations(this.account_number!)
        if (this.operations.length === 0) this.lengthOfArray = 0;
        else this.lengthOfArray = -1;
    }

    public constructor(
        private title: Title,
        private operationService: OperationService
    ) { }

    public async ngOnInit() {
        this.title.setTitle('Operations List');
        this.types = await this.operationService.getAllTypes()
    }





}
