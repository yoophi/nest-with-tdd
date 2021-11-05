import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TaskModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
