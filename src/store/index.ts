import { atom, selector } from "recoil";

export interface Todo {
  id: number,
  title: string,
  userId: number
  completed: boolean;
}

export const todosState = atom({
  key: "todos",
  default: [] as Todo[],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Show All"
});

export const infoValue = selector({
  key: "infoValue",
  get: ({ get }) => ({
    total: get(todosState).length,
    completed: get(todosState).filter((todo) => todo.completed).length,
    notCompleted: get(todosState).filter((todo) => !todo.completed).length,
  }),
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todosState);
    if (filter === "Show All") {
      return list
    }
    if (filter === "Show Completed") {
      return list.filter((item) => item.completed);
    }
    if (filter === "Show Uncompleted") {
      return list.filter((item) => !item.completed);
    }
    return list
  }
});