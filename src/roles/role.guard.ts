import { CanActivate, ExecutionContext, mixin, Type } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Role } from "./role.enum";

const RoleGuard = (role: Role): Type<CanActivate> => {
    class RoleGuardMixin extends JwtAuthGuard {
        async canActivate(context: ExecutionContext) {
            await super.canActivate(context); //con esto ejecutamos el jwtauthguard

            const {user} = context.switchToHttp().getRequest();
            return user?.roles.includes(role);
        }
    }
    
    return mixin(RoleGuardMixin);
}

export default RoleGuard;