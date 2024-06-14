
export type Args = {
  filters?: object
  limit?: number
  start?: number
}
export type Response<T> = {
  data: T
}

export type StrapiType<T> = {
  id: number
  attributes: T
}

export type StrapiMedia = {
  id: number
  attributes: StrapiMediaAttributes
}

type StrapiMediaAttributes = {
  url: string
  name: string
}


export type VideoEmbed = {
  url: string
  title: string
  thumbnail: string
  mime: string
  rawData: {
    title: string
    author_name: string
    author_url: string
    type: string,
    height: number,
    width: number,
    version: string
    provider_name: string
    provider_url: string
    thumbnail_height: number,
    thumbnail_width: number,
    thumbnail_url: string
    html: string
  }
}

export type Post = {
  title: string
  description: any
  date: string
  image: { data: StrapiMedia },
}

export type Interview = {
  title: string
  text: any
  author: { data: StrapiType<Author> }
  image: { data: StrapiMedia },
}

export type Author = {
  name: string
}

export type VideoMedia = {
  link: VideoEmbed
}