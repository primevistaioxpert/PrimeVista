import Link from 'next/link'
import React from 'react'

const Home1Service = () => {
    return (
        <div className="home1-service-section mb-130">
            <div className="container">
                <div className="row justify-content-between align-items-end mb-80 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-4">
                        <div className="section-title">
                            <span>Our Core Services</span>
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
                                <h3><Link href="/">Construction &<span>Development</span> </Link></h3>
                                <div className="content">
                                    <p>From residential to commercial properties, we build with precision, efficiency, and sustainability in mind. Our projects range from custom homes to multi-unit developments, commercial spaces, and mixed-use properties.</p>
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
                                <h3><Link href="/">Real Estate <span>Investment Solutions</span></Link></h3>
                                <div className="content">
                                    <p>We offer exclusive investment opportunities in real estate development, ensuring high returns through strategic planning, market analysis, and risk management.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/">High ROI</Link></li>
                                        <li><Link href="/">Secure Investments</Link></li>
                                        <li><Link href="/">Strategic Planning</Link></li>
                                        <li><Link href="/">Passive Income</Link></li>
                                    </ul>
                                </div>
                                {/*<div className="button-area">
                                    <Link href="/services/service-details">
                                        <i className="bi bi-arrow-right" />
                                    </Link>
                                </div>*/}
                            </li>
                            <li className="single-services wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <h3><Link href="/">Project & <span>Property Management</span></Link></h3>
                                <div className="content">
                                    <p>We provide expert project management services, ensuring that projects are completed on time, within budget, and according to top industry standards. Additionally, our property management services help investors maximize rental income and maintain long-term property value.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/">Rental Optimization</Link></li>
                                        <li><Link href="/">Risk Mitigation</Link></li>
                                        <li><Link href="/">Risk Mitigation</Link></li>
                                        <li><Link href="/">Property Maintenance</Link></li>

                                    </ul>
                                </div>
                            </li>
                            <li className="single-services wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <h3><Link href="/">Affordable Housing <span>Development</span></Link></h3>
                                <div className="content">
                                    <p>We are committed to developing high-quality yet cost-effective housing solutions, helping address the growing demand for affordable homes while maintaining exceptional construction standards.</p>
                                    <ul className="tag-list">
                                        <li><Link href="/">Sustainable Construction</Link></li>
                                        <li><Link href="/">Cost-Effective Solutions</Link></li>
                                        <li><Link href="/">Urban Redevelopment</Link></li>
                                        <li><Link href="/">Energy-Efficient Homes</Link></li>
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