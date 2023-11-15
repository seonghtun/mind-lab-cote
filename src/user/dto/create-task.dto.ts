import { IsString, IsNumber } from 'class-validator'

export class createTaskDto {



    @IsString()
    readonly name: string
}