import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './About.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.alphacoders.com/840/84063.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PnquAt2YFGSgw1T0_9bAN-GbIdYVuRuDobwzbUD9Jt2XGt5QyH0ttBhCX6V4ENasD_Y&usqp=CAU" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsk9d2RtzUgVq7QyKZHz-5IwbXNQCR18C4VQ&usqp=CAU" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://c4.wallpaperflare.com/wallpaper/447/1008/865/mountain-mountains-snow-night-wallpaper-thumb.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://e1.pxfuel.com/desktop-wallpaper/152/27/desktop-wallpaper-6-mountain-night-sky-above-the-mountains.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://c4.wallpaperflare.com/wallpaper/189/653/201/stars-landscape-mountains-night-wallpaper-preview.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.desktopbackground.org/download/1024x600/2010/12/27/133001_night-hd-wallpaper-beautiful-river-image-widescreen-picture-jpg_1920x1200_h.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://wallup.net/wp-content/uploads/2018/09/30/4625-full-moon-748x468.jpg" alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}