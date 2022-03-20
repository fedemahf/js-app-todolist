import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoController } from './todo.controller'
import { ToDoItem } from './todo.entity'
import { TodoService } from './todo.service'

@Module({
  imports: [TypeOrmModule.forFeature([ToDoItem])],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
