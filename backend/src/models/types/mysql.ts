import Model from "./model";
import DTO from './dto';
import query from "../../db/mysql";

class TypeOperation implements Model {

    public async getAll(): Promise<DTO[]> {
        const typeOperation = await query(`
            SELECT  id, name
            FROM    account_operations  
        `);
        return typeOperation;
    }
}

const typeOperation = new TypeOperation();
export default typeOperation;