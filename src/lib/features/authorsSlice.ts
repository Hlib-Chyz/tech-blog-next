import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Author } from '@/types/Author'

export const fetchAuthorById = createAsyncThunk(
  'authors/fetchAuthorById',
  async (id: string) => {
    console.log(1)
    const response = await fetch(`/api/authors/${id}`)
    console.log(3)
    if (!response.ok) {
      throw new Error(`Failed to fetch author: ${response.statusText}`)
    }
    const data: Author = await response.json()
    return data
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
