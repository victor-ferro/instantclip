import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class BcryptOperator{
    constructor(){}

    async createHash(pass: string){
        return await bcrypt.hash(pass, await bcrypt.genSalt());
    }

    async compare(pass: string, hash: string){
        return await bcrypt.compare(pass, hash);
    }
}