import Model from "./model";
import DTO from './dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";

class Operation implements Model {

    public async getOperations(account_number: string): Promise<DTO[]> {
        const operations = await query(`
            SELECT  objectId,
                    accountNumber,
                    type,
                    DATE_FORMAT(date_of_operation, '%a, %Y %M %D, %H:%i') as date,
                    sum,
                    interest,
                    payments
            FROM    bank_accounts  
            WHERE   accountNumber = ?
            ORDER BY date_of_operation
        `, [account_number]);
        return operations;
    }


    public async getOne(id: number): Promise<DTO> {
        const operation = (await query(`
            SELECT  objectId,
                    accountNumber,
                    type,
                    DATE_FORMAT(date_of_operation, '%a, %Y %M %D, %H:%i') as date,
                    sum,
                    interest,
                    payments
            FROM    bank_accounts   
            WHERE   objectId = ?
        `, [id]))[0];
        return operation;
    }

    public async add(operation: DTO): Promise<DTO> {
        const {
            accountNumber,
            type,
            date,
            sum,
            interest,
            payments
        } = operation;


        const result: OkPacketParams = await query(`
            INSERT INTO bank_accounts (
                accountNumber,
                type,
                date_of_operation,
                sum,
                interest,
                payments)
            VALUES (?, ?, ?, ?, ?, ?)
        `, [accountNumber, type, date, sum, interest, payments]);
        return this.getOne(result.insertId);


    }

    public async delete(objectId: number): Promise<boolean> {
        const result: OkPacketParams = await query(`
            DELETE FROM bank_accounts
            WHERE objectId = ?
        `, [objectId]);
        return Boolean(result.affectedRows);
    }

}


const operation = new Operation();
export default operation;