import { IsString, IsOptional, IsNumber } from "class-validator";
import { Contents } from "src/contents/contents.entity";
import { Responses } from "src/responses/responses.entity";

export class createOptionDto {

    @IsString()
    readonly description: string

    @IsNumber()
    readonly point: number

    @IsNumber()
    readonly order: number

    @IsOptional()
    readonly contents: Contents

    @IsOptional()
    readonly responses: Responses[]
}