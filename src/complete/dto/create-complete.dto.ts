import { IsString, IsOptional, IsBoolean } from "class-validator";
import { Serveys } from "src/serveys/serveys.entity";

export class createCompleteDto {

    @IsString()
    readonly respondent: string

    @IsBoolean()
    readonly complete: boolean

    @IsOptional()
    readonly serveys: Serveys[]
}