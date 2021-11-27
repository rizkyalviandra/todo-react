import create from "zustand";

const useTodoStore = create((set: any) => ({
  todos: [],
  todoId: 0,
  setTodoId: (id: number) => set(() => ({ todoId: id })),
  setTodos: (todos: any) => set({ todos }),
  addTodo: (todoText: any) =>
    set((state: any) => ({
      todos: [
        ...state.todos,
        {
          title: todoText.title,
          description: todoText.description,
          id: state.todos.length + 1,
          status: 0,
        },
      ],
    })),
  getTodo: (id: number) =>
    set((state: any) => ({
      todos: state.todos.filter((i: any) => i.id === id),
    })),
  deleteTodo: (id: number) =>
    set((state: any) => ({
      todos: state.todos.filter((todo: any) => todo.id != id),
    })),
  updateTodo: (id: number, todo: Object) =>
    set((state: any) => ({
      todos: state.todos.map((t: any) => (t.id === id ? { ...t, ...todo } : t)),
    })),
  completedTodo: (id: number) =>
    set((state: { todos: any[] }) => ({
      todos: state.todos.map((todo: { id: number }) => {
        if (todo.id == id) {
          return {
            ...todo,
            status: 1,
          };
        }
        return todo;
      }),
    })),
}));

export default useTodoStore;
