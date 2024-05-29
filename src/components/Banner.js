import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from "../img/profile.png";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "IT STUDENT" ];
  const period = 2000;

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="relative flex flex-col md:flex-row gap-4 overflow-hidden mx-10">
        <div className="w-[100%] relative text-center md:text-start font-mono">
            <h1 data-aos="fade-right" data-aos-duration="3000" className="text-[#D5D5D5] text-3xl">Hello, It's me</h1>
            <h1 data-aos="fade-left" data-aos-duration="3000" className="text-[#C05A5A] text-4xl">Mr.Pongs</h1>
            <h1 data-aos="fade-right" data-aos-duration="3000" className="text-[#D5D5D5] text-3xl">{'I am an '}<span className="text-[#1CA4C2]">{text}</span></h1>
            <p data-aos="fade-left" data-aos-duration="3000">Welcome to my portfolio! I am passionate for web development. Here, you can explore the projects I've worked on and the skills I've honed. Feel free to look around and get in touch if you'd like to collaborate or learn more about my work.</p>
            <div data-aos="fade-right" data-aos-duration="3000">
              <div className="social-icon">
                <a href="#"><img alt="" src="https://img.icons8.com/?size=100&id=UBFfDLfUxFBG&format=png&color=000000"/></a>
                <a href="#"><img alt="" src="https://img.icons8.com/?size=100&id=114954&format=png&color=000000"/></a>
                <a href="#"><img alt="" src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"/></a>
                <a href="#"><img alt="" src="https://img.icons8.com/?size=100&id=118501&format=png&color=000000"/></a>
              </div>
              <div className="resume">
                <a href="#"><button><span>Resume</span></button></a>
              </div>
            </div>
        </div>
        <div className="w-[100%] h-[100%] relative grid place-items-center top-1">
            <img alt="" data-aos="zoom-in" data-aos-duration="3000" data-aos-once="true" src={profile} className="" />
            <div className="relative flex items-center justify-center h-[80px]">
              <div data-aos="fade-up-left" data-aos-duration="3000" data-aos-once="true" className="relative flex top-[-4px] left-8 items-center connect">
                <a href="#contact" className="relative right-2 text-white bg-slate-950 rounded-md p-[10px]"><button><span>Let's connect</span></button></a>
                <a href="#contact"><img alt="" src="https://img.icons8.com/?size=100&id=39814&format=png&color=000000"/></a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Banner;