import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Role } from "./role.enum";
import { ROLES_KEY } from "./roles.decorator";

@Injectable()
export class RolesGuard extends JwtAuthGuard {
    constructor(private reflector: Reflector){
        super();
    }

    async canActivate(context: ExecutionContext){
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if(!requiredRoles){
            return true;
        }
        await super.canActivate(context);
        const {user} = context.switchToHttp().getRequest();
        return user?.roles.includes(requiredRoles);//requiredRoles.some((role) => user.roles?.includes(role));
    }
}