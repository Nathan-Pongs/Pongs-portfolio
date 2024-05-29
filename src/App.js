import React from 'react';
import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import GridBackground from './components/GridBackground';
import Skills from './components/Skills';
import Banner from './components/Banner';
import Maquee from './components/Maquee';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  return (
      <div className="App overflow-hidden" >
        <section id='home' className='grid gap-8 md:grid-rows-[5rem_1fr_auto] justify-center h-auto overflow-hidden'>
          <GridBackground />
          <Header/>
        </section>
        <section id='home' className='grid'>
          <Banner />
        </section> 
        <section id='skills' className='bg-[#071949] overflow-hidden'>
            <Skills />
            <Maquee />
        </section>
        <section id='projects' className='bg-[#071949] overflow-hidden'>
            <Projects />
        </section>
        <section id='contact' className="min-h-screen flex items-center justify-center bg-[#071949]">
            <Footer />
        </section>
        <div className='w-full bg-black h-auto pt-[30px]'>
          <div data-aos="fade-right" data-aos-duration="3000" data-aos-once="true">
                <h1 className='text-2xl font-mono'>Social media</h1>
                <div className="social-icon">
                  <a><img src="https://img.icons8.com/?size=100&id=UBFfDLfUxFBG&format=png&color=000000"/></a>
                  <a><img src="https://img.icons8.com/?size=100&id=114954&format=png&color=000000"/></a>
                  <a><img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"/></a>
                  <a><img src="https://img.icons8.com/?size=100&id=118501&format=png&color=000000"/></a>
                </div>         
          </div>
        </div>
      </div>
  );
}

export default App;
