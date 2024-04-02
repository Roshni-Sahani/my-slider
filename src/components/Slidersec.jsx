import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const Slidersec = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center  overflow-hidden">
      <div className="px-3 mx-auto">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={false}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper max-w-400"
        >
          <SwiperSlide className="text-center ">
            <img
              className="w-full"
              src="https://i.ibb.co/Ch9rZCp/img3.jpg"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              className="w-full"
              src=" https://i.ibb.co/1TqFxyW/img1.jpg"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              className="w-full"
              src="https://i.ibb.co/9hrRP0C/img2.jpg"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              className="w-full"
              src="https://i.ibb.co/Ch9rZCp/img3.jpg"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img
              className="w-full"
              src="https://i.ibb.co/tJJt3mT/img4.jpg"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide className="text-center">
            <img className="w-full" src="https://i.ibb.co/tJJt3mT/img4.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slidersec;
