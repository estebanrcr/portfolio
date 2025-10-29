import React from "react";
import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function Services() {
  const images = [
    "/images/Things/all.webp",
    "/images/Things/apollo1.webp",
    "/images/Things/flute.webp",
    "/images/Things/head.webp",
    "/images/Things/macbook.webp",
    "/images/Things/piano.webp",
    "/images/Things/reflection.webp",
    "/images/Things/up.webp",
    "/images/Things/cello.webp",
    "/images/Things/sanpedro.webp",
    "/images/Things/piano2.webp",
  ];



  return (
    
    <section id="services" className="services section">
       {/* 🔹 Carousel Section */}
      <div className="services-carousel">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={4}       // 👈 Show 3 slides at once
          loop={true}
          speed={1200} // transition takes 1.2 seconds
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },     // 1 image on mobile
            768: { slidesPerView: 2 },   // 2 images on tablets
            1024: { slidesPerView: 3 },  // 3 images on desktop
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={process.env.PUBLIC_URL + src}
                alt={`Service ${index + 1}`}
                 loading="lazy"
                />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h2 className="section-title">SERVICES & CLIENTS</h2>

      <div className="services-layout">
        <div className="services-column">
          <h3>SERVICES</h3>
          <ul>
            <li>Sound Design</li>
            <li>Mixing & Mastering</li>
            <li>Music Composition</li>
            <li>Dialogue Editing</li>
            <li>Audio Post-Production</li>
          </ul>
        </div>

        <div className="clients-column">
          <h3>CLIENTS</h3>
          Netflix, Encuentro channel, PakaPaka channel, Talleres, GSMA, Dole, Instant Finance, Malevo Films,Paye Cine, Cordoba Government, DeporTv Channel
          Local Studios, Independent Artists, Hü Productora, Doble Clic, Universidad Blas Pascal, Tronera Producciones, LaMetro. Claro America, San Luis Cine, Canal 10 S.R.T 
        </div>
      </div>

      <hr className="section-separator" />
      

      <div className="collaborators">
        <h3>COLLABORATORS</h3>
        <p>
          I’ve had the pleasure of collaborating with directors, producers, animators,
          and musicians across a wide range of creative projects — always focused on
          delivering powerful and emotionally resonant sound.
        </p>
      </div>
    </section>
  );
}
