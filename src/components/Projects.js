import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import img1 from "../img/project1.jpg";
import img2 from "../img/project2.jpg";
import img3 from "../img/project3.jpg";

function Skills() {
  const skillsData = [
    {
      title: "Front-End",
      imgSrc: img1,
    },
    {
      title: "Back-End",
      imgSrc: img2,
    },
    {
      title: "UI/UX",
      imgSrc: img3,
    },
    {
      title: "Front-End",
      imgSrc: img1,
    },
    {
      title: "Back-End",
      imgSrc: img2,
    },
    {
      title: "UI/UX",
      imgSrc: img3,
    }
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="3000" data-aos-once="true" className="relative bg-[#2D2E2F] h-auto m-[10px] rounded-[30px] border-4 border-[#09246A] font-mono skill">
      <h1 className="text-3xl p-[10px] text-center">My Projects</h1>
      <div className="hidden lg:grid grid-cols-3 gap-10 p-[10px] pb-[30px] items-center justify-center h-auto text-2xl">
        {skillsData.map((skill, index) => (
          <div key={index} className="relative rounded-[20px] bg-[#6D7175] items-center justify-center">
              <div className="relative flex w-full rounded-[20px] bg-[#6D7175] items-center justify-center text-2xl">
                  <img className="w-full rounded-[20px]" src={skill.imgSrc} alt={`${skill.title} icon`} />
              </div>
          </div>
        ))}
      </div>
      <div className="block lg:hidden">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="relative p-[10px] pb-[30px] h-auto mb-4"
        >
          {skillsData.map((skill, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="relative flex w-full rounded-[20px] bg-[#6D7175] items-center justify-center text-2xl">
                  <img className="w-full rounded-[20px]" src={skill.imgSrc} alt={`${skill.title} icon`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;