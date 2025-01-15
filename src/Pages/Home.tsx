// App.tsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { GraduationCap, Calculator } from "lucide-react";
import { handleCalculateCgpa } from "../Controller/cgpaController";
const Home: React.FC = () => {
  const [cgpa, setCgpa] = useState<string>("");
  const [percentage, setPercentage] = useState<number | null>(null);
  const [grade, setGrade] = useState<string>("");
  const [honorPoint, setHonorPoint] = useState<number | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const calculatePercentage = () => {
    setLoading(true);
    const { error, result } = handleCalculateCgpa(cgpa);

    if (error) {
      setError(error);
      setPercentage(null);
      setGrade("");
      setHonorPoint(null);
    } else {
      setPercentage(result?.percentage || null);
      setGrade(result?.grade || "");
      setHonorPoint(result?.honorPoint || null);
      setError("");
    }
    setLoading(false);
  };

  return (
    <div className=" min-h-screen  flex items-center justify-center ">
      {/* SEO */}
      
      <Helmet>
        <title>CGPA to Percentage Calculator | Pokhara University</title>
        <meta
          name="description"
          content="Effortlessly convert your CGPA to percentage with this tool tailored for Pokhara University students."
        />
        <meta
          name="keywords"
          content="CGPA to Percentage, Pokhara University, Academic Calculator, Student Tools"
        />
        <meta property="og:title" content="CGPA to Percentage Calculator" />
        <meta
          property="og:description"
          content="Simplify CGPA to percentage conversion with this easy-to-use tool."
        />
        <link rel="canonical" href="https://pu.nabinkdl.com/" />
      </Helmet>

      {/*  */}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <GraduationCap className="w-10 h-10 text-indigo-600 mr-3" />
          <h1 className="text-2xl font-bold text-gray-800">
            CGPA to Percentage Calculator
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="cgpa"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter your CGPA (2.00 - 4.00), Pokhara University
            </label>
            <div className="relative">
              <input
                type="number"
                id="cgpa"
                step="0.01"
                min="2.00"
                max="4.00"
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter CGPA"
              />
            </div>
          </div>

          <button
            onClick={calculatePercentage}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
            disabled={loading}
          >
            <Calculator className="w-5 h-5" />
            <span>{loading ? "Calculating..." : "Calculate Percentage"}</span>
          </button>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          {percentage !== null && (
            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Result
              </h2>
              <div className="text-3xl font-bold text-indigo-600">
                {percentage.toFixed(2)}%
                <span className=" text-green-600"> {grade}</span>{" "}
                <span className=" hidden">{honorPoint} </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className=" z-10 text-center w-full font-light absolute bottom-8 left-1/2 transform -translate-x-1/2  text-indigo-600  rounded-lg  transition-colors text-xs md:text-base">
        <div>
          <a
            href="https://drive.google.com/file/d/1wIdtEUtJ0wsMrIeGKfhiQrWP-A6uS5OG/view"
            target="_blank"
            className=" hover:text-slate-700"
          >
            Official Document Refrence
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
