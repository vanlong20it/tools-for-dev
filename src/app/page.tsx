import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container p-10">
        <h1 className="text-3xl font-bold">Tools for dev</h1>
        <ul className="mt-4">
          <li>
            <Link href="/convert" className="underline">
              Convert object from any case -&gt; camelCase
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
