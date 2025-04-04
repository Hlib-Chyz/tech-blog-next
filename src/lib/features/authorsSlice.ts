import { Author } from '@/types/Author'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Author[] = [
  {
    id: '1',
    name: 'John Doe',
    bio: 'A passionate frontend developer and React enthusiast.',
    articles: [
      {
        title: 'Getting Started with React',
        slug: 'getting-started-with-react',
      },
      {
        title: 'Understanding React Hooks',
        slug: 'understanding-react-hooks',
      },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    bio: 'An expert in Next.js and SEO optimization.',
    articles: [
      {
        title: 'Next.js SEO Best Practices',
        slug: 'nextjs-seo-best-practices',
      },
      {
        title: 'Building Static Sites with Next.js',
        slug: 'building-static-sites-with-nextjs',
      },
    ],
  },
  {
    id: '3',
    name: 'Alice Johnson',
    bio: 'A CSS wizard and UI/UX designer.',
    articles: [
      {
        title: 'Mastering CSS Grid',
        slug: 'mastering-css-grid',
      },
      {
        title: 'Responsive Design Principles',
        slug: 'responsive-design-principles',
      },
    ],
  },
  {
    id: '4',
    name: 'Bob Brown',
    bio: 'A backend developer specializing in Node.js and databases.',
    articles: [
      {
        title: 'Introduction to Node.js',
        slug: 'introduction-to-nodejs',
      },
      {
        title: 'Database Optimization Techniques',
        slug: 'database-optimization-techniques',
      },
    ],
  },
]

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    addAuthor(state, action: PayloadAction<Author>) {
      state.push(action.payload)
    },
    removeAuthor(state, action: PayloadAction<string>) {
      return state.filter((author) => author.id !== action.payload)
    },
  },
})

export const { addAuthor, removeAuthor } = authorsSlice.actions
export default authorsSlice.reducer
