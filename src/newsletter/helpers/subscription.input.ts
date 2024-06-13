import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SubscriptionInput {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  name?: string;
}
