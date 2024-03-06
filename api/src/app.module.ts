import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    VehicleModule,
    AuthModule,
    MongooseModule.forRoot(uri),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
