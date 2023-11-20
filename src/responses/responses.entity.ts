import { Contents } from "src/contents/contents.entity";
import { Options } from "src/options/options.entity";
import { Serveys } from "src/serveys/serveys.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Responses {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    respondent: string;

    @ManyToMany(() => Options, (options) => options.responses, { onDelete: 'CASCADE' })
    options: Options[]

    @ManyToMany(() => Contents, (contents) => contents.responses, { onDelete: 'CASCADE' })
    contents: Contents[]

    @ManyToMany(() => Serveys, (serveys) => serveys.responses, { onDelete: 'CASCADE' })
    serveys: Serveys[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}