"use client"
import React , {useEffect}from 'react'
import { heroSlides } from '@/data/data'
import './hero.css'

import AOS from 'aos';
import { Swiper  , SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HeroSlides from '@/components/HeroSlides';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import {  ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing : 'ease-in-out',
      mirror: false,
      once: false
    });
  }, [])
  return (
    <section id='hero-slider' className='hero-slider swiper-container'>
      <div className="container-md" data-aos="fade-in">
        <div className="row">
          <div className="col-12">
            <Swiper
              slidesPerView={'auto'}
              speed={500}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                el  : '.swiper-pagination',
                type: 'bullets',
                clickable: true,
              }}
              navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
              }}
              modules={[Autoplay , Pagination , Navigation  ]}
              loop={true}
              className="sliderFeaturedPosts"
            >
              {
                heroSlides.map((slides)=>(
                    <SwiperSlide key={slides.id}>
                      {/* include customised hero slides */}
                      <HeroSlides slide={slides}  />
                    </SwiperSlide>
                ))
              }
              <div className="custom-swiper-button-next">
                <span><ArrowRightIcon size={24}/></span>
              </div>
              <div className="custom-swiper-button-prev">
              <span><ArrowLeftIcon size={24}/></span>
              </div>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero