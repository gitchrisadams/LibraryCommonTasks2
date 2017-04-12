import datetime
import pytz

# Create an Account class with balance:
class Account:
    # Constructor:
    # Set transaction_list to empty array.
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        self.transaction_list = []
        print("Account created for " + self.name)


    # Adds deposit to the balance:
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.show_balance()

            # Append the pytz utc time to the transaction array, along
            # with amount of transaction.
            self.transaction_list.append((pytz.utc.localize(datetime.datetime.utcnow()), amount))

    # Deduct withdrawl amount:
    # If amount is between 0 and balance then subtract the amount
    # otherwise display error message, not allowing the withdrawl.
    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
        else:
            print("The amount must be greater than zero and no more than your account balance.")
        self.show_balance()

    # Displays the balance amount:
    def show_balance(self):
        print("Balance is {}".format(self.balance))


    # Show deposit or withdrawn based on amount.
    # Set amount to negative if withdrawn by mult by -1.
    def show_transactions(self):
        for date, amount in self.transaction_list:
            if amount > 0:
                trans_type = "deposited"
            else:
                trans_type = "withdrawn"
                amount *= -1

            # Output results: Indent 6 chars from left.
            print("{:6} {} on {} (local time was {})".format(amount, trans_type, date, date.astimezone()))


""" 
The if __name__ == '__main__': explaination:
The reason is that all of the code that is at indentation level 0 gets executed. 
Functions and classes that are defined are, well, defined, but none of their code gets ran. 
Unlike other languages, there's no main() function thats gets run automatically.
In this case, the top-level code is an if block.
__name__ is a built-in variable which evaluate to the name of the current module.
However, if a module is being run directly (as in myscript.py above), then __name__ instead is set to the string "__main__".
Thus, you can test whether your script is being run directly or being imported by something else by testing
You will see more about this as your progress.
"""
if __name__ == '__main__':
    # Create new Account w/ name time w/ zero starting balance:
    tim = Account("Tim", 0)

    # Display the balance:
    tim.show_balance()
    print()

    # Deposit money:
    tim.deposit(1000)

    # Withdraw money:
    tim.withdraw(500)

    # Withdraw more money:
    tim.withdraw(2000)
    print()

    # Show the transactions:
    tim.show_transactions()

