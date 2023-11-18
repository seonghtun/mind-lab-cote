import { IsString, IsOptional } from "class-validator";
import { Contents } from "src/contents/contents.entity";

export class createServeyDto {
    @IsString()
    readonly title: string

    @IsString()
    readonly description: string

    @IsString()
    readonly registrant: string

    @IsOptional()
    readonly contents: Contents[]
}