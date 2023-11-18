import { IsString, IsOptional } from "class-validator";
import { Options } from "src/options/options.entity";
import { Responses } from "src/responses/responses.entity";
import { Serveys } from "src/serveys/serveys.entity";

export class createContentDto {
    @IsString()
    readonly description: string

    @IsString()
    readonly type: string

    @IsOptional()
    readonly serveys: Serveys[]

    @IsOptional()
    readonly responses: Responses[]

    @IsOptional()
    readonly options: Options[]
}