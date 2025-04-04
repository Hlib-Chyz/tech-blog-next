export const metadata = {
  title: 'About Us | Tech Blog',
  description:
    'Learn more about our platform where developers can write and read tech articles on React, Next.js, CSS, and more.',
}

export default function AboutPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        Welcome to <strong>Tech Blog</strong>, a platform where developers can
        share their knowledge and learn from others. Our mission is to create a
        space for developers to write and read articles on various topics like
        <strong> React</strong>, <strong>Next.js</strong>, <strong>CSS</strong>,
        and more.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Whether you&apos;re a beginner or an experienced developer, Tech Blog is
        the perfect place to explore new ideas, improve your skills, and connect
        with the developer community.
      </p>
    </div>
  )
}
