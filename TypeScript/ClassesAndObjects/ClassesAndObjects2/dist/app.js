"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        /********* Protected and Private *********/
        // private empllyees is  only accessible inside this class.
        //private employees: string[] = [];
        // protected employees is accessible in classes that extend this class.
        this.employees = [];
    }
    /********* Static Methods *********/
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    /********* Static Property *********/
    Department.fiscalYear = 2020;
    return Department;
}());
/********* Class Inheritence *********/
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    /********* Abstract method use example *********/
    // Another example of overriding:
    // This is an abstract class so must be implemented here.
    ITDepartment.prototype.describe = function () {
        console.log("IT Dept. - ID: " + this.id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    /********* Singletons & Private Constructors *********/
    // We make the constructor private so you now have
    // to use the getInstance below instead of newing up
    // an instance of AccountingDepartment.
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        /********* Getters and Setters *********/
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("please pass in a valid value");
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    };
    /********* Overriding a method *********/
    // Overrides the addEmployee in base class.
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    /********* Abstract method use example *********/
    // Another example of overriding:
    // This is an abstract class so must be implemented here.
    AccountingDepartment.prototype.describe = function () {
        console.log("AccoutingDepartment - ID: " + this.id);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log("Reports " + this.reports);
    };
    return AccountingDepartment;
}(Department));
/********* Singletons & Private Constructors use *********/
// How we would do it if we used traditional AccountingDepartment class
// New it up.
// const accounting = new AccountingDepartment("d3", []);
// We now create accounting instance using the static method:
// These both point to the same instance since we are using
// a static method, they are both the same. Hence it's a (singleton).
var accounting = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();
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
var itDept = new ITDepartment("d2", ["Chris"]);
itDept.addEmployee("Chris");
console.log("itDept: ", itDept);
/********* Static Methods Use *********/
// Create a new employee using our static method:
// Static method is called on the class, not the instance:
var employee1 = Department.createEmployee("Chris");
console.log("employee1", employee1);
/********* Static Property Use *********/
console.log(Department.fiscalYear);
