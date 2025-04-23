import authors from '@/data/authors.json'
import { Author } from '@/types/Author'
import { Langs } from '@/types/Lang'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAuthorById = createAsyncThunk(
  'authors/fetchAuthorById',
  async ({ id, locale }: { id: string; locale: Langs }) => {
    const author = authors.find((author) => author.id === id)
    if (!author) {
      throw new Error('Author not found')
    }
    const localizedAuthor: Author = {
      id: author.id,
      name: author.name[locale],
      bio: author.bio[locale],
      articles: author.articles.map((article) => ({
        title: article.title[locale],
        slug: article.slug,
      })),
    }
    return localizedAuthor
  },
)

const authorsSlice = createSlice({
  name: 'authors',
  initialState: {
    author: null as Author | null,
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthorById.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAuthorById.fulfilled, (state, action) => {
        state.loading = false
        state.author = action.payload
      })
      .addCase(fetchAuthorById.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Failed to fetch author by id'
      })
  },
})

export default authorsSlice.reducer
