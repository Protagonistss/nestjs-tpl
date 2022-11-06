import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @ApiProperty({ example: 'cookie' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'example@gmail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'foo' })
  @IsNotEmpty()
  username: string;
}
