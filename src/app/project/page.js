import Breadcrum from '@/components/common/Breadcrum'
import Footer1 from '@/components/Footer/Footer1'
import Home1FooterTop from '@/components/Footer/Home1FooterTop'
import Header1 from '@/components/header/Header1'
import Link from 'next/link'
import React from 'react'
import projectData from "../../data/project.json"

const page = () => {
    return (
        <>
            <Header1  fluid={"container-fluid"}/>
            <Breadcrum content='Our Latest Work' pageTitle={'Project'} pagename={'Project'} />
            <div className="project-grid-page pt-120 mb-120">
                <div className="container">
                    <div className="row gy-5 mb-70">
                    {
                        projectData.map((data) => {
                            const { id, status, title, img, link } = data;
                            return <div key = {id} className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="project-card two magnetic-item">
                                    <div className="project-img-wrap">
                                        <div href={link} className="project-img">
                                            <img src={img} alt="" />
                                        </div>
                                    </div>
                                    <div className="project-content">
                                        <span>{status}</span>
                                        <h4><div href={link}>{title}</div></h4>
                                    </div>
                                </div>
                            </div>
                        })
                    }   
                
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