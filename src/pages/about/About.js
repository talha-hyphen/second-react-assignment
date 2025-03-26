import React from 'react'
import '../../App.css'
import Navbar from '../../component/navbar/Navbar'
import Servicecard from '../../component/card/Servicecard'
import WebDsign from '../../assets/images/icon-design.svg'
import Webdevelopment from '../../assets/images/icon-dev.svg'
import Mobileapps from '../../assets/images/icon-app.svg'
import Photography from '../../assets/images/icon-photo.svg'
import Testimonialcard from '../../component/card/Testimonialcard'
import Daniellewis from '../../assets/images/avatar-1.png'
import Jessicamiller from '../../assets/images/avatar-2.png'
import Emilyevans from '../../assets/images/avatar-3.png'
import Henrywilliam from '../../assets/images/avatar-4.png'
import testimonialsmodal from '../../assets/images/icon-quote.svg'
import ClientCard from '../../component/card/ClientCard'
import ClientA from '../../assets/images/logo-1-color.png'
import ClientB from '../../assets/images/logo-2-color.png'
import ClientC from '../../assets/images/logo-3-color.png'
import ClientD from '../../assets/images/logo-4-color.png'
import ClientE from '../../assets/images/logo-5-color.png'
import ClientF from '../../assets/images/logo-6-color.png'
export default function About() {

const ClientcardItems = [{
    image: ClientA},{
    image: ClientB},{image: ClientC},{image: ClientD},{image: ClientE},{image: ClientF}]

 const TestimonialcardItems = [{
        name:"Daniel lewis",
        review:"Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
        image: Daniellewis},{
            name:"Jessica miller",
     review:"Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
     image:Jessicamiller},{
        name:"Emily evans",
        review:"Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
        image:Emilyevans
     },{
        name:"Henry william",
        review:"Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
        image:Henrywilliam
     }]  

const ServicecardItems = [{
    title: "Web design",
    text: "  The most modern and high-quality design made at a professional level.",
    image: WebDsign},{
    title: "Web development",
    text:"High-quality development of sites at the professional level.",
    image: Webdevelopment},{
    title: "Mobile apps",
    text:"Professional development of applications for iOS and Android.",
    image: Mobileapps},{
    title: "Photography",
    text:"I make high-quality photos of any category at a professional level.",
    image: Photography}]

const NavbarItems = [{
    navlink: "About"
},{
    navlink: "Blog"
},{
    navlink: "Contact"
},{
    navlink: "Portfolio"
},{
    navlink: "Resume"}]

  return (
    <div>

<div className="main-content">


    
<nav className="navbar">

<ul className="navbar-list">

{
    NavbarItems.map((item, index) => {
        return <Navbar key={index} navlink={item.navlink} />
}
)}
  

 
</ul>

</nav>

<article className="about  active" data-page="about">

<header>
          <h2 classNameName="h2 article-title">About me</h2>
        </header>

<section classNameName="about-text">
          <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
            I enjoy
            turning complex problems into simple, beautiful and intuitive designs.
          </p>

          <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive.
            Moreover, I
            add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
            across your
            message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </section>


        <section className="service">

<h3 className="h3 service-title">What i'm doing</h3>

<ul className="service-list">

{
    ServicecardItems.map((item, index) => {
        return <Servicecard key={index} title={item.title} text={item.text} image={item.image} />
}
)
}
 

 

</ul>

</section>


<section className="testimonials">

          <h3 className="h3 testimonials-title">Testimonials</h3>

 
         <ul className="testimonials-list has-scrollbar">

{TestimonialcardItems.map((item, index) => {
    return <Testimonialcard key={index} name={item.name} review={item.review} image={item.image} />
}
)}

           

          </ul>

        </section>

{/* testimonials-modal */}

 



{/* Client */}









</article>
</div>
    </div>
  )
}
