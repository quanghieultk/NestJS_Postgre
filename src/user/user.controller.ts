import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { UserService } from './user.service'
import { User } from './user.entity'
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {

    }

    @Get('')
    getUsers() {
      return this.userService.getAllUsers();
    }
  
    @Get(':id')
    getUser(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.userService.getUser(id);
      }
  
    @Post()
    createUser(@Body() user: User) {
      // return this.userService.addUser(user);
      return this.userService.addUser(user).then(function(res)
      {
        return {
          "status": 200,
          "message": "Create user successful"
        }
      })
      .catch(function(){
        throw new HttpException('NOT_ACCEPTABLE', HttpStatus.NOT_ACCEPTABLE);
      })
    }
  
    @Put()
    updateUser(@Body() user: User) {
      return this.userService.updateUser(user);
    }
  
    @Delete(':id')
    deleteUser(@Param('id', new ParseUUIDPipe()) id: string) {
      return this.userService.deleteUser(id);
    }
}
