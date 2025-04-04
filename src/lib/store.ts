import authorsSlice from '@/lib/features/authorsSlice'
import postsSlice from '@/lib/features/postsSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: { posts: postsSlice, authors: authorsSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
