"use client";
import { updateTodoAction } from "@/actions/todo";
import { Todo } from "@prisma/client";

export default function Todo({ todo }: { todo: Todo }) {
  return (
    <>
      <input
        type="checkbox"
        id={todo.id}
        defaultChecked={todo.status}
        onChange={() => updateTodoAction(todo.id as string, true)}
        className="peer"
      />
      <label
        htmlFor={todo.id}
        className="peer-checked:text-slate-400 peer-checked:line-through"
      >
        {todo.name}
      </label>
    </>
  );
}
