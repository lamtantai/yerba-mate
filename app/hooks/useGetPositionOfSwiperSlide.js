import { useState } from "react";

export default function useGetPositionOfSwiperSlide() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return { isBeginning, isEnd, handleSlideChange };
}
