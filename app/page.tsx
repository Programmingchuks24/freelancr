import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex gap-6 items-center justify-center">
      <div className="text-center mb-6">
        <p className="text-4xl font-bold">
          FreeLanc<span className="text-blue-500">r</span>
        </p>
        <p className="text-gray-600 mt-2">
          Your one-stop solution for creating no-code freelance portfolios
        </p>
        <p className="text-gray-600 mt-2">
          Join us and start creating your freelancr portfolio journey today!
        </p>
      </div>
      <div className="flex flex-col gap-6 w-full max-w-xs">
        <Link
          href="/signup"
          className="text-center bg-blue-700 text-white py-3 rounded shadow hover:bg-blue-800 transition"
        >
          Sign Up
        </Link>
        <Link
          href="/login"
          className="text-center bg-blue-700 text-white py-3 rounded shadow hover:bg-blue-800 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
