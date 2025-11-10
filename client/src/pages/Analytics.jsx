import React, { useState, useEffect } from "react";
import AppFramedContent from "../components/AppFramedContent";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaStar,
  FaCodeBranch,
  FaBook,
  FaCalendarCheck,
} from "react-icons/fa";

const Analytics = () => {
  const navigate = useNavigate();
  const githubUsername = "namanjain2906";
  const leetcodeUsername = "namanjain296";

  return (
    <div className="min-h-dvh w-full flex items-center justify-center">
      <AppFramedContent
        safeArea={{ top: 8, right: 6, bottom: 8, left: 6 }}
        heightClass="h-[95dvh] max-h-[900px]"
        className="max-w-[430px]"
      >
        <div className="absolute inset-0 px-3 p-2 overflow-y-auto scrollbar-hide ">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 pt-1 pb-3   ">
            <button
              aria-label="Go Back"
              onClick={() => navigate(-1)}
              className="text-white text-xl hover:text-gray-300 transition-colors"
            >
              <FaArrowLeft />
            </button>
            <h1 className="text-white text-lg font-semibold">Analytics</h1>
          </div>

          <div className="flex-1 w-full overflow-y-scroll scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-2 pb-6">
            <div className="flex flex-col gap-4 mt-4">
              {/* GitHub Stats */}
              <h2 className="text-white font-bold text-base px-2">
                GitHub Statistics
              </h2>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1a1b27&title_color=70a5fd&icon_color=bf91f3&text_color=38bdae`}
                alt="GitHub Stats"
                className="w-full h-auto rounded-lg"
              />
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=tokyonight&hide_border=true&background=1a1b27&stroke=70a5fd&ring=bf91f3&fire=bf91f3&currStreakLabel=70a5fd`}
                alt="GitHub Streak"
                className="w-full h-auto rounded-lg"
              />
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=tokyonight&hide_border=true&bg_color=1a1b27&title_color=70a5fd&text_color=38bdae`}
                alt="Top Languages"
                className="w-full h-auto rounded-lg"
              />

              {/* LeetCode Stats */}
              <h2 className="text-white font-bold text-base px-2 mt-2">
                LeetCode Statistics
              </h2>
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=nord&font=Be%20Vietnam%20Pro&ext=heatmap`}
                alt="LeetCode Stats"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </AppFramedContent>
    </div>
  );
};

// Helper component for stat rows
const StatRow = ({ icon, label, value }) => (
  <div className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-gray-300">{label}</span>
    </div>
    <span className="text-cyan-400 font-semibold">{value}</span>
  </div>
);

export default Analytics;
