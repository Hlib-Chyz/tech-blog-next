import posts from '@/data/posts.json'
import { Locale } from '@/types/Lang'
import { Post } from '@/types/Post'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (locale: Locale) => {
    try {
      const result: Post[] = posts.map((post) => {
        const localizedPost: Post = {
          id: post.id,
          title: post.title[locale],
          excerpt: post.excerpt[locale],
          slug: post.slug,
          category: post.category[locale],
          tags: post.tags[locale],
          author: post.author[locale],
          authorId: post.authorId,
          date: post.date,
        }
        return localizedPost
      })
      return result
    } catch (e) {
      console.log(e)
      return []
    }
  },
)

export const fetchPostById = createAsyncThunk(
  'posts/fetchPostById',
  async ({ slug, locale }: { slug: string; locale: Locale }) => {
    const post = posts.find((post) => post.slug === slug)
    if (!post) {
      throw new Error('Post not found')
    }
    const localizedPost: Post = {
      id: post.id,
      title: post.title[locale],
      excerpt: post.excerpt[locale],
      slug: post.slug,
      category: post.category[locale],
      tags: post.tags[locale],
      author: post.author[locale],
      authorId: post.authorId,
      date: post.date,
    }
    return localizedPost
  },
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [] as Post[],
    post: null as Post | null,
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
      .addCase(fetchPostById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.loading = false
        state.post = action.payload
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch post'
      })
  },
})

export default postsSlice.reducer
