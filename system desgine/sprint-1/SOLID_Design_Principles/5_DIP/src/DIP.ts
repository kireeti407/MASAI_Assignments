// Dependency Inversion Principle 


// Problem: Your current implementation is:

// class MySQLService {
//   save(data: string) {
//     console.log("Saving to MySQL:", data);
//   }
// }

// class UserService {
//   db = new MySQLService();

//   register(user: string) {
//     this.db.save(user);
//   }
// }

// Task: Refactor the above to follow the Dependency Inversion Principle using an interface Database.

// Solution : 
import { Database, MongoService, MySQLService } from "./databaseInterface";

class UserService{
    dbType : Database  // depends on interfce not on class
    constructor(dbType : Database){
        this.dbType = dbType;
    }
    
    register(user:string){
        this.dbType.save(user)
    }
}


let SqlService = new UserService(new MySQLService)
SqlService.register("Aswartha")

let mongoService = new UserService(new MongoService)
mongoService.register("Mobile")