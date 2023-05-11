"use server";

import { createTodo } from "@/lib/mongo/todo";
import { revalidatePath } from "next/cache";

export async function create(formData: FormData) {
  const _name = formData.get("_name") as string;
  await createTodo(_name);
  revalidatePath("/todos");
}
