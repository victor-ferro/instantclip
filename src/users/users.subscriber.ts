import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";
import { BcryptOperator } from "./bcryptOperator";
import { User } from "./entities/user.entity";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User>{
    constructor(dataSource: DataSource, private bcryptOperator: BcryptOperator){
        dataSource.subscribers.push(this);
    }

    listenTo() {
        return User;
    }

    async beforeInsert(event:InsertEvent<User>){
        event.entity.password = await this.bcryptOperator.createHash(event.entity.password)
        console.log('BEFORE USER INSERTED: ', event.entity)
    }
    async beforeUpdate(event: UpdateEvent<User>) {
        event.entity.password = await this.bcryptOperator.createHash(event.entity.password)
        console.log('BEFORE USER UPDATE: ', event.entity)
    }

}