import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OperationModel } from '../../../models/operation.model';
import { TypeModel } from '../../../models/type.model';
import { NgIf } from '@angular/common';
import { OperationService } from '../../../services/operation.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {

  public types?: TypeModel[];
  public typeOfOperation?: string;


  public constructor(
    private operationService: OperationService
  ) { }

  public async ngOnInit() {
    this.types = await this.operationService.getAllTypes();

    this.typeOfOperation = (this.types.find(t => this.operation?.type === t.id))!.name;

  }

  public delete() {
    if (!this.operation?.objectId) return;
    this.deleteFunction.emit(this.operation?.objectId);
  }

  @Input() public operation?: OperationModel;
  @Output() deleteFunction = new EventEmitter<number>();
}
