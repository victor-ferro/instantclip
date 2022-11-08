import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Role } from "src/roles/role.enum";
import { RolesGuard } from "./roles.guard";

export const ROLES_KEY = 'roles';
export function Roles(...role: Role[]){
    return applyDecorators(
        SetMetadata(ROLES_KEY, role),
        UseGuards(JwtAuthGuard, RolesGuard),
        ApiBearerAuth(),
        ApiUnauthorizedResponse({ description: 'Unauthorized '})
    );
}