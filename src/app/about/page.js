"use client"
import Breadcrum from '@/components/common/Breadcrum'

import Header1 from '@/components/header/Header1'
import Footer1 from '@/components/Footer/Footer1'
import Link from 'next/link'
import Home1About from "@/components/about/Home1About";
import useModalVideo from '@/utils/useModalVideo'
import Home1Team from "@/components/team-section/Home1Team";
import Home1Testimonial from '@/components/testimonial/Home1Testimonial'
import React, { useMemo } from "react";
import Home1Banner from "@/components/banner/Home1banner";
import Home1Project from "@/components/projects/Home1Project";
import Home1Support from "@/components/supports/Home1Support";
import Home1Banner2 from "@/components/banner/Home1Banner2";
import Home1FooterTop from "@/components/Footer/Home1FooterTop";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const AboutPage = () => {

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".team-slider-next",
        prevEl: ".team-slider-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  const { openModal, Modal } = useModalVideo();
  return (
    <div>
      <Header1 fluid={"container-fluid"} />
      <Breadcrum content='View Our Story' pageTitle={'About Us'} pagename={'About Us'} />
      <br/>
      <Home1About />
      <Home1Support />
      <Home1Team/>
      <Home1FooterTop />

      <Footer1 />
    </div>
  )
}

export default AboutPage    