import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServiceCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', 
        background: isHover?'white':"#eae3e3a3",
        clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)'
        ,border: isHover?"1px solid black":"",
        padding: '3px' }}
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="10 16 17 10 10 6"></polyline>
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    const [isHover, setIsHover] = useState(false);

    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: isHover?'white':"#eae3e3a3",
        border: isHover?"1px solid black":"",
        clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)'
        , padding: '3px' }}
        onClick={onClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
        viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" 
        strokeLinecap="round" strokeLinejoin="round">
          <polyline points="14 16 7 10 14 6"></polyline>
        </svg>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const cards = [
    { id: "01", title: "CARROSSERIE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "02", title: "PEINTURE AUTO", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "03", title: "ÉLECTRICITÉ ", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "04", title: "DIAGNOSTICS", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "05", title: "MÉCANIQUE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "06", title: "VIDANGE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "07", title: "CLIMATISATION", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "08", title: "FREINAGE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { id: "09", title: "TÔLERIE", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
  ];
  

  return (
    <div>
      <div className="lg:w-[85%] xl:w-[90%] md:w-[50%] w-[70%] m-auto font-turret h-[150px]">
        <div className="h-[150px]">
          <style jsx>{`
            .slick-prev:before, .slick-next:before {
              display: none;

            }
            
            .gradient-bg {
              background: linear-gradient(45deg, #782121 , #c01f1f, #782121 );
            }
          `}</style>
          
          <Slider {...settings}>
            {cards.map((d, index) => (
              <div key={d.id} 
              className="px-2  ">
                <div  
                style={{
                  clipPath: "polygon(100% 0%, 100% 60%, 75% 100%, 0 100%, 0 50%, 25% 0%)",
                  boxShadow: index === activeSlide
                ? '0 10px 30px rgba(0, 0, 0, 0.4)'  
                : '0 4px 15px rgba(0, 0, 0, 0.2)'  ,
                border: index === activeSlide 
                ? '1px solid white' 
                : '1px solid black',       }}
                  className={`
                     transition-all duration-300 transform overflow-hidden
                    ${index === activeSlide 
                      ? "gradient-bg scale-110 z-10 " 
                      : "bg-white scale-90 z-0"}
                  `}
                >
                  <div 
                    className={`
                      h-35 flex justify-center items-center relative
                      ${index === activeSlide ? "" : "bg-white"}
                    `}
                  >
                    <img src="/pics/number-card.png" className="absolute right-[10px] top-4 w-8 h-8" alt=""/>
                    <div className='text-white absolute right-[18px] top-4'>{d.id}</div>
                    
                  </div>
                  <div className=" justify-end px-4 pb-4 pt-14 h-[150px] text-left mt-4 mb-3">
  <p className={`text-[17px] font-bold  ${index === activeSlide ? "text-white" : "text-red-700"}`}>
    {d.title}
  </p>
  <div style={{ width: '200px', margin: ' 7px 0' }}>
  <div
    style={{
      borderTop: "1px solid transparent",
      borderImage: "linear-gradient(to right, red,red, white , transparent) 1",
      borderImageSlice: 1
    }}
  />
</div>

  <p className={`text-[13px] w-[210px] ${index === activeSlide ? "text-white" : "text-black"}`}>
    {d.content}
  </p>
</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
