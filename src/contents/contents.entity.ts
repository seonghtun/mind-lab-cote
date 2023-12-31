import { Options } from "src/options/options.entity";
import { Responses } from "src/responses/responses.entity";
import { Serveys } from "src/serveys/serveys.entity";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm";

@Entity()
export class Contents {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    type: string

    @OneToMany(() => Options, (options) => options.content, {
        cascade: true
    })
    option: Options[]

    @ManyToMany(() => Responses, (responses) => responses.contents, {
        cascade: true
    })
    responses: Responses[]

    @ManyToMany(() => Serveys, (serveys) => serveys.contents, {
        onDelete: "SET NULL"
    })
    serveys: Serveys[]
}