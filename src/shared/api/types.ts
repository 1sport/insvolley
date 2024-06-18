
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
  createdAt: string
  image: { data: StrapiMedia },
}

export type Interview = {
  title: string
  text: any
  author: string
  image: { data: StrapiMedia },
}

export type VideoMedia = {
  link: VideoEmbed
}

export type Partner = {
  link: string
  image: { data: StrapiMedia },
}

export type Tournament = {
  name: string
  number: number
  games: number
  points: number
  wins: number
  losses: number
}

export type Rating = {
  name: string
  number: number
  points: number
}

export type Calendar = {
  name: string
  events: CalendarEvent[]
}

export type CalendarEvent = {
  id: number
  date: string
  name: string
  place: string
  type: string
}