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
  },
}
