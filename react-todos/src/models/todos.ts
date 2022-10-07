export type Visibility = "all" | "active" | "completed";
export type Todo = {
  id?: string;
  title: string;
  completed: boolean;
};