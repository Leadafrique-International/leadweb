"use client";
// components/RIASECTest.tsx

import { useState } from "react";
import axios from "axios";

type RIASECType = "R" | "I" | "A" | "S" | "E" | "C";

const questions = [
  "I like to work on cars",
  "I like to do puzzles",
  "I am good at working independently",
  "I like to work in teams",
  "I am an ambitious person, I set goals for myself",
  "I like to organize things, (files, desks/offices)",
  "I like to build things",
  "I like to read about art and music",
  "I like to have clear instructions to follow",
  "I like to try to influence or persuade people",
  "I like to do experiments",
  "I like to teach or train people",
  "I like trying to help people solve their problems",
  "I like to take care of animals",
  "I wouldn’t mind working 8 hours per day in an office",
  "I like selling things",
  "I enjoy creative writing",
  "I enjoy science",
  "I am quick to take on new responsibilities",
  "I am interested in healing people",
  "I enjoy trying to figure out how things work",
  "I like putting things together or assembling things",
  "I am a creative person",
  "I pay attention to details",
  "I like to do filing or typing",
  "I like to analyze things (problems/situations)",
  "I like to play instruments or sing",
  "I enjoy learning about other cultures",
  "I would like to start my own business",
  "I like to cook",
  "I like acting in plays",
  "I am a practical person",
  "I like working with numbers",
  "I like to get into discussions about issues",
  "I am good at keeping records of my work",
  "I like to lead",
  "I like working outdoors",
  "I would like to work in an office",
  "I’m good at math",
  "I like helping people",
  "I like to draw",
  "I like to give speeches",
];
const RIASEC_RESULTS = {
  R: {
    title: "Realistic",
    description:
      "These people are often good at mechanical or athletic jobs. Good college majors for Realistic people are...",
    majors: [
      "Agriculture",
      "Health Assistant",
      "Computers",
      "Construction",
      "Mechanic/Machinist",
      "Engineering",
      "Food and Hospitality",
    ],
    relatedPathways: [
      "Natural Resources",
      "Health Services",
      "Industrial and Engineering Technology",
      "Arts and Communication",
    ],
  },
  I: {
    title: "Investigative",
    description:
      "These people like to watch, learn, analyze and solve problems. Good college majors for Investigative people are...",
    majors: [
      "Marine Biology",
      "Engineering",
      "Chemistry",
      "Zoology",
      "Medicine/Surgery",
      "Consumer Economics",
      "Psychology",
    ],
    relatedPathways: [
      "Health Services",
      "Business",
      "Public and Human Services",
      "Industrial and Engineering Technology",
    ],
  },
  A: {
    title: "Artistic",
    description:
      "These people like to work in unstructured situations where they can use their creativity. Good majors for Artistic people are...",
    majors: [
      "Communications",
      "Cosmetology",
      "Fine and Performing Arts",
      "Photography",
      "Radio and TV",
      "Interior Design",
      "Architecture",
    ],
    relatedPathways: ["Public and Human Services", "Arts and Communication"],
  },
  S: {
    title: "Social",
    description:
      "These people like to work with other people, rather than things. Good college majors for Social people are...",
    majors: [
      "Counseling",
      "Nursing",
      "Physical Therapy",
      "Travel",
      "Advertising",
      "Public Relations",
      "Education",
    ],
    relatedPathways: ["Health Services", "Public and Human Services"],
  },
  E: {
    title: "Enterprising",
    description:
      "These people like to work with others and enjoy persuading and performing. Good college majors for Enterprising people are...",
    majors: [
      "Fashion Merchandising",
      "Real Estate",
      "Marketing/Sales",
      "Law",
      "Political Science",
      "International Trade",
      "Banking/Finance",
    ],
    relatedPathways: [
      "Business",
      "Public and Human Services",
      "Arts and Communication",
    ],
  },
  C: {
    title: "Conventional",
    description:
      "These people are very detail oriented, organized and like to work with data. Good college majors for Conventional people are...",
    majors: [
      "Accounting",
      "Court Reporting",
      "Insurance",
      "Administration",
      "Medical Records",
      "Banking",
      "Data Processing",
    ],
    relatedPathways: [
      "Health Services",
      "Business",
      "Industrial and Engineering Technology",
    ],
  },
};

export const RIASECTest = () => {
  const [answers, setAnswers] = useState<(RIASECType | null)[]>(
    new Array(questions.length).fill(null)
  );
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null
  );
  const [name, setName] = useState<string>("");

  const handleChange = (index: number, type: RIASECType) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = type;
      return newAnswers;
    });
  };

  const handleSubmit = async () => {
    try {
      const results = {
        name,
        ...computeResults(),
      };
      const response = await axios.post(
        "https://getform.io/f/e3d5a4b2-d2ed-4358-8238-6af017bb0b7c",
        results
      );
      console.log("Form submitted successfully!", response.data);
      setSubmissionMessage("Results submitted successfully!");
    } catch (error) {
      console.error("There was an error submitting the form", error);
      setSubmissionMessage("Error submitting results. Please try again.");
    }
  };

  const computeResults = () => {
    const results: { [key in RIASECType]: number } = {
      R: 0,
      I: 0,
      A: 0,
      S: 0,
      E: 0,
      C: 0,
    };

    answers.forEach((answer) => {
      if (answer) {
        results[answer] += 1;
      }
    });

    return results;
  };
  //   const topThreeInterests = Object.entries(computeResults())
  //     .sort((a, b) => b[1] - a[1]) // Sort by highest scores
  //     .slice(0, 3); // Take top 3
  const computeTopThreeInterests = () => {
    const results = computeResults();
    return Object.keys(results)
      .sort((a, b) => results[b as RIASECType] - results[a as RIASECType])
      .slice(0, 3);
  };
  const numberToRIASECMap: { [key: number]: RIASECType } = {
    1: "R",
    2: "I",
    3: "A",
    4: "S",
    5: "E",
    6: "C",
  };

  const topThreeInterests = computeTopThreeInterests();
  const canSubmit = name && !answers.includes(null);

  return (
    <div className="bg-purple-50 min-h-screen mb-10 flex flex-col items-center justify-center">
      <h2 className="lg:text-4xl text-2xl mt-10  font-bold mb-6 text-center text-purple-900">
        Which Career Pathway is right for you?
      </h2>
      <div className="justify-evenly max-w-4xl mx-auto px-10 text-center lg:text-2xl  text-purple-900">
        {" "}
        <p>Follow these easy steps to see where your interests are.</p>
        <p>
          In this survey, you will be presented with a series of statements. For
          each statement, please indicate your level of interest by selecting a
          number from the scale of 1 to 6:
        </p>
        <p className="font-bold text-[18px] lg:text-3xl">
          1: Strongly Dislike 2: Dislike 3: Slightly Dislike 4: Slightly Like 5:
          Like 6: Strongly Like
        </p>
        <p>
          Your selections should reflect how you truly feel, not how you think
          you should answer. There are no right or wrong answers. Just be honest
          and choose the option that best represents your feelings.
        </p>
      </div>

      <form
        className="w-[95%] md:w-3/5 lg:w-2/5 bg-white mt-10 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-purple-300 border-2"
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSubmit();
        }}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-2xl font-bold mb-2 ">
            Your Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {question}
            </label>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <label key={num} className="inline-flex items-center">
                  <input
                    className="form-radio text-blue-500 cursor-pointer"
                    type="radio"
                    id={`question-${index}-${num}`}
                    value={num}
                    name={`question-${index}`}
                    onChange={(e) =>
                      handleChange(
                        index,
                        numberToRIASECMap[e.target.value as unknown as number]
                      )
                    }
                  />
                  <span className="ml-2 text-gray-600">{num}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          className="bg-purple-600 mt-5 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded cursor-pointer focus:outline-none focus:shadow-outline-purple"
          type="submit"
          disabled={!canSubmit}
        >
          Submit Results
        </button>
      </form>
      <div className="w-[95%] md:w-3/5 lg:w-2/5 lg:text-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 border-purple-300 border-2">
        <h3 className="text-2xl font-bold mb-4">Your Results:</h3>
        <p className="mb-3">
          RIASEC is an acronym that stands for six dimensions:{" "}
          <span className="font-bold">
            {" "}
            Realistic, Investigative, Artistic, Social, Enterprising and
            Conventional.
          </span>{" "}
          It’s a personality tool that matches your interest to a career path.
          This clarity becomes your guide to navigating your career journey.
          Your top 3 codes represents your strongest interest areas based on
          your responses to the questions.
        </p>
        {Object.entries(computeResults()).map(([key, value]) => (
          <div key={key} className="flex justify-between mb-2">
            <strong className="text-gray-700">{key}:</strong>
            <span className="text-blue-500">{value}</span>
          </div>
        ))}
      </div>

      {submissionMessage && (
        <p className="text-green-600 mb-4">{submissionMessage}</p>
      )}
      <div className="w-[95%] md:w-3/5 lg:w-2/5 lg:text-2xl bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 border-purple-300 border-2">
        <h3 className="text-2xl font-bold mb-4">
          Your Current Top 3 Interests:
        </h3>
        {topThreeInterests.map((interest) => (
          <div className="mt-4 mb-6 border p-4 rounded" key={interest}>
            <h3 className="text-2xl font-bold mb-4">
              {RIASEC_RESULTS[interest as RIASECType].title}
            </h3>
            <p>{RIASEC_RESULTS[interest as RIASECType].description}</p>
            <h4 className="text-xl font-medium mt-4">Majors:</h4>
            <ul className="list-disc ml-8 mt-2">
              {RIASEC_RESULTS[interest as RIASECType].majors.map((major) => (
                <li key={major}>{major}</li>
              ))}
            </ul>
            <h4 className="text-xl font-medium mt-4">Related Pathways:</h4>
            <ul className="list-disc ml-8 mt-2">
              {RIASEC_RESULTS[interest as RIASECType].relatedPathways.map(
                (pathway) => (
                  <li key={pathway}>{pathway}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
