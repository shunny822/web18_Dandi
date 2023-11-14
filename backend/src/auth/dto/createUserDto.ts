import { SocialType } from '../entity/socialType';

export class CreateUserDto {
  id: string;
  email: string;
  nickname: string;
  socialType: SocialType;
}