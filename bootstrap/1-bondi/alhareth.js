class User {
    static count = 0;
    constructor(id,username){
        this.i = id;
        this.u = username;
        User.count ++;
    }
    static countMembers(){
        return `${User.count} Mebers Created`;
    }
};

class Admin extends User {
    constructor(id,username,salary){
        super(id, username);
        this.salary = salary;
    }
}

let admin1 = new Admin(99,"alhareth",999999999999);
console.log(admin1);