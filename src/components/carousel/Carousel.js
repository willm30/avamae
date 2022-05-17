import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";
import Slide from "./Slide";

export default function Carousel({ imgs }) {
  const [navigation, setNavigation] = useState(false);

  useEffect(() => {
    // Activate navigation arrows on desktop
    if (window.innerWidth > 390) setNavigation(true);
  }, []);

  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{
        dynamicBullets: true,
      }}
      navigation={navigation}
      slidesPerView={1}
    >
      {imgs &&
        imgs.data.Details.map((d) => {
          return (
            <SwiperSlide key={d.Title}>
              <Slide {...{ d }} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
