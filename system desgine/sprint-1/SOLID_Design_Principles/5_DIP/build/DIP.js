"use strict";
// Dependency Inversion Principle 
Object.defineProperty(exports, "__esModule", { value: true });
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
const databaseInterface_1 = require("./databaseInterface");
class UserService {
    constructor(dbType) {
        this.dbType = dbType;
    }
    register(user) {
        this.dbType.save(user);
    }
}
let SqlService = new UserService(new databaseInterface_1.MySQLService);
SqlService.register("Aswartha");
let mongoService = new UserService(new databaseInterface_1.MongoService);
mongoService.register("Mobile");
