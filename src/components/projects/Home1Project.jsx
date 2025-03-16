"use client";
import React, { useMemo } from "react";
import projectData from "../../data/project.json"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";

const Home1Project = () => {
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
        nextEl: ".project-slider-next",
        prevEl: ".project-slider-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2.7,
        },
        1200: {
          slidesPerView: 3.7,
        },
        1400: {
          slidesPerView: 3.5,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home1-project-section mb-130">
        <div className="container">
          <div className="row gy-4 align-items-center justify-content-between mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title white">
                <span>Our Projects</span>
                <h2>Completed and ongoing Projects.</h2>
                <Link href="/project" className="primary-btn white">
                  View All Project
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-xl-2 col-md-3 d-flex justify-content-md-end">
              <div className="slider-btn-grp white">
                <div className="slider-btn project-slider-prev">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="slider-btn project-slider-next">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-project-slider-wrap">
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper home1-project-slider">
                <div className="swiper-wrapper">
                  {
                    projectData.map((data) => {
                      const { id, status, title, img, link } = data;
                      return <SwiperSlide className="swiper-slide">
                        <div className="project-card">
                          <div className="project-img-wrap">
                            <Link href="/project\" className="project-img">
                              <img src={img} alt="" />
                            </Link>
                            <div className="button-area">
                              <Link href="/project" className="primary-btn2">
                                <span>
                                  View Project
                                  <svg viewBox="0 0 13 20">
                                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                  </svg>
                                </span>
                              </Link>
                            </div>
                          </div>
                          <div className="project-content">
                            <span>{status}</span>
                            <h4><Link href="/project">{title}</Link></h4>
                          </div>
                        </div>
                      </SwiperSlide>
                    })
                    
                  }
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home1Project