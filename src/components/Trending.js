import React from 'react'
import Slider from "react-slick"
import './trending.css'

const Trending = () => {
    const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        speed: 500,
        autoPlaySpeed:5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    return (
        <>
          <div className="container-fluid shadow-lg mt-4 mb-3 py-5">
          <Slider {...settings}>
          <div>
           <img src="/img/s5.jpg" className="img-fluid custon-slide"/>
          </div>
          <div>
          <img src="/img/s6.jpg" className="img-fluid custon-slide"/>
          </div>
          <div>
          <img src="/img/s7.jpg" className="img-fluid custon-slide"/>
          </div>
          <div>
          <img src="/img/s8.jpg" className="img-fluid custon-slide"/>
          </div>
          <div>
          <img src="/img/s9.jpg" className="img-fluid custon-slide"/>
          </div>
          <div>
          <img src="/img/s10.jpg" className="img-fluid custon-slide"/>
          </div>
          <div>
          <img src="/img/s11.jpg" className="img-fluid custon-slide"/>
          </div>
          <div>
          <img src="/img/s12.jpg" className="img-fluid custon-slide"/>
          </div>
        </Slider>
              </div>  
        </>
    )
}

export default Trending
