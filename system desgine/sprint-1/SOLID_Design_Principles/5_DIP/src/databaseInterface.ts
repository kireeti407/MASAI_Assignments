export interface Database{
    save(data:string):void ;
}

export class MySQLService implements Database{
    save(data: string): void {
        console.log(`Saving to MySQL: ${data}`)
    }
}

export class MongoService implements Database{
    save(data: string): void {
        console.log(`Saving to Mongo : ${data}`)
    }
}


