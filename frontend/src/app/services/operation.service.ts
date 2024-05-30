import { Injectable } from '@angular/core';
import { OperationModel } from '../models/operation.model';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { TypeModel } from '../models/type.model';

@Injectable({
  providedIn: 'root',
})
export class OperationService {

  constructor(private httpClient: HttpClient) { }

  public async getAllTypes(): Promise<TypeModel[]> {
    const observable = this.httpClient.get<TypeModel[]>(environment.typesUrl);
    const groups = await firstValueFrom(observable);
    return groups;
  }

  public async getOperations(account_number: string): Promise<OperationModel[]> {
    const observable = this.httpClient.get<OperationModel[]>(`${environment.operationsUrl}/${account_number}`);
    const operations = await firstValueFrom(observable);
    return operations;
  }

  public async add(operation: OperationModel): Promise<OperationModel> {

    const observable = this.httpClient.post<OperationModel>(`${environment.operationsUrl}/add`, operation);
    const newOperation = await firstValueFrom(observable);
    return newOperation;
  }

  public async delete(id: number): Promise<void> {

    const observable = this.httpClient.delete(`${environment.operationsUrl}/delete/${id}`);
    await firstValueFrom(observable);
  }
}
