import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Servey {
    @Field(type => Int)
    id: number;

    @Field({ nullable: true })
    title?: string

    @Field({ nullable: true })
    description?: string

    @Field({ nullable: true })
    registrant?: string

    // @Field({ nullable: true })
    // contents?: Contents[]

    // @Field({ nullable: true })
    // completes?: Completes[]

    // @Field({ description: "response list", nullable: true })
    // responses?: Responses[]

    @Field({ nullable: true })
    createdAt?: Date;

    @Field()
    updateAt?: Date;
}