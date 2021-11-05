interface CreateTodoEntityPayload {
  id: string;
  title: string;
  isCompleted?: boolean;
}

class Todo {
  public id: string;
  public title: string;
  public isCompleted: boolean;

  constructor(payload: CreateTodoEntityPayload) {
    this.id = payload.id;
    this.title = payload.title;
    this.isCompleted = payload.isCompleted;
  }

  static factory(payload: CreateTodoEntityPayload) {
    const title = payload.title.trim();
    if (title.length < 3) {
      throw new TypeError('title is too short');
    }

    const isCompleted = !!payload.isCompleted;
    return new Todo({ ...payload, title, isCompleted });
  }
}

export default Todo;
