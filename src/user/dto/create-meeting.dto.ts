import { IsString, IsOptional } from 'class-validator';
import { User } from '../user.entity';

export class createMeetingDto {

    @IsString()
    readonly name: string;

    @IsOptional()
    readonly owner: User;

}