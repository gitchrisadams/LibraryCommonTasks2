import { BankAccount } from "./bank-account";
import { AccountType } from "./enums";

export class CheckingAccount extends BankAccount {
    accountType = AccountType.Checking;  
    // Since this is declared as abstract, we must implement
    // it as shown below. 
    getAccountInfo() {
        return {

        };
    }
}