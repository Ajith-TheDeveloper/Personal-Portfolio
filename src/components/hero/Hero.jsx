import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Ajith_Resume.pdf";


const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#006d77] via-[#83c5be] to-[#edf6f9] pb-4">
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Ajith
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Web Developer",
                2000,
                "Fresher",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-white text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-black sm:text-[.95rem]"
            >
              {/* I originally build dynamic, efficient and scalable web applications as a MERN Full-Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js. */}
               I present my skills in frontend and backend development, and I reflect my dedication to growth and innovation. Tackling challenges energizes me and I enjoy learning new technologies while I collaborate on projects that make a difference. Let’s build something amazing. Connect with me.
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
          <a
  href="mailto:ajithaji1902@gmail.com?subject=Hello%20Ajith&body=Hi%20Ajith,%20I%20came%20across%20your%20profile%20and%20wanted%20to%20connect."
  className="bg-black text-white text-base px-10 py-2 sm:px-8 rounded-lg font-bold hover:text-teal-500 transition duration-300"
>
  <span>Hire Me</span>
</a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-teal-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/Ajith-TheDeveloper">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="http://www.linkedin.com/in/ajith-thedeveloper">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ajux_02?igsh=YzljYTk1ODg3Zg==">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@AjuByte">
                  {" "}
                  <FaYoutube className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  "  />{" "}
                </a>
              </li>
              <li>
                <a href="https://x.com/Ajuz_06">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>


        
        <div className="right top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
  <div className="relative h-[88%] w-fit flex items-center sm:items-end">
    {/* Circle Shaped Image */}
    <img
      data-aos="fade-up"
      className="h-[90%] w-full object-cover md:h-[95%] md:m-auto sm:m-0 rounded-full"
      src="https://i.postimg.cc/rmHs9VHn/Whats-App-Image-2025-02-20-at-19-11-01-bf261252-removebg-preview.png"
      alt="mine"
    />

    {/* Balls/Circles */}
    <div
      className="absolute w-8 h-8 bg-yellow-400 rounded-full animate-bounce"
      style={{ top: "10%", left: "10%" }}
    ></div>
    <div
      className="absolute w-6 h-6 bg-blue-400 rounded-full animate-spin"
      style={{ top: "20%", right: "10%" }}
    ></div>
    <div
      className="absolute w-10 h-10 bg-red-400 rounded-full animate-pulse"
      style={{ bottom: "15%", left: "20%" }}
    ></div>
    <div
      className="absolute w-12 h-12 bg-green-400 rounded-full animate-bounce"
      style={{ bottom: "10%", right: "15%" }}
    ></div>

    {/* New Circle */}
    <div
      className="absolute w-8 h-8 bg-purple-500 rounded-full animate-bounce"
      style={{ top: "5%", right: "5%" }}
    ></div>

    {/* Animated Circle */}
    <div className="absolute bottom-10 md:bottom-3 right-8 md:right-2">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="relative cursor-pointer"
      >
        {/* Circle Text */}
        <img
          className="w-[135px] md:w-[90px] rounded-full circle-text"
          src="https://i.postimg.cc/PxmpxhpB/Full-Stack-Developer2.png"
          alt="Fullstack developer"
        />

        {/* Center Play Icon */}
        <FaPlay
          className="text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default Hero;
