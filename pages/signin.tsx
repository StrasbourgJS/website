import { signInWithGitHub } from "@/src/services/signInWithGitHub";

export default function IndexPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="sr-only">Accès au dashboard</h1>
      <button
        onClick={signInWithGitHub}
        className="py-1 px-4 border border-gray-200 rounded"
      >
        Login
      </button>
    </main>
  );
}
