import Contact from '@/components/architecture-project-components/Contact'
import Breadcrum from '@/components/common/Breadcrum'
import SelectComponent from '@/components/common/SelectComponent'
import Footer1 from '@/components/Footer/Footer1'
import Home1FooterTop from '@/components/Footer/Home1FooterTop'
import Header1 from '@/components/header/Header1'
import React from 'react'

const page = () => {
    return (
        <>
            <Header1 fluid={"container-fluid"}/>
            <Breadcrum content='Any Question Wit Us' pageTitle={'Contact'} pagename={'Contact'} />
            <Contact/>

            <Home1FooterTop />
            <Footer1 />
        </>
    )
}

export default page