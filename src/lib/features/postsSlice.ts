import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Post } from '@/types/Post'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('http://localhost:3000/api/posts')
  const data: Post[] = await response.json()
  return data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [] as Post[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch posts'
      })
  },
})

export default postsSlice.reducer
