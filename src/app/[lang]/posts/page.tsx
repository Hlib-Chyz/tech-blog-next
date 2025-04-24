import PostsClient from '@/components/PostsClient'
import { fetchPosts } from '@/lib/features/postsSlice'
import { store } from '@/lib/store'
import { Langs } from '@/types/Lang'
import { getLocale } from '@/utils/locale'
import { Metadata } from 'next'
import { dictionary } from '/content'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Langs }>
}): Promise<Metadata> {
  const { lang } = await params
  return {
    title: dictionary[lang].metadataPostsTitle,
    description: dictionary[lang].metadataPostsDescription,
    alternates: {
      canonical: `http://localhost:3000/${lang}/posts`,
      languages: {
        [Langs.en]: `http://localhost:3000/${Langs.en}/posts`,
        [Langs.es]: `http://localhost:3000/${Langs.es}/posts`,
        'x-default': `http://localhost:3000/${Langs.en}/posts`,
      },
    },
  }
}

export default async function PostsPage({
  params,
}: {
  params: Promise<{ lang: Langs }>
}) {
  const { lang } = await params
  const locale = await getLocale()
  await store.dispatch(fetchPosts(locale))

  const { posts } = store.getState().posts

  const categories = Array.from(new Set(posts.map((post) => post.category)))
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  return (
    <div className="p-8">
      <PostsClient
        posts={posts}
        categories={categories}
        tags={tags}
        lang={lang}
      />
    </div>
  )
}
