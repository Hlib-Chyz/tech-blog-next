import PostClient from '@/components/PostClient'
import posts from '@/data/posts.json'
import { fetchPostById } from '@/lib/features/postsSlice'
import { store } from '@/lib/store'
import { Langs } from '@/types/Lang'
import { getLocale } from '@/utils/locale'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { dictionary } from '/content'
import { JsonLd } from '@/components/JsonLd'

export async function generateStaticParams() {
  const locales = Object.values(Langs)
  const params = []

  for (const locale of locales) {
    for (const post of posts) {
      params.push({ lang: locale, slug: post.slug })
    }
  }

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: Langs }>
}): Promise<Metadata> {
  const { slug, lang } = await params
  const locale = await getLocale()
  await store.dispatch(fetchPostById({ slug, locale }))
  const { post } = store.getState().posts

  if (!post) {
    return {
      title: dictionary[lang].metadataPostTitle,
      description: dictionary[lang].metadataPostDescription,
      alternates: {
        canonical: `http://localhost:3000/${lang}/posts/${slug}`,
        languages: {
          [Langs.en]: `http://localhost:3000/${Langs.en}/posts/${slug}`,
          [Langs.es]: `http://localhost:3000/${Langs.es}/posts/${slug}`,
          'x-default': `http://localhost:3000/${Langs.en}/posts/${slug}`,
        },
      },
    }
  }

  return {
    title: `${post.title} | ${dictionary[lang].techBlog}`,
    description: post.excerpt,
    alternates: {
      canonical: `http://localhost:3000/${lang}/posts/${slug}`,
      languages: {
        [Langs.en]: `http://localhost:3000/${Langs.en}/posts/${slug}`,
        [Langs.es]: `http://localhost:3000/${Langs.es}/posts/${slug}`,
        'x-default': `http://localhost:3000/${Langs.en}/posts/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://yourdomain.com/${lang}/posts/${slug}`,
      images: [
        {
          url: post.image,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string; lang: Langs }>
}) {
  const { slug, lang } = await params
  const locale = await getLocale()
  await store.dispatch(fetchPostById({ slug, locale }))
  const { post } = store.getState().posts

  if (!post) {
    notFound()
  }

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: 'https://yourdomain.com/path-to-image.jpg', // Replace with actual image URL
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'My App',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourdomain.com/logo.png', // Replace with actual logo URL
      },
    },
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <PostClient post={post} lang={lang} />
    </>
  )
}
