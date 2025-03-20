import React from 'react'
import Header1 from '@/components/header/Header1'
import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import Home1FooterTop from '@/components/Footer/Home1FooterTop';

import useModalVideo from '@/utils/useModalVideo'
import Link from 'next/link'
import Home1Support from '@/components/supports/Home1Support';

const InvestorPage = () => {
  return (
    <>
      <Header1 fluid={"container-fluid"} />
      <Breadcrum content={"Invest With Us"} pageTitle={'Our Investors'} pagename={'investors'} />
      <div className="team-page pt-120 mb-120">
        <div className="container">
        <div className="about-top-area mb-50">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-lg-8 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="about-title-area">
                <div className="section-title">
                  <span>Invest with confidence</span>
                  <h2>Experts in Construction Your Excellence.</h2>
                  <p>At Prime Vista Development & Management Solutions (PVDMS), we are more than just developers—we are visionaries committed to building innovative, sustainable, and high-quality projects that shape the future. Our expertise spans across project management, real estate development, and investment solutions, making us a trusted partner in growth.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 wow animate fadeInDown" data-wow-delay="500ms" data-wow-duration="1500ms">
              <div className="about-title-area">
                <div className="row align-items-center">
                  <h2>Why Invest in PVDMS?</h2>
                  <div className="col-lg-5">
                  <div className="about-content">
                  <ul>
                    <li data-wow-delay="500ms" data-wow-duration="1500ms">
                      <h5>Proven Expertise & Track Record</h5>
                    </li>
                    <p>With years of industry experience, PVDMS has successfully delivered high-quality projects that exceed expectations. Our strategic approach to development ensures efficiency, profitability, and long-term value creation.</p>
                    <li data-wow-delay="600ms" data-wow-duration="1500ms"><h5>Sustainable & High-Value Projects</h5>
                    <p>We focus on projects that balance affordability, sustainability, and innovation. Our developments are designed to create lasting value for investors, businesses, and communities alike.</p></li>
                    <br/>
                    <li data-wow-delay="700ms" data-wow-duration="1500ms"><h5>Strong Market Position & Growth Potential</h5>
                    <p>PVDMS operates in a rapidly growing sector, leveraging market trends to drive expansion and new opportunities. Our commitment to excellence ensures a competitive edge in the industry.</p></li>
                    <br/>
                    <li data-wow-delay="800ms" data-wow-duration="1500ms" ><h5>Transparent & Strategic Investment Approach</h5>
                    <p>We prioritize transparency, data-driven decision-making, and a structured investment approach. Our investors benefit from clear insights into project timelines, financial expectations, and long-term profitability.</p></li>
                    <br/>
                    <li data-wow-delay="900ms" data-wow-duration="1500ms"><h5>Commitment to Quality & Innovation</h5>
                    <p>At PVDMS, quality is at the heart of everything we do. From cutting-edge construction techniques to smart investment strategies, we continuously push the boundaries of excellence.</p></li>
                    <br/>
                  </ul>
                  </div>
                  </div>
                  <div className="col-lg-7 d-lg-block d-none">
            <div className="about-img magnetic-item">
              <img src="assets/img/home1/about-img.jpg" alt="" />
            </div>
          </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 d-flex justify-content-lg-end">
              
            </div>
          </div>
        </div>
          
        </div>
      </div>
      <Home1Support/>
      <Home1FooterTop />
      <Footer1 />
    </>
  )
}

export default InvestorPage