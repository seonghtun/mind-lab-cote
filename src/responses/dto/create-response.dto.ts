import { IsString, IsOptional } from "class-validator";
import { Contents } from "src/contents/contents.entity";
import { Options } from "src/options/options.entity";
import { Serveys } from "src/serveys/serveys.entity";

export class createResponseDto {

    @IsString()
    readonly respondent: string

    @IsOptional()
    readonly contents: Contents[]

    @IsOptional()
    readonly options: Options[]

    @IsOptional()
    readonly serveys: Serveys[]
}