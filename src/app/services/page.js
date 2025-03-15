import React from 'react'
import Breadcrum from '@/components/common/Breadcrum'
import Header1 from '@/components/header/Header1'
import Footer1 from '@/components/Footer/Footer1'
import Link from 'next/link'
export const metadata = {
  icons: {
    icon: "/assets/img/fav-icon.svg",
  },
};
const ServicePage = () => {
  return (
    <>
      <Header1 style={"inner-page"} fluid="container-fluid" />
      <Breadcrum content='What We Work' pageTitle={'Service'} pagename={'Service'} />
      <div className="home1-service-section">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-80 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-lg-4">
              <div className="section-title">
                <span>Our Construction Services</span>
                <h2>Building Your Dreams.</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section-content">
                <p>We understand your needs and delivery digitaloi marketing through unique selling oneto homeles proposition Our team of expert.</p>
              </div>
            </div>
          </div>
          <div className="row mb-70">
            <div className="col-lg-12">
              <ul className="sevices-wrap">
                <li className="single-services mb-20 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <h3><Link href="/services/service-details">Residential <span>Construction</span></Link></h3>
                  <div className="content">
                    <p>Health and care consulting refers to the practice of providing expert
                      advice and guidance.</p>
                    <ul className="tag-list">
                      <li><Link href="/services">Family Homes</Link></li>
                      <li><Link href="/services">Single Home</Link></li>
                      <li><Link href="/services">Custom Homes</Link></li>
                      <li><Link href="/services">Home Additions</Link></li>
                      <li><Link href="/services">Renovations</Link></li>
                      <li><Link href="/services">Remodeling</Link></li>
                    </ul>
                  </div>
                  <div className="button-area">
                    <Link href="/services/service-details">
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </li>
                <li className="single-services mb-20 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <h3><Link href="/services/service-details">Commercial <span>Construction</span></Link></h3>
                  <div className="content">
                    <p>Health and care consulting refers to the practice of providing expert
                      advice and guidance.</p>
                    <ul className="tag-list">
                      <li><Link href="/services">Office Buildings</Link></li>
                      <li><Link href="/services">Retail Spaces</Link></li>
                      <li><Link href="/services">Restaurants</Link></li>
                      <li><Link href="/services">Hotels</Link></li>
                      <li><Link href="/services">Hospitality</Link></li>
                      <li><Link href="/services">Medical Facilities</Link></li>
                    </ul>
                  </div>
                  <div className="button-area">
                    <Link href="/services/service-details">
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </li>
                <li className="single-services mb-20 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <h3><Link href="/services/service-details">Industrial <span>Construction</span></Link></h3>
                  <div className="content">
                    <p>Health and care consulting refers to the practice of providing expert
                      advice and guidance.</p>
                    <ul className="tag-list">
                      <li><Link href="/services">Factories</Link></li>
                      <li><Link href="/services">Warehouses</Link></li>
                      <li><Link href="/services">Distribution Centers</Link></li>
                      <li><Link href="/services">Manufacturing Plants</Link></li>
                      <li><Link href="/services">Energy</Link></li>
                      <li><Link href="/services">Utilities</Link></li>
                    </ul>
                  </div>
                  <div className="button-area">
                    <Link href="/services/service-details">
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </li>
                <li className="single-services mb-20 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <h3><Link href="/services/service-details">Design-Build <span>Construction</span></Link></h3>
                  <div className="content">
                    <p>Health and care consulting refers to the practice of providing expert
                      advice and guidance.</p>
                    <ul className="tag-list">
                      <li><Link href="/services">Factories</Link></li>
                      <li><Link href="/services">Warehouses</Link></li>
                      <li><Link href="/services">Distribution Centers</Link></li>
                      <li><Link href="/services">Manufacturing Plants</Link></li>
                      <li><Link href="/services">Energy</Link></li>
                      <li><Link href="/services">Utilities</Link></li>
                    </ul>
                  </div>
                  <div className="button-area">
                    <Link href="/services/service-details">
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </li>
                <li className="single-services wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                  <h3><Link href="/services/service-details">Steel Structure <span>Construction</span></Link></h3>
                  <div className="content">
                    <p>Health and care consulting refers to the practice of providing expert
                      advice and guidance.</p>
                    <ul className="tag-list">
                      <li><Link href="/services">Factories</Link></li>
                      <li><Link href="/services">Warehouses</Link></li>
                      <li><Link href="/services">Distribution Centers</Link></li>
                      <li><Link href="/services">Manufacturing Plants</Link></li>
                      <li><Link href="/services">Energy</Link></li>
                      <li><Link href="/services">Utilities</Link></li>
                    </ul>
                  </div>
                  <div className="button-area">
                    <Link href="/services/service-details">
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <a href="#" className="primary-btn2 bounce_up">
                <span>
                  Load More
                  <svg viewBox="0 0 13 20">
                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
    </>
  )
}

export default ServicePage