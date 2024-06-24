const employee = 
{
    calculateTax()
    {
        console.log("the tax is 10 percent");
    },
}

const employee1 = 
{
    salary : 50000,
}

employee1.__proto__ = employee;

console.log(employee1.calculateTax());