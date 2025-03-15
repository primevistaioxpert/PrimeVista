import Link from 'next/link'
import React from 'react'

const Home1Support = () => {
  return (
    <>
     <div className="home1-support-section mb-130">
  <div className="container">
    <div className="row justify-content-lg-end wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
      <div className="col-xl-9 col-lg-10">
        <div className="section-title">
          <span>Join Us in Building the Future</span>
          <h2>Contact us today to explore investment possibilities</h2>
        </div>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="support-content">
          <div className="btn_wrapper">
            <Link href="/contact" className="contact-area">
              <h2>Talk</h2>
              <span></span>
              <p>To Us</p>
            </Link>
          </div>
          <p>At Prime Vista, we are more than just builders—we are visionaries committed to making homeownership accessible through our innovative Rent-to-Own model. If you share our passion for sustainable growth, community impact, and smart investments, we invite you to connect with us. Let’s build opportunities together!</p>
        </div>
      </div>
      <div className="col-lg-6 d-lg-block d-none">
        <div className="support-img magnetic-item">
          <img src="assets/img/home1/home1-support-img.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
   
    </>
  )
}

export default Home1Support