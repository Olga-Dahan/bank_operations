import { Component } from '@angular/core';
import { OperationModel } from '../../../models/operation.model';
import { FormsModule } from '@angular/forms';
import { OperationService } from '../../../services/operation.service';
import { Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { TypeModel } from '../../../models/type.model';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ FormsModule, NgIf, NgFor],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
    public constructor (
        private operationService: OperationService, 
        private title: Title,
        private router: Router
    ) {}

    public types?: TypeModel[];

    public selectedTypeId?: number;
    public operation = new OperationModel();

    public async ngOnInit() {
        this.title.setTitle('Add operation');
        this.types = await this.operationService.getAllTypes()
    }
    
    public async submitForm() {
        try {
            this.operation.date =new Date();
            await this.operationService.add(this.operation);
            alert(`Added new bank operation!`)
            this.router.navigateByUrl('/home');
        } catch (err) {
            alert(err)
            this.router.navigateByUrl('/home');
        }
    }

    public changed() {
        this.selectedTypeId = this.operation.type;
    }

}
