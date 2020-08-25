import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User} from './user.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
      ) {}
    
      async findAll (): Promise<User[]> {
        return await this.userRepo.query('SELECT * FROM users');
        // this.userRepo.find();
      }
    
      async findOne(id: number): Promise<User> {
        return await this.userRepo.query(`SELECT * FROM users WHERE id='${id}'`);
      }
    
    
      async addUser(user: User): Promise<User> {
          var sql_add = `INSERT INTO users (id, email, first_name,last_name,avatar)
          VALUES ('${user.id}','${user.email}','${user.first_name}','${user.last_name}','${user.avatar}');` 
        return await this.userRepo.query(sql_add)
      }
    
      async update(user: User): Promise<UpdateResult> {
        return await this.userRepo.update(user.id, user);
      }
    
      async delete(id): Promise<DeleteResult> {
        return await this.userRepo.delete(id);
      }
}
