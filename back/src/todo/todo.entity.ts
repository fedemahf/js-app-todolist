import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ToDoItem {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  description: string

  @Column({ default: false })
  mark: boolean
}
