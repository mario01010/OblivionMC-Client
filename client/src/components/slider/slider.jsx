import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css'

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay = {{delay: 5000, disableOnInteraction: false}}
      loop= {true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='slider'
    >
      <SwiperSlide className='slide'>Slide 1</SwiperSlide>
      <SwiperSlide className='slide'>Slide 2</SwiperSlide>
    </Swiper>
  );
}

export default Slider;
