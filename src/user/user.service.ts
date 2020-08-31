import { Injectable, Get } from '@nestjs/common';
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
      async getAllUsers (): Promise<User[]> {
        return await this.userRepo.find();
      }
      async getUser(id: string): Promise<User> {
        return await this.userRepo.findOne(id);
      }
    
      async addUser(user: User): Promise<any> {
        return await this.userRepo.save(user)
      }
    
      async updateUser(user: User): Promise<boolean> {
        return await this.userRepo.update(user.id, user).then(function(err){
          return true;
        })
        .catch(function(err){
          return false;
        });
         
      }
    
      async deleteUser(id): Promise<boolean> {
        return await this.userRepo.delete(id).then(function(err){
          return true;
        })
        .catch(function(err){
          return false;
        });

      }
}
