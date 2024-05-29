import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import img1 from "../img/87.5o.svg";
import img2 from "../img/78.75p.svg";
import img3 from "../img/84.5p.svg";

function Skills() {
  const skillsData = [
    {
      title: "Front-End",
      imgSrc: img1,
      tools: [
        "https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000"
      ]
    },
    {
      title: "Back-End",
      imgSrc: img2,
      tools: [
        "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=f0R4xVI4Sc8O&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
      ]
    },
    {
      title: "UI/UX",
      imgSrc: img3,
      tools: [
        "https://img.icons8.com/?size=100&id=W0YEwBDDfTeu&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=lAWjO4LexGga&format=png&color=000000",
        "https://img.icons8.com/?size=100&id=21075&format=png&color=000000"
      ]
    }
  ];

  return (
    <div data-aos="fade-up" data-aos-duration="3000" data-aos-once="true" className="relative bg-[#2D2E2F] h-auto m-[10px] rounded-[30px] border-4 border-[#09246A] font-mono skill">
      <h1 className="text-3xl p-[10px] text-center">My Skills</h1>
      <div className="hidden lg:grid grid-cols-3 gap-10 p-[10px] pb-[30px] items-center justify-center h-auto text-2xl">
        {skillsData.map((skill, index) => (
          <div key={index} className="relative h-[80vh] px-[50px] rounded-[20px] bg-[#6D7175] items-center justify-center">
            <div className="relative flex items-center justify-center">
              <h1 className="py-[20px]">{skill.title}</h1>
              <img className="w-[70px]" src={skill.imgSrc} alt={`${skill.title} icon`} />
            </div>
            <div className="relative grid grid-cols-3 gap-4 place-items-center w-full py-[20px]">
              {skill.tools.map((tool, toolIndex) => (
                <img key={toolIndex} src={tool} className="w-[70px] mx-[10px]" alt={`tool ${toolIndex + 1}`} />
              ))}
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
          className="relative p-[10px] pb-[30px] h-auto"
        >
          {skillsData.map((skill, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="relative h-[60vh] w-full rounded-[20px] bg-[#6D7175] items-center justify-center text-2xl">
                <div className="relative flex items-center justify-center">
                  <h1 className="py-[20px]">{skill.title}</h1>
                  <img className="w-[70px]" src={skill.imgSrc} alt={`${skill.title} icon`} />
                </div>
                <div className="relative grid grid-cols-3 gap-4 place-items-center w-full py-[20px]">
                  {skill.tools.map((tool, toolIndex) => (
                    <img key={toolIndex} src={tool} className="w-[70px] mx-[10px]" alt={`tool ${toolIndex + 1}`} />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Skills;
