import {instance} from "@/shared/api/api";
import {
  Args,
  Calendar,
  Interview,
  Partner,
  Post,
  Rating,
  Response,
  StrapiType,
  Tournament,
  VideoMedia
} from "@/shared/api/types";
import qs from 'qs'

const revalidate = 60

const getPost = async (id: number): Promise<Response<StrapiType<Post>>> => {
  return instance.strapi.get(`/posts/${id}?populate=image`, {
    next: {
      revalidate
    }
  })
}

const getPosts = async ({ filters, limit, start }: Args): Promise<Response<StrapiType<Post>[]>> => {
  return instance.strapi.get(`/posts?populate=image&${qs.stringify({
    filters,
    "pagination[limit]": limit || 10,
    "pagination[start]": start || 0,
    "sort[0]": "createdAt:desc",
  })}`, {
    next: {
      revalidate
    }
  })
}

const getInterview = async (id: number): Promise<Response<StrapiType<Interview>>> => {
  return instance.strapi.get(`/interviews/${id}?populate=image`, {
    next: {
      revalidate
    }
  })
}

const getInterviews = async ({ filters, limit, start }: Args): Promise<Response<StrapiType<Interview>[]>> => {
  return instance.strapi.get(`/interviews?populate=image&${qs.stringify({
    filters,
    "pagination[limit]": limit || 10,
    "pagination[start]": start || 0,
    "sort[0]": "createdAt:desc",
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

const getPartners = (): Promise<Response<StrapiType<Partner>[]>> => {
  return instance.strapi.get(`/partners?populate=image`, {
    next: {
      revalidate
    }
  });
}

const getTournaments = ({ filters }: Args): Promise<Response<StrapiType<Tournament>[]>> => {
  return instance.strapi.get(`/turnirs?${qs.stringify({
    filters,
    "sort[0]": "number:asc",
  })}`, {
    next: {
      revalidate
    }
  })
}

const getRatings = ({ filters }: Args): Promise<Response<StrapiType<Rating>[]>> => {
  return instance.strapi.get(`/ratings?${qs.stringify({
    filters,
    "sort[0]": "number:asc",
  })}`, {
    next: {
      revalidate
    }
  })
}

const getCalendar = (): Promise<Response<StrapiType<Calendar>[]>> => {
  return instance.strapi.get(`/calendars?${qs.stringify({
    "pagination[limit]": 1,
    "sort[0]": "createdAt:desc",
    "populate": "events"
  })}`, {
    next: {
      revalidate
    }
  })
}

export const api = {
  getPost,
  getPosts,
  getInterview,
  getInterviews,
  getVideoMedia,
  getPartners,
  getTournaments,
  getRatings,
  getCalendar
}