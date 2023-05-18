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

export const searchTodoListFilterState = atom({
  key: "searchTodoListFilterState",
  default: ""
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
    const search = get(searchTodoListFilterState)
    
    if(search) {
      return list.filter((todo) => todo.title === search);
    }

    switch (filter) {
      case "Show All":
        return list
      case "Show Completed":
        return list.filter((item) => item.completed);
      case "Show Uncompleted":
        return list.filter((item) => !item.completed);
      default:
        return list
    }
  }
});

export const searchTodoListState = selector({
  key: "searchTodoListState",
  get: ({ get }) => {
    const search = get(searchTodoListFilterState);
    const list = get(todosState);
    return list.filter((todo) => todo.title === search);
  }
});