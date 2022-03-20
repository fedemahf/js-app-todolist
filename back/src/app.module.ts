import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoModule } from './todo/todo.module'
import { ToDoItem } from './todo/todo.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite3',
      entities: [ToDoItem],
      synchronize: true
    }),
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
