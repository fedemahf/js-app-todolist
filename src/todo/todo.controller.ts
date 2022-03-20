import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post
} from '@nestjs/common'
import { CreateToDoItemDto, UpdateToDoItemDto } from './todo.dto'
import { TodoService } from './todo.service'

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  throwBadRequest(response: string) {
    throw new HttpException(response, HttpStatus.BAD_REQUEST)
  }

  @Post('new')
  async insert(@Body() toDoItem: CreateToDoItemDto) {
    if (typeof toDoItem.description === 'undefined') {
      this.throwBadRequest('undefined description')
    } else if (toDoItem.description.length < 1) {
      this.throwBadRequest('null description')
    }

    return this.todoService.insert({
      description: toDoItem.description,
      mark: toDoItem.mark === '1'
    })
  }

  @Post('update')
  async update(@Body() input: UpdateToDoItemDto) {
    if (typeof input.id === 'undefined') {
      this.throwBadRequest('undefined id')
    } else if (typeof input.description === 'undefined') {
      this.throwBadRequest('undefined description')
    } else if (input.description.length < 1) {
      this.throwBadRequest('null description')
    }

    const entity = await this.todoService.findOne(input.id)

    if (typeof entity === 'undefined') {
      this.throwBadRequest('item not found')
    }

    entity.description = input.description
    entity.mark = input.mark === '1'
    return this.todoService.update(entity)
  }

  @Get('remove/:id')
  async remove(@Param('id') id: string) {
    return this.todoService.remove(id)
  }

  @Get('get/:id')
  async get(@Param('id') id: string) {
    return this.todoService.findOne(id)
  }

  @Get()
  async index() {
    return this.todoService.findAll()
  }
}
