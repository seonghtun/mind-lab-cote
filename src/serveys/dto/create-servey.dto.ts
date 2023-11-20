import { ArgsType, Field, Int } from "@nestjs/graphql";
import { IsInt, IsOptional, IsString } from "class-validator";
import { Contents } from "src/contents/contents.entity";

@ArgsType()
export class createServeyDto {
    @Field(() => String)
    @IsString()
    title: string

    @Field(() => String)
    @IsString()
    description: string

    @Field(() => String)
    @IsString()
    registrant: string

    @Field(() => [Contents])
    @IsOptional()
    contents: Contents[]
}