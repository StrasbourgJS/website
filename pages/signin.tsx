import { getAuthCodeUrl } from "@/src/services/getAuthCodeUrl";

export default function IndexPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="sr-only">Accès au dashboard</h1>
      <a
        href={getAuthCodeUrl()}
        className="py-1 px-4 border border-gray-200 rounded"
      >
        Login
      </a>
    </main>
  );
}
