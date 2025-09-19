import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <h1 className="text-6xl font-bold text-[var(--color-primary)]">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500  dark:text-gray-100 mt-2">
        Could not find the requested resource.
      </p>
      <Link href="/" className="mt-6 text-lg text-[var(--color-primary)] hover:underline">
        Return Home
      </Link>
    </div>
  );
}
