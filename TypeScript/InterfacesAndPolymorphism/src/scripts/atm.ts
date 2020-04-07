import { DepositWithdrawal, Account } from './interfaces';

// This implements DepositWithdrawl,
// so it must have the deposit and withdrawl
// as defined in the interface.
export class ATM implements DepositWithdrawal {

    constructor(private account: Account) { }

    deposit(amount: number) {
        this.account.deposit(amount);
    }    
    
    withdrawal(amount: number) {
        this.account.withdrawal(amount);
    }
} 