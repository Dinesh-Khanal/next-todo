import clientPromise from "@/lib/mongo/client";
import { ObjectId, Db, Collection } from "mongodb";

type ITodo = {
  _id?: string;
  name: string;
  description?: string;
  status?: boolean;
};

let client;
let db: Db;
let todos: Collection<ITodo>;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db();
    todos = db.collection("todos");
  } catch (error) {
    throw new Error("Failed to connect to the database.");
  }
}

(async () => {
  await init();
})();

//////////////
/// TODOS ///
/////////////

export async function getAllTodos() {
  try {
    if (!todos) await init();

    const result = await todos
      .find({})
      .map((todo) => ({ ...todo, _id: todo._id }))
      .toArray();
    return { todos: result };
  } catch (error) {
    return { error: "Failed to fetch todos!" };
  }
}

export async function getTodoById(id: string) {
  try {
    if (!todos) await init();

    const todo = await todos.findOne({ _id: id });
    if (!todo) throw new Error();
    return { todo: { ...todo, _id: todo._id } };
  } catch (error) {
    return { error: "Failed to get todo!" };
  }
}

export async function createTodo(name: string) {
  try {
    if (!todos) await init();

    return await todos.insertOne({ name, status: false });
  } catch (error) {
    return { error: "Failed to create todo!" };
  }
}

export async function deleteTodo(id: string) {}

export async function completeTodo(id: string) {}
