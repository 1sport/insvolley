import {instance} from "@/shared/api/api";
import {Args, Interview, Post, Response, StrapiType, VideoMedia} from "@/shared/api/types";
import qs from 'qs'

const revalidate = 0

const getPosts = async ({ filters, limit, start }: Args): Promise<Response<StrapiType<Post>[]>> => {
  return instance.strapi.get(`/posts?populate=image&${qs.stringify({
    filters,
    "pagination[limit]": limit || 10,
    "pagination[start]": start || 0,
    "sort[0]": "date:desc",
  })}`, {
    next: {
      revalidate
    }
  })
}

const getInterviews = async ({ filters, limit, start }: Args): Promise<Response<StrapiType<Interview>[]>> => {
  return instance.strapi.get(`/interviews?populate[0]=image&populate[1]=author&${qs.stringify({
    filters,
    "pagination[limit]": limit || 10,
    "pagination[start]": start || 0
  })}`, {
    next: {
      revalidate
    }
  })
}

const getVideoMedia = async ({ filters, limit, start }: Args): Promise<Response<StrapiType<VideoMedia>[]>> => {
  return instance.strapi.get(`/video-medias?${qs.stringify({
    filters,
    "pagination[limit]": limit || 10,
    "pagination[start]": start || 0
  })}`, {
    next: {
      revalidate
    }
  })
}

export const api = {
  getPosts,
  getInterviews,
  getVideoMedia
}