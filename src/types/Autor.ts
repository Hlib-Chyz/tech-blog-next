export type Author = {
  id: string
  name: string
  bio: string
  articles: { title: string; slug: string }[]
}
