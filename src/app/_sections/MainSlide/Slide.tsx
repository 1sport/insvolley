"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
import {Tag} from "@/shared/ui/Tag";

import ArrowRight from '@/shared/images/arrow.svg'
import {Post, StrapiType} from "@/shared/api/types";
import {getImageUrl} from "@/shared/utils/image";

type Props = {
  data: StrapiType<Post>[]
}

export const Slide = ({ data }: Props) => {
  return (
    <div className="">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={true}
        onSlideChange={() => console.log('slide change')}
        modules={[Pagination]}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideItem data={item.attributes} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

type ItemProps = {
  data: Post
}

const SlideItem = ({ data }: ItemProps) => {
  return (
    <div className="h-[420px] flex flex-col justify-end">
      <img src={getImageUrl(data?.image)}
           alt={""}
           className="absolute object-cover h-full w-full z-0"/>

      <div className="h-[120px] bg-primary-500/85 z-10 py-4 px-6 flex flex-col items-start">
        <h2 className="font-semibold text-lg line-clamp-2 mt-2">
          {data.title}
        </h2>
        <span className="flex items-center gap-2 text-yellow">Подробнее <ArrowRight/></span>
      </div>
    </div>
  )
}
