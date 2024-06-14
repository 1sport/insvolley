
import {API_URL_MEDIA} from "@/shared/api/api";
import {StrapiMedia} from "@/shared/api/types";

export const getImageUrl = (image: { data: StrapiMedia | StrapiMedia[] }) => {
  if (!image?.data) {
    return undefined
  }
  if (Array.isArray(image?.data) && image?.data.length) {
    return API_URL_MEDIA + image?.data?.[0]?.attributes?.url
  }
  return API_URL_MEDIA + (image?.data as StrapiMedia)?.attributes?.url
}