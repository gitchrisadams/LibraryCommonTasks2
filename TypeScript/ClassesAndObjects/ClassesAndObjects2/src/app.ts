abstract class Department {
  /********* Protected and Private *********/
  // private empllyees is  only accessible inside this class.
  //private employees: string[] = [];

  // protected employees is accessible in classes that extend this class.
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}

  /********* Static Methods *********/
  static createEmployee(name: string) {
    return { name: name };
  }

  /********* Static Property *********/
  static fiscalYear = 2020;

  /********* Abstract methods *********/
  // Any class that extends this class, must
  // override this function.
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

/********* Class Inheritence *********/
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  /********* Abstract method use example *********/
  // Another example of overriding:
  // This is an abstract class so must be implemented here.
  describe() {
    console.log("IT Dept. - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  // Last report is only accessible in this class
  // since it's private. We need to make a getter.
  private lastReport: string;

  /********* Getters and Setters *********/
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass in a valid value");
    }
    this.addReport(value);
  }

  /********* Singletons & Private Constructors *********/
  // We make the constructor private so you now have
  // to use the getInstance below instead of newing up
  // an instance of AccountingDepartment.
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  /********* Overriding a method *********/
  // Overrides the addEmployee in base class.
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  /********* Abstract method use example *********/
  // Another example of overriding:
  // This is an abstract class so must be implemented here.
  describe() {
    console.log("AccoutingDepartment - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log("Reports " + this.reports);
  }
}

/********* Singletons & Private Constructors use *********/
// How we would do it if we used traditional AccountingDepartment class
// New it up.
// const accounting = new AccountingDepartment("d3", []);

// We now create accounting instance using the static method:
// These both point to the same instance since we are using
// a static method, they are both the same. Hence it's a (singleton).
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log("Accounting 1 and 2: ", accounting, accounting2);

/********* Class uses *********/
accounting.addEmployee("Max");
accounting.addEmployee("Chris");
accounting.addReport("Some new report");

/********* Overriding use example *********/
accounting.describe();

/********* Use of a setter and getter *********/
// Use setter to set most recent report:
// If pass in empty string, error will be thrown.
accounting.mostRecentReport = "New fancy report";
accounting.name = "NEW NAME";
console.log("accounting: ", accounting);

// Use getter function to access most
// recent report:
console.log(accounting.mostRecentReport);

const itDept = new ITDepartment("d2", ["Chris"]);
itDept.addEmployee("Chris");
console.log("itDept: ", itDept);

/********* Static Methods Use *********/
// Create a new employee using our static method:
// Static method is called on the class, not the instance:
const employee1 = Department.createEmployee("Chris");
console.log("employee1", employee1);

/********* Static Property Use *********/
console.log(Department.fiscalYear);
