import { Body, Controller, Delete, Get, Param, Patch, Post, Response } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserService } from './user.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users') // Tag to
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' }) // Operation description
  @ApiResponse({ status: 200, description: 'Successfully fetched all users.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'logan@logan.com' },
        first_name: { type: 'string', example: 'LOGAN' },
        last_name: { type: 'string', example: 'LEE' },
        country: { type: 'string', example: 'KR' },
        gender: { type: 'string', example: 'M' },
        bod: { type: 'date', example: new Date() },
      },
      required: ['name', 'email'],
    },
  })
  @Post()
  create(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':uuid')
  remove(@Param('uuid') uuid: string) {
    return this.userService.remove(uuid);
  }
}
