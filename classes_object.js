class user 
{
    naav = "monibb"
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
    }

    viewData()
    {
        console.log("this is the data");
    }
}

let student1 = new user("Tasmai", "tasz@gmial.com");
let student2 = new user("tasz", "taszzz");

class admin extends user
{
    constructor(name, email)
    {
        super(name, email)
    }
    
    editData()
    {
        console.log("This is admin data");
    }
}

let admin1 = new admin("dean", "dean@gmail.com");
console.log(student2.naav)