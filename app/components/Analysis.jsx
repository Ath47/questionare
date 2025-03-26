import React from "react";
import ProgressBar from "./ProgressBar";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Analysis({ correctQuestions = 12 }) {
  const percentage = (correctQuestions / 15) * 100;

  return (
    <div className="w-full">
      <div className="container1">
        <h3 className="font-bold mb-4">Syllabus Wise Analysis</h3>
        <div className="space-y-4">
          {[
            { topic: "HTML Tools, Forms, History", score: 80, color: "blue" },
            { topic: "Tags & References in HTML", score: 60, color: "orange" },
            { topic: "Tables & References in HTML", score: 24, color: "red" },
            { topic: "Tables & CSS Basics", score: 96, color: "green" }
          ].map((item) => (
            <div key={item.topic}>
              <h4 className="mb-2">{item.topic}</h4>
              <div className="flex items-center">
                <div className="flex-grow mr-2">
                  <ProgressBar
                    widthAmount={item.score}
                    bgColor={item.color}
                    emptyColor={`#${item.color.toUpperCase()}EASE`}
                  />
                </div>
                <p className={`text-${item.color}-800 w-12 text-right`}>{item.score}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container1">
        <div className="flex justify-between mb-4">
          <h3 className="font-bold">Questions Analysis</h3>
          <p className="text-blue-600">{correctQuestions} / 15</p>
        </div>
        <p className="mb-4">
          <strong className="text-gray-700">
            You scored {correctQuestions} questions correct out of 15.
          </strong>
          <br />
          {correctQuestions > 12 ? (
            <span className="text-green-600">You scored good marks</span>
          ) : (
            <span className="text-red-600">However, it still needs some improvements.</span>
          )}
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-[200px]">
            <CircularProgressbarWithChildren
              value={percentage}
              styles={buildStyles({
                textColor: "#000",
                pathColor: "#3e98c7",
                trailColor: "#d6d6d6",
              })}
            >
              <img
                src="/goal.png"
                alt="Clipboard Icon"
                className="w-10 h-10 mb-[-10px]"
              />
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;