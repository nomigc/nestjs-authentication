import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './userModule/userModule';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest_auth'),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
