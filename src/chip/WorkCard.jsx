import React from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink, RxPerson } from "react-icons/rx";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      
      <div data-aos="zoom-in" className="flex flex-col justify-center items-center gap-4">
        <POPUP className="img-content relative">
          <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto">
            <img
              src="https://i.postimg.cc/Fs85pfDX/Screenshot-2025-02-20-175954.png"
              alt="Aju Kinz Foods"
              className="object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
            />
          </div>

          <div className="popup w-full h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4">
            <p className="text-gray-900 text-base leading-[1.4] text-justify w-[90%] hidden">
            Aju Kinz is a modern and user-friendly food ecommerce web application designed to simplify the online food ordering and management process. It offers separate interfaces for users and administrators to ensure a smooth experience across the platform.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                to="https://aju-kinz.vercel.app/"
                target="_blank"
                className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
              >
                <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                <p className="text-black">User</p>
              </Link>
              <Link
                to="https://admin-ajukinz.vercel.app"
                target="_blank"
                className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
              >
                <RxPerson className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                <p className="text-black">Admin</p>
              </Link>
              <Link
                to="https://github.com/Ajith-TheDeveloper/Aju-Kinz"
                target="_blank"
                className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
              >
                <AiFillGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                <p className="text-black">GitHub</p>
              </Link>
            </div>
          </div>
        </POPUP>
        <p className="text-gray-800 text-xl font-medium sm:text-lg">Aju Kinz Foods</p>
      </div>

{/* Fetching data Using Map */}
     
      {reversedData.map((item) => (
        <div data-aos="zoom-in" key={item.id} className="flex flex-col justify-center items-center gap-4">
          <POPUP className="img-content relative">
            <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto">
              <img
                src={item.img}
                alt={item.title}
                className="object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
              />
            </div>

            <div className="popup w-full h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4">
              <p className="text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                {item.desc}
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  to={item.link}
                  target="_blank"
                  className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  <p className="text-black">Demo</p>
                </Link>
                <Link
                  to={item.git}
                  target="_blank"
                  className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <AiOutlineGithub className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  <p className="text-black">Code</p>
                </Link>
              </div>
            </div>
          </POPUP>
          <p className="text-gray-800 text-xl font-medium sm:text-lg">{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
