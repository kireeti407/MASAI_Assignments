"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoService = exports.MySQLService = void 0;
class MySQLService {
    save(data) {
        console.log(`Saving to MySQL: ${data}`);
    }
}
exports.MySQLService = MySQLService;
class MongoService {
    save(data) {
        console.log(`Saving to Mongo : ${data}`);
    }
}
exports.MongoService = MongoService;
