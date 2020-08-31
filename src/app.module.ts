import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'traquangem123',
      database: 'postgres',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: false,
    })
    ,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
