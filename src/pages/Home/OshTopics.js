import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import AreaTitle from "../../components/AreaTitle";
import OshTopicCard from "../../components/OshTopicCard";

function OshTopics() {
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  const fetchTopics = async () => {
    setLoading(true);
    try {
      const response = await fetch("oshTopicData.json");
      const topics = await response.json();
      setLoading(false);
      setTopics(topics);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  console.log(topics);

  if (loading) {
    return (
      <div>
        <h4>Loading....</h4>
      </div>
    );
  }
  return (
    <div>
      <AreaTitle title={"OSH-RTT Topics"} />

      <div className=" container md:mx-auto md:px-20">
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            667: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className=""
        >
          {topics.map((topic, index) => (
            <SwiperSlide className="">
              <OshTopicCard key={index} topic={topic} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OshTopics;
