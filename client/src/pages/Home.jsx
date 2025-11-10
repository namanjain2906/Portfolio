import React, { useState } from "react";
import FramedContent from "../components/FramedContent";
import IconTile from "../components/IconTile";
import ImageTile from "../components/ImageTile";

import PageDots from "../components/PageDots";
import {
  FaUser,
  FaTools,
  FaFileAlt,
  FaChartLine,
  FaCog,
  FaGamepad,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Photo2 from "../assets/Photo2.jpg";
import Photo3 from "../assets/Photo3.jpg";
import Photo4 from "../assets/Photo4.jpg";
import Location from "../assets/Location.png";
import SwapRLogo from "../assets/SwapR Logo.png";
import MapPreview from "../assets/Location.png";
import Frame from "../assets/Frame.png";
import MusicPlayer from "../components/MusicPlayer";

const Home = () => {
  const [page, setPage] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [Photo2, Photo3, Photo4];

  const handlePhotoClick = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };
  return (
    <div className="min-h-dvh w-full flex items-center justify-center p-0">
      <FramedContent
        src={Frame}
        safeArea={{ top: 8, right: 6, bottom: 8, left: 6 }}
        heightClass="h-[95dvh] max-h-[900px]"
        maxWidthClass="max-w-none"
        className="max-w-[430px]"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={[
              "absolute inset-0  flex w-[200%] h-full transition-transform duration-300 ease-out",
              page === 0 ? "translate-x-0" : "-translate-x-1/2",
            ].join(" ")}
          >
            <div className="relative px-3 w-1/2 flex gap-3 flex-col justify-evenly h-full ">
              <div className="flex gap-3 justify-center items-center">
                <div className=" md:w-25 max-md:w-40 h-full">
                  <ImageTile photo={photos[currentPhotoIndex]} className="" onClick={handlePhotoClick} />
                </div>
                <div className="flex  flex-col justify-center items-center gap-3">
                  <div className="flex gap-3">
                    <IconTile
                      IconComponent={FaUser}
                      label="About Me"
                      route="/about"
                    />
                    <IconTile
                      IconComponent={FaTools}
                      label="Tech Stack"
                      route="/tech-stack"
                    />
                  </div>
                  <div className="flex gap-3">
                    <IconTile
                      IconComponent={FaFileAlt}
                      label="Resume"
                      route="/resume"
                    />
                    <IconTile
                      IconComponent={FaChartLine}
                      label="Analytics"
                      route="/analytics"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex justify-center items-start gap-3">
                <div className="flex justify-center items-center gap-3">
                  <IconTile
                    IconComponent={FaCog}
                    label="Settings"
                    route="/settings"
                  />
                  <IconTile
                    IconComponent={FaGamepad}
                    label="Game"
                    route="/mini-game"
                  />
                </div>
                <div className=" md:w-25 max-md:w-40 h-full ">
                  <ImageTile photo={Location} className="" />
                </div>
              </div>
              <div>
                <img className="rounded-xl" src="https://leetcard.jacoblin.cool/namanjain296?theme=nord&font=Be%20Vietnam%20Pro&ext=heatmap" alt="" />
              </div>
            </div>

            {/* Page 2 - placeholder grid of apps */}
            <div className="relative p-6 flex flex-col  gap-3 items-center w-1/2 h-full">
              {/* Second page layout with top icon row */}
              <div className=" flex justify-center items-start gap-3">
                <IconTile
                  IconComponent={FaLinkedin}
                  label="LinkedIn"
                  route="https://www.linkedin.com/in/naman-jain-320b79311/"
                />
                <IconTile
                  IconComponent={FaGithub}
                  label="GitHub"
                  route="https://github.com/namanjain2906"
                />
                <IconTile
                  IconComponent={FaEnvelope}
                  label="Mail"
                  route ="mailto:naman296jain@gmail.com"
                />
                <IconTile
                  IconComponent={SiLeetcode}
                  label="Leetcode"
                  route="https://leetcode.com/u/namanjain296/"
                />
              </div>
              {/* Media player widget placeholder */}
              <div>
                <MusicPlayer />
              </div>
              <div className="w-full">
                <IconTile label="SwapR" imageUrl={SwapRLogo} route="https://swapr-six.vercel.app/" />
              </div>
            </div>
          </div>

          {/* Bottom controls: dots + home bar */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[0%] flex flex-col items-center gap-1.5">
            <PageDots total={2} current={page} onChange={setPage} />
            
          </div>
        </div>
      </FramedContent>
    </div>
  );
};

export default Home;
