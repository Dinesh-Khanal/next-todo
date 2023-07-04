import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col place-center px-24">
      <UserButton afterSignOutUrl="/" />
      <h1 className="text-3xl font-semibold py-2">Todo</h1>
    </main>
  );
}
