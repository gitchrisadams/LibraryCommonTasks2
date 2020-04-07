// <TRouteNumber, TBankNumber> are generics, they allow
// use to specific different types for AccountInfo
export interface AccountInfo<TRouteNumber, TBankNumber> {
    routingNumber: TRouteNumber;
    bankNumber: TBankNumber;
}

export interface DepositWithdrawal {
    deposit(amount: number): void;
    withdrawal(amount: number): void;
} 

export interface AccountSettings {
    id: number;  
    title: string;     
    balance : number;          
    interestRate?: number;
    accountInfo?: AccountInfo<string, number>;  // Generic could be number, number but is string, number here.
}  

// Because this extends AccountSettings and DepositWithdrawl, 
// when Account is used, it must implement deposit, withdrawl,
// id, title, balance since those are in there, interestRate
// and accountInfo are optional. 
export interface Account extends AccountSettings, DepositWithdrawal { }
