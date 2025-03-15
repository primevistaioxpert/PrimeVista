import Link from 'next/link'
import React from 'react'

const Home1Service = () => {
    return (
        <div className="home1-service-section mb-130">
            <div className="container">
                <div className="row justify-content-between align-items-end mb-80 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-4">
                        <div className="section-title">
                            <span>Our Construction Services</span>
                            <h2>Services Tailored To You.</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="section-content">
                            <p>we provide customized home-building solutions designed to meet your unique needs. Our expert team ensures quality craftsmanship, affordability, and a seamless rent-to-own experience, helping you move toward homeownership with ease and confidence.</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-70">
                    <div className="col-lg-12">
                        <ul className="sevices-wrap">
                            <li className="single-services mb-20 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <h3><Link href="/services/service-details">Residential <span>Construction</span></Link></h3>
                                <div className="content">
                                    <p>Building quality homes designed for comfort, style, and sustainability. From custom homes to renovations, we create spaces where families can thrive.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/">Family Homes</Link></li>
                                        <li><Link href="/">Single Home</Link></li>
                                        <li><Link href="/">Custom Homes</Link></li>
                                        <li><Link href="/">Home Additions</Link></li>
                                        <li><Link href="/">Renovations</Link></li>
                                        <li><Link href="/">Remodeling</Link></li>
                                    </ul>
                                </div>
                                {/*<div className="button-area">
                                    <Link href="/services/service-details">
                                        <i className="bi bi-arrow-right" />
                                    </Link>
                                </div>*/}
                            </li>
                            <li className="single-services mb-20 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <h3><Link href="/services/service-details">Commercial <span>Construction</span></Link></h3>
                                <div className="content">
                                    <p>Developing modern and functional commercial spaces including offices, retail, and hospitality. Our projects prioritize efficiency, innovation, and long-term value.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/">Office Buildings</Link></li>
                                        <li><Link href="/">Retail Spaces</Link></li>
                                        <li><Link href="/">Restaurants</Link></li>
                                        <li><Link href="/">Hotels</Link></li>
                                        <li><Link href="/">Hospitality</Link></li>
                                        <li><Link href="/">Medical Facilities</Link></li>
                                    </ul>
                                </div>
                                {/*<div className="button-area">
                                    <Link href="/services/service-details">
                                        <i className="bi bi-arrow-right" />
                                    </Link>
                                </div>*/}
                            </li>
                            <li className="single-services wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <h3><Link href="/services/service-details">Industrial <span>Construction</span></Link></h3>
                                <div className="content">
                                    <p>Constructing high-performance industrial facilities such as warehouses, manufacturing plants, and energy utilities to support business growth and operations.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/">Factories</Link></li>
                                        <li><Link href="/">Warehouses</Link></li>
                                        <li><Link href="/">Distribution Centers</Link></li>
                                        <li><Link href="/">Manufacturing Plants</Link></li>
                                        <li><Link href="/">Energy</Link></li>
                                        <li><Link href="/">Utilities</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*<div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link href="/services" className="primary-btn2 bounce_up">
                            <span>
                                View All Services
                                <svg viewBox="0 0 13 20">
                                    <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>*/}
            </div>
        </div>


    )
}

export default Home1Service