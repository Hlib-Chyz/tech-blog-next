import { Langs } from '@/types/Lang'

type DictionaryEntry = {
  greeting: string
  welcomeMessage: string
  aboutUsTitle: string
  aboutUsDescription: string
  postsDescription: string
  footerText: string
  filterAllCategories: string
  filterAllTags: string
  authorArticlesTitle: string
  authorNotFound: string
  postNotFound: string
  myNextJsApp: string
  by: string
  on: string
  category: string
  tags: string
  postsTitle: string
  techBlog: string
  metadataAboutTitle: string
  metadataAboutDescription: string
  metadataAuthorTitle: string
  metadataAuthorDescription: string
  metadataPostTitle: string
  metadataPostDescription: string
  metadataPostsTitle: string
  metadataPostsDescription: string
  metadataLanguageLayoutDescription: string
  homeTitle: string
  homeDescription: string
}

export const dictionary: Record<Langs, DictionaryEntry> = {
  en: {
    greeting: 'Hello, welcome!',
    welcomeMessage:
      'Welcome to our application! Please select your preferred language below.',
    aboutUsTitle: 'About Us',
    aboutUsDescription: 'Learn more about our mission and values.',
    postsDescription:
      'Browse all tech articles on React, Next.js, CSS, and more.',
    footerText: '© 2023 My Next.js App',
    filterAllCategories: 'All Categories',
    filterAllTags: 'All Tags',
    authorArticlesTitle: 'Articles',
    authorNotFound: 'The author you are looking for does not exist.',
    postNotFound: 'The post you are looking for does not exist.',
    myNextJsApp: 'My Next.js App',
    by: 'By',
    on: 'on',
    category: 'Category',
    tags: 'Tags',
    postsTitle: 'All Blog Posts',
    techBlog: 'Tech Blog',
    metadataAboutTitle: 'About Us | Tech Blog',
    metadataAboutDescription: 'Learn more about our mission and values.',
    metadataAuthorTitle: 'Author Not Found | Tech Blog',
    metadataAuthorDescription: 'The author you are looking for does not exist.',
    metadataPostTitle: 'Post Not Found | Tech Blog',
    metadataPostDescription: 'The post you are looking for does not exist.',
    metadataPostsTitle: 'Post Not Found | Tech Blog',
    metadataPostsDescription: 'The post you are looking for does not exist.',
    metadataLanguageLayoutDescription:
      'A platform to share and learn about tech articles.',
    homeTitle: 'Welcome to My App',
    homeDescription:
      'Discover amazing features and content tailored just for you.',
  },
  es: {
    greeting: '¡Hola, bienvenido!',
    welcomeMessage:
      '¡Bienvenido a nuestra aplicación! Por favor, selecciona tu idioma preferido a continuación.',
    aboutUsTitle: 'Sobre Nosotros',
    aboutUsDescription: 'Conoce más sobre nuestra misión y valores.',
    postsDescription:
      'Explora todos los artículos técnicos sobre React, Next.js, CSS y más.',
    footerText: '© 2023 Mi Aplicación Next.js',
    filterAllCategories: 'Todas las Categorías',
    filterAllTags: 'Todas las Etiquetas',
    authorArticlesTitle: 'Artículos',
    authorNotFound: 'El autor que buscas no existe.',
    postNotFound: 'La publicación que buscas no existe.',
    myNextJsApp: 'Mi Aplicación Next.js',
    by: 'Por',
    on: 'el',
    category: 'Categoría',
    tags: 'Etiquetas',
    postsTitle: 'Todas las Publicaciones del Blog',
    techBlog: 'Blog de Tecnología',
    metadataAboutTitle: 'Sobre Nosotros | Blog de Tecnología',
    metadataAboutDescription: 'Conoce más sobre nuestra misión y valores.',
    metadataAuthorTitle: 'Autor No Encontrado | Blog de Tecnología',
    metadataAuthorDescription: 'El autor que buscas no existe.',
    metadataPostTitle: 'Publicación No Encontrada | Blog de Tecnología',
    metadataPostDescription: 'La publicación que buscas no existe.',
    metadataPostsTitle: 'Publicación No Encontrada | Blog de Tecnología',
    metadataPostsDescription: 'La publicación que buscas no existe.',
    metadataLanguageLayoutDescription:
      'Una plataforma para compartir y aprender sobre artículos tecnológicos.',
    homeTitle: 'Discover amazing features and content tailored just for you.',
    homeDescription:
      'Descubre características increíbles y contenido diseñado para ti.',
  },
}
