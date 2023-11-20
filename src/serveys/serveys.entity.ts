import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Completes } from "src/complete/complete.entity";
import { Contents } from "src/contents/contents.entity";
import { Responses } from "src/responses/responses.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm";

@Entity()
@ObjectType()
export class Serveys {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number

    @Column()
    @Field(() => String)
    title: string

    @Column()
    @Field(() => String)
    description: string

    @Column()
    @Field(() => String)
    registrant: string

    @ManyToMany(() => Contents, (contents) => contents.serveys, {
        cascade: true
    })
    @JoinTable()
    @Field(() => [Contents])
    contents?: Contents[]

    @ManyToMany(() => Completes, (completes) => completes.serveys, {
        cascade: true
    })
    @JoinTable()
    @Field(() => [Completes])
    completes?: Completes[]

    @ManyToMany(() => Responses, (responses) => responses.serveys, {
        cascade: true
    })
    @JoinTable()
    @Field(() => [Responses])
    responses?: Responses[]

    @CreateDateColumn()
    @Field()
    createdAt: Date;

    @UpdateDateColumn()
    @Field()
    updateAt: Date;
}