import DTO from './dto';

export default interface Model {
    getOperations(account_number: string): Promise<DTO[]>;
    add(operation: DTO): Promise<DTO>;
    delete(id: number): Promise<boolean>;
}