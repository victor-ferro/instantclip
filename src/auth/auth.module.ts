import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport'
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  imports: [
    UsersModule, 
    PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '3000s'
      }
    }),
  ],
  exports: [AuthService]
})
export class AuthModule {}
