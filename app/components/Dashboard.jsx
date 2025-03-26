"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomLineChart from "./LineChart";
import Modal from "./Modal";

function Dashboard({ setCorrectQuestions }) {
  const [rank, setRank] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [correctQuestions, setCorrectQuestionsLocal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdate = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleUpdateItems = () => {
    setCorrectQuestions(correctQuestions);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full">
      <div className="container1 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="ml-auto">
            <Image
              src="/html-icon.svg"
              alt="HTML Icon"
              width={50}
              height={50}
            />
          </div>
          <div className="text-left w-full">
            <h3 className="font-bold">Hyper Text Markup Language</h3>
            <p className="text-sm">
              Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
            </p>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center mt-2 md:mt-0">
          <button className="button-update" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>

      <div className="container1">
        <div className="font-bold mb-4">Quick Statistics</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: "/trophy.svg",
              value: rank,
              label: "Your Rank",
              alt: "Trophy Icon",
            },
            {
              icon: "/clipboard.png",
              value: `${percentile}%`,
              label: "Percentile",
              alt: "Clipboard Icon",
            },
            {
              icon: "/tick.svg",
              value: `${correctQuestions} / 15`,
              label: "Correct Answers",
              alt: "Tick Icon",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={50}
                height={50}
                className="mb-2"
              />
              <h2>{item.value}</h2>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container1">
        <h4 className="font-bold mb-2">Comparison Graph</h4>
        <p className="mb-4 text-center md:text-left">
          <strong className="text-gray-700">
            You scored {percentile}% percentile
          </strong>{" "}
          which is lower than the average percentile 72% of all engineers who
          took this assignment.
        </p>
        <div className="w-full">
          <CustomLineChart myPercentile={percentile} />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        rank={rank}
        setRank={setRank}
        percentile={percentile}
        setPercentile={setPercentile}
        correctQuestions={correctQuestions}
        setCorrectQuestionsLocal={setCorrectQuestionsLocal}
        handleUpdateItems={handleUpdateItems}
      />
    </div>
  );
}

export default Dashboard;
