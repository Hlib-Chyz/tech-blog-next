import { CardProps } from '@/types/CardProps'
import Link from 'next/link'

export default function Card({ title, description, href }: CardProps) {
  return (
    <Link
      href={href}
      className="block border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <h2 className="text-lg font-semibold text-blue-600 hover:underline">
        {title}
      </h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}
