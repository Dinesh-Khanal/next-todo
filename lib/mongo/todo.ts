import prisma from "@/lib/mongo/prisma";
export async function getAllTodos() {
  try {
    const todos = await prisma.todo.findMany();
    return { todos };
  } catch (error) {
    return { error: "Failed to fetch todos!" };
  }
}

export async function getTodoById(id: string) {
  try {
    const todo = await prisma.todo.findUnique({ where: { id } });
    if (!todo) throw new Error();
    return { todo };
  } catch (error) {
    return { error: "Failed to get todo!" };
  }
}

export async function createTodo(name: string) {
  try {
    const todo = await prisma.todo.create({ data: { name, status: false } });
    return { todo };
  } catch (error) {
    return { error: "Failed to create todo!" };
  }
}

export async function deleteTodo(id: string) {
  try {
    return await prisma.todo.delete({ where: { id } });
  } catch (error) {
    return { error };
  }
}

export async function completeTodo(id: string, status: boolean) {
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { status: true },
    });
    return { updatedTodo };
  } catch (error) {
    return { error };
  }
}
