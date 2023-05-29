"use client";
import { removeTodo } from "@/actions/todo";

type IProps = {
  id: string;
};
export default function DeleteBtn({ id }: IProps) {
  return (
    <button className="btn-red" onClick={() => removeTodo(id)}>
      Delete
    </button>
  );
}
