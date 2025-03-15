import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import Home1FooterTop from '@/components/Footer/Home1FooterTop'
import Header1 from '@/components/header/Header1'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>
            <Header1  fluid={"container-fluid"}/>
            <Breadcrum content='Our Latest Work' pageTitle={'Project'} pagename={'Project'} />
            <div className="project-grid-page pt-120 mb-120">
                <div className="container">
                    <div className="row gy-5 mb-70">
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="project-card two magnetic-item">
                                <div className="project-img-wrap">
                                    <div href="/project/project-details" className="project-img">
                                        <img src="/assets/img/home1/project-img1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span>Client: Egenslab</span>
                                    <h4><div href="/project/project-details">Leading The Way In Innovation</div></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="project-card two magnetic-item">
                                <div className="project-img-wrap">
                                    <div href="/project/project-details" className="project-img">
                                        <img src="/assets/img/home1/project-img2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span>Client: Brodie</span>
                                    <h4><div href="/project/project-details">Constructing With Precision</div></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="project-card two magnetic-item">
                                <div className="project-img-wrap">
                                    <div href="/project/project-details" className="project-img">
                                        <img src="/assets/img/home1/project-img3.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span>Client: Nexaq</span>
                                    <h4><div href="/project/project-details">Crafting The Framework</div></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="project-card two magnetic-item">
                                <div className="project-img-wrap">
                                    <div href="/project/project-details" className="project-img">
                                        <img src="/assets/img/home1/project-img4.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span>Client: Zenfy</span>
                                    <h4><div href="/project/project-details">Construction Master Plan</div></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="project-card two magnetic-item">
                                <div className="project-img-wrap">
                                    <div href="/project/project-details" className="project-img">
                                        <img src="/assets/img/home1/project-img5.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span>Client: Triprex</span>
                                    <h4><div href="/project/project-details">Project Build Vision</div></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="project-card two magnetic-item">
                                <div className="project-img-wrap">
                                    <div href="/project/project-details" className="project-img">
                                        <img src="/assets/img/home1/project-img6.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span>Client: Softconic</span>
                                    <h4><div href="/project/project-details">Project Construction Phases</div></h4>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    {/*<div className="row">
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
                    </div>*/}
                </div>
            </div>

            <Home1FooterTop />
            <Footer1 />
        </>
    )
}

export default page