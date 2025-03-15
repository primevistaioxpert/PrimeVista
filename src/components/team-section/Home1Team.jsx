"use client"
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const Home1Team = () => {
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
    return (
        <div className="home1-team-section mb-130">
        <div className="container">
          <div className="row gy-5 align-items-center justify-content-between mb-70">
            <div className="col-lg-4 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="section-title">
                <span>Our Creative Team</span>
                <h2>Meet Our Nice Team.</h2>
              </div>
              <div className="slider-btn-grp d-lg-flex d-none">
                <div className="slider-btn team-slider-prev">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="slider-btn team-slider-next">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-lg-8 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="founder-card">
                <div className="founder-img">
                  <img src="assets/img/home1/home1-team-founder-img.png" alt="" />
                </div>
                <div className="founder-content">
                  <p>“we believe in building more than homes—we build opportunities. Our Rent-to-Own model is designed to make homeownership accessible and empower families to secure their future. With a commitment to quality, integrity, and community growth, we strive to create lasting value for every homeowner."</p>
                  <div className="name-and-desig">
                    <span>Founder at, Prime Vista</span>
                    <h5>Jaswinder Singh</h5>
                  </div>
                </div>
              </div>
              <div className="slider-btn-grp d-lg-none d-flex">
                <div className="slider-btn team-slider-prev">
                  <i className="bi bi-arrow-left" />
                </div>
                <div className="slider-btn team-slider-next">
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper home1-team-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="assets/img/home1/team-img1.png" alt="" />
                      </div>
                      <div className="team-content">
                        <span>Project Manager</span>
                        <h5>Diljot Bassi</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="team-card">
                      <div className="team-img">
                        <img src="assets/img/home1/team-img2.png" alt="" />
                      </div>
                      <div className="team-content">
                        <span>Partner</span>
                        <h5>Sikander Kang</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Home1Team