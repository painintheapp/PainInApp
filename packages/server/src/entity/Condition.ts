import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity("conditions")
export class Condition extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text", { unique: true })
  conditionname: string;
}
