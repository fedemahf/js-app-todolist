import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, Repository } from 'typeorm'
import { ToDoItem } from './todo.entity'

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(ToDoItem)
    private todoRepository: Repository<ToDoItem>
  ) {}

  findAll(): Promise<ToDoItem[]> {
    return this.todoRepository.find()
  }

  findOne(id: string): Promise<ToDoItem> {
    return this.todoRepository.findOne(id)
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.todoRepository.delete(id)
  }

  async insert(entity: {
    description: string
    mark: boolean
  }): Promise<ToDoItem> {
    return await this.todoRepository.save(entity)
  }

  async update(entity: ToDoItem) {
    return await this.todoRepository.save(entity)
  }
}
