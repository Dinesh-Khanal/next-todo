"use server";

import { completeTodo, createTodo, deleteTodo } from "@/lib/mongo/todo";
import { revalidatePath } from "next/cache";

export async function create(data: FormData) {
  const _name = data.get("_name") as string;
  await createTodo(_name);
  revalidatePath("/todos");
}
export async function removeTodo(id: string) {
  await deleteTodo(id);
  revalidatePath("/todos");
}
export async function updateTodoAction(id: string, status: boolean) {
  await completeTodo(id, status);
  revalidatePath("/todos");
}
