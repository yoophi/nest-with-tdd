import { v4 as uuid } from 'uuid';
import Todo from './Todo';

describe('Todo', () => {
  describe('Todo 모델 생성', () => {
    test('constructor를 이용한 Todo 모델 생성', async () => {
      const code = uuid();
      const createTodoEntityPayload = {
        id: code,
        title: 'Task One',
        isCompleted: false,
      };
      const todo: Todo = await Todo.factory(createTodoEntityPayload);
      expect(todo).toBeInstanceOf(Todo);
      expect(todo.id).toEqual(code);
      expect(todo.title).toEqual('Task One');
      expect(todo.isCompleted).toEqual(false);
    });

    describe('Factory를 이용한 Todo 모델 생성', () => {
      test('정상적인 Todo 모델 생성', () => {
        const code = uuid();
        const payload = {
          id: code,
          title: 'Task One',
          isCompleted: false,
        };
        const todo: Todo = Todo.factory(payload);
        expect(todo).toBeInstanceOf(Todo);
        expect(todo.id).toEqual(code);
        expect(todo.title).toEqual('Task One');
        expect(todo.isCompleted).toEqual(false);
      });

      test('title 값은 공백으로만 구성될 수 없다', async () => {
        expect(() => {
          const code = uuid();
          const payload = {
            id: code,
            title: '   ',
            isCompleted: false,
          };
          Todo.factory(payload);
        }).toThrow(TypeError);
      });

      test('title 값 중 공백은 제거된다', async () => {
        const code = uuid();
        const payload = {
          id: code,
          title: 'hello ',
          isCompleted: false,
        };
        const todo: Todo = Todo.factory(payload);
        expect(todo.title).toBe('hello');
      });

      test('isCompleted의 기본 값은 false이다', async () => {
        const code = uuid();
        const payload = {
          id: code,
          title: 'hello ',
        };
        const todo: Todo = Todo.factory(payload);
        expect(todo.isCompleted).toBe(false);
      });
    });
  });
});
