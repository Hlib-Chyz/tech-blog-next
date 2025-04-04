import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post } from '@/types/Post'

const initialState: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and how to get started.',
    slug: 'getting-started-with-react',
    category: 'React',
    tags: ['JavaScript', 'Frontend'],
    author: 'John Doe',
    authorId: '1',
    date: '2023-04-01',
  },
  {
    id: '2',
    title: 'Understanding React Hooks',
    excerpt: 'Dive deep into React Hooks and how to use them effectively.',
    slug: 'understanding-react-hooks',
    category: 'React',
    tags: ['React', 'Hooks'],
    author: 'John Doe',
    authorId: '1',
    date: '2023-04-10',
  },
  {
    id: '3',
    title: 'Next.js SEO Best Practices',
    excerpt: 'Optimize your Next.js app for search engines.',
    slug: 'nextjs-seo-best-practices',
    category: 'Next.js',
    tags: ['SEO', 'Web Development'],
    author: 'Jane Smith',
    authorId: '2',
    date: '2023-03-15',
  },
  {
    id: '4',
    title: 'Building Static Sites with Next.js',
    excerpt: 'Learn how to build fast and scalable static sites with Next.js.',
    slug: 'building-static-sites-with-nextjs',
    category: 'Next.js',
    tags: ['Static Sites', 'Next.js'],
    author: 'Jane Smith',
    authorId: '2',
    date: '2023-03-20',
  },
  {
    id: '5',
    title: 'Mastering CSS Grid',
    excerpt: 'A comprehensive guide to CSS Grid for modern layouts.',
    slug: 'mastering-css-grid',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Frontend'],
    author: 'Alice Johnson',
    authorId: '3',
    date: '2023-02-10',
  },
  {
    id: '6',
    title: 'Responsive Design Principles',
    excerpt:
      'Learn the principles of responsive design for better user experiences.',
    slug: 'responsive-design-principles',
    category: 'CSS',
    tags: ['CSS', 'Responsive Design'],
    author: 'Alice Johnson',
    authorId: '3',
    date: '2023-02-15',
  },
  {
    id: '7',
    title: 'Introduction to Node.js',
    excerpt:
      'Get started with Node.js and build your first backend application.',
    slug: 'introduction-to-nodejs',
    category: 'Node.js',
    tags: ['Backend', 'Node.js'],
    author: 'Bob Brown',
    authorId: '4',
    date: '2023-01-05',
  },
  {
    id: '8',
    title: 'Database Optimization Techniques',
    excerpt:
      'Learn techniques to optimize your database for better performance.',
    slug: 'database-optimization-techniques',
    category: 'Databases',
    tags: ['Databases', 'Optimization'],
    author: 'Bob Brown',
    authorId: '4',
    date: '2023-01-10',
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.push(action.payload)
    },
    removePost(state, action: PayloadAction<string>) {
      return state.filter((post) => post.id !== action.payload)
    },
  },
})

export const { addPost, removePost } = postsSlice.actions
export default postsSlice.reducer
