import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <Link href="/" className="text-xl font-bold hover:underline">
        <h1>My Next.js App</h1>
      </Link>
    </header>
  )
}
