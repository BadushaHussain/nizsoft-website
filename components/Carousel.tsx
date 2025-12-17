'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface CarouselProps {
    children: React.ReactNode[]
    autoplay?: boolean
    autoplayDelay?: number
    loop?: boolean
    slidesPerView?: number | 'auto'
    spaceBetween?: number
    showPagination?: boolean
    showNavigation?: boolean
    breakpoints?: SwiperOptions['breakpoints']
    className?: string
}

export default function Carousel({
    children,
    autoplay = true,
    autoplayDelay = 5000,
    loop = true,
    slidesPerView = 1,
    spaceBetween = 30,
    showPagination = true,
    showNavigation = false,
    breakpoints,
    className = ''
}: CarouselProps) {

    const defaultBreakpoints = breakpoints || {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }

    return (
        <div className={`carousel-container ${className}`}>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                loop={loop}
                autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
                pagination={showPagination ? { clickable: true } : false}
                navigation={showNavigation}
                breakpoints={defaultBreakpoints}
                className="!pb-12"
            >
                {children.map((child, index) => (
                    <SwiperSlide key={index}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #0066ff;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #0066ff;
        }
      `}</style>
        </div>
    )
}
