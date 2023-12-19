import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  Title,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

const statements = [
  "I enjoy writing.",
  "I have a good memory for people's names, the names of places, important dates, and facts.",
  "I enjoy reading books.",
  "I usually spell words correctly the first time I write or type them.",
  "I enjoy listening to people speak or read.",
  "I often wonder how things work.",
  "I enjoy math class.",
  "I enjoy playing strategy games like chess or checkers.",
  "I enjoy organizing things into categories.",
  "I usually finish my math work quickly in Math class and help my peers.",
  "I find it easier to read maps, charts, and diagrams than textbooks.",
  "I enjoy art class and art projects.",
  "I enjoy drawing.",
  "I like movies and visual presentations (such as slide shows and PowerPoint presentations).",
  "I enjoy doing puzzles and mazes.",
  "I enjoy playing sports.",
  "I enjoy taking things apart and putting them back together again.",
  "I enjoy dancing.",
  "I enjoy drama and expressing myself.",
  "I often jiggle my leg or tap my fingers when I am at my desk.",
  "I can tell when music is off-key or out of pitch.",
  "I enjoy singing.",
  "I can sense a rhythm and the beat in a song.",
  "I normally tap rhythms with my pencil/pen on my desk.",
  "I often sing or hum while I am doing my chores.",
  "I enjoy hanging out with my peers.",
  "I often lead groups.",
  "I give advice to friends when they have problems.",
  "I have friends who come to me for help when they are upset or sad.",
  "I belong to clubs and organizations.",
  "I am independent and can be stubborn.",
  "I prefer individual assignments instead of group assignments in school.",
  "I am often secretive about my hobbies or interests.",
  "I am as comfortable doing things alone, playing or studying alone.",
  "I know my strengths and weaknesses.",
];

const categories = [
  "Linguistic",
  "Logical-Mathematical",
  "Spatial",
  "Bodily-Kinesthetic",
  "Musical",
  "Interpersonal",
  "Intrapersonal",
];
const categoryColors = [
  "rgba(192, 182, 75, 0.2)",
  "rgba(253, 14, 66, 0.2)",
  "rgba(11, 242, 50, 0.2)",
  "rgba(121, 14, 253, 0.2)",
  "rgba(242, 11, 219, 0.2)",
  // Add colors for the remaining categories as needed
];

Chart.register(
  Title,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const Quiz: React.FC = () => {
  const [currentStatement, setCurrentStatement] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [categoryCounts, setCategoryCounts] = useState<number[]>(
    Array(categories.length).fill(0)
  );

  const handleAnswer = (isTrue: boolean) => {
    setAnswers([...answers, isTrue]);

    // Update category counts based on the current statement number
    const categoryIndex = Math.floor(
      currentStatement / (statements.length / categories.length)
    );
    const updatedCounts = [...categoryCounts];
    updatedCounts[categoryIndex] += isTrue ? 1 : 0;
    setCategoryCounts(updatedCounts);

    setCurrentStatement(currentStatement + 1);
  };

  const calculateDominantType = () => {
    const categorySum = categoryCounts.reduce((acc, count) => acc + count, 0);
    const categoryPercentages = categoryCounts.map(
      (count) => (count / categorySum) * 100
    );

    // Create an array of objects with category names, percentages, and colors
    const categoryData = categories.map((category, index) => ({
      name: category,
      percentage: categoryPercentages[index],
      color: categoryColors[index],
    }));

    // Sort the categories in descending order based on percentages
    const sortedCategories = categoryData.sort(
      (a, b) => b.percentage - a.percentage
    );

    // Extract the dominant type (the first element in the sorted array)
    const dominantType = sortedCategories[0].name;

    return { sortedCategories, dominantType };
  };

  const { sortedCategories, dominantType } = calculateDominantType();

  return (
    <div className="flex items-center flex-col font-font justify-center bg-purple-500">
      <div>
        <h1 className="pb-8 font-medium text-center lg:text-2xl text-[17px] px-5  text-white">
          Read each statement and determine whether it is a true or false
          statement about you.
        </h1>
      </div>
      <div className="">
        <div className="bg-white md:w-[500px] w-[350px]  p-6  rounded shadow-md">
          {currentStatement < statements.length ? (
            <div>
              <p className="text-lg font-semibold text-purple-600">
                Statement {currentStatement + 1}:
              </p>
              <p className="text-gray-800 my-4">
                {statements[currentStatement]}
              </p>
              <div className="flex justify-between">
                <button
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                  onClick={() => handleAnswer(true)}
                >
                  True
                </button>
                <button
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                  onClick={() => handleAnswer(false)}
                >
                  False
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-center font-bold text-2xl">
                Thank you for taking this Test🤩
              </h1>
              <p className="text-center font-bold text-3xl">Your Results</p>
              <p className="text-2xl font-semibold text-center text-purple-600">
                Test completed!
              </p>
              <p className="text-2xl font-semibold pt-3 text-center ">
                Dominance percentage
              </p>

              <ul className=" text-center text-xl list-inside">
                {sortedCategories.map((categoryData, index) => (
                  <li key={index} className="text-gray-800">
                    {categoryData.name}: {categoryData.percentage.toFixed(2)}%
                  </li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-center text-purple-600 mt-4">
                Dominant Type: {dominantType}
              </p>
              <p className="text-2xl font-semibold pt-10 text-center ">
                Dominance Graph📊
              </p>

              <div className="mt-4 pb-10">
                <div className=" w-full">
                  <Bar
                    data={{
                      labels: sortedCategories.map(
                        (categoryData) => categoryData.name
                      ),
                      datasets: [
                        {
                          label: "Percentage",
                          data: sortedCategories.map((categoryData) =>
                            categoryData.percentage.toFixed(2)
                          ),
                          backgroundColor: sortedCategories.map(
                            (categoryData) => categoryData.color
                          ),
                          borderColor: "rgba(75, 192, 192, 1)",
                          borderWidth: 1,
                        },
                      ],
                    }}
                    options={{
                      scales: {
                        y: {
                          beginAtZero: true,
                          max: 100,
                          ticks: {
                            stepSize: 10,
                          },
                        },
                      },
                      plugins: {
                        datalabels: {
                          color: "#000", // Color of the text
                          anchor: "end", // Position of the text relative to the bar
                          align: "top", // Alignment of the text relative to the bar
                          formatter: (value) => `${value}`, // Format the label as a percentage
                          // Auto mode hides labels when they overlap
                          font: {
                            size: 12, // Adjust the font size as needed
                          },
                        },
                      },
                      maintainAspectRatio: false, // Allow the chart to adjust its size
                      responsive: true,
                    }}
                    width={400}
                    height={200}
                  />
                </div>
              </div>
              <p className="text-2xl font-bold text-center text-purple-600 mt-4">
                Dominant Type: {dominantType}
              </p>
              <div className="mt-5">
                <h1 className="text-2xl font-bold text-center">
                  Read the information below about each type of intelligence.
                </h1>
                <p className="mt-5">
                  <span className="font-semibold text-xl">Linguistic: </span>
                  People with strength in this type of intelligence love writing
                  and speaking. They will easily complete writing assignments
                  and enjoy keeping journals and diaries, as well as
                  participating in debates.
                </p>
                <br />
                <p>
                  <span className="font-semibold text-xl">
                    Logical-Mathematical:{" "}
                  </span>{" "}
                  People with strength in this type of intelligence enjoy
                  reasoning. They love to work with manipulatives and would
                  enjoy a trip to a science planetarium.
                </p>
                <br />
                <p>
                  <span className="font-semibold text-xl">Spatial: </span>{" "}
                  People with strength in this type of intelligence enjoy
                  pictures and organizing things within a space. They enjoy
                  trips to museums and moving objects around within a specific
                  area.
                </p>
                <br />
                <p>
                  <span className="font-semibold text-xl">
                    Bodily-Kinesthetic:{" "}
                  </span>{" "}
                  People with strength in this type of intelligence enjoy
                  movement. They love to dance, classroom activities that
                  require movement, and Physical Education classes.
                </p>
                <br />
                <p>
                  <span className="font-semibold text-xl">Musical: </span>{" "}
                  People with strength in this type of intelligence enjoy music.
                  They love to sing and play instruments.
                </p>
                <br />
                <p>
                  <span className="font-semibold text-xl">interpersonal: </span>{" "}
                  People with strength in this type of intelligence enjoy
                  working with others. They are leaders and love group projects.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
