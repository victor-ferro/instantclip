import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { Role } from "src/roles/role.enum";
import { ROLES_KEY } from "src/roles/roles.decorator";
import { RolesGuard } from "src/roles/roles.guard";
import { JwtAuthGuard } from "./jwt-auth.guard";

export function Auth(...role: Role[]){
    return applyDecorators(
        SetMetadata(ROLES_KEY, role),
        UseGuards(JwtAuthGuard, RolesGuard),
        //ApiBearerAuth(),
        //ApiUnauthorizedResponse({ description: 'Unauthorized '})
    );
}
