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

    @ManyToMany(() => Options, (options) => options.responses, { onDelete: 'SET NULL' })
    options: Options[]

    @ManyToMany(() => Contents, (contents) => contents.responses, { onDelete: 'SET NULL' })
    contents: Contents[]

    @ManyToMany(() => Serveys, (serveys) => serveys.responses, { onDelete: 'SET NULL' })
    serveys: Serveys[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;
}