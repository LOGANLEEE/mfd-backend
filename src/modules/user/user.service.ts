import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: Prisma.UserCreateInput) {
    // try {
    const { id } = await this.prisma.user.create({ data: createUserDto });
    return id;
    // } catch (error) {
    //   throw new InternalServerErrorException(error);
    // }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  async remove(uuid: string) {
    await this.prisma.user.delete({ where: { uuid: uuid } });
  }
}
