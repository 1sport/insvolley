"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";
import {Tag} from "@/shared/ui/Tag";

import ArrowRight from '@/shared/images/arrow.svg'

export const MainSlide = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
        <SwiperSlide>
          <SlideItem />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

const SlideItem = () => {
  return (
    <div className="h-[420px] flex flex-col justify-end">
      <Image src="/tmp-news.png" fill alt="image" quality={100} style={{ objectFit: 'cover' }} />

      <div className="h-[130px] bg-primary-500/85 z-10 py-4 px-10 flex flex-col items-start">
        <Tag />
        <h2 className="font-semibold text-lg line-clamp-1 mt-2">
          Первые волейбольные клубы в Казахстане появились в 1928 году.
        </h2>
        <span className="flex items-center gap-2 text-yellow">Подробнее <ArrowRight /></span>
      </div>
    </div>
  )
}
