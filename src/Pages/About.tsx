import { Facebook, Github, Instagram, X } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6 ">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">
          About This App
        </h1>
        {/* <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to the CGPA to Percentage Converter, a tool designed
          specifically for students of Pokhara University pursuing undergraduate
          degrees. This app aims to make it easy to convert your CGPA
          (Cumulative Grade Point Average) into a percentage and understand your
          academic performance at a glance.
        </p> */}
        {/* <h2 className="text-xl font-semibold text-gray-800 mb-2">Features</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Accurately converts CGPA to percentage.</li>
          <li>Displays corresponding grades </li>
          <li>Simple and user-friendly interface.</li>
        </ul> */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Purpose</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          This application is intended to help students applying for
          scholarships, further studies, or jobs where percentage scores are
          required. It simplifies the conversion process, ensuring you always
          have accurate results.
        </p>
        <br></br>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          About the Developer
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Hi👋, I’m Nabin, a student from Pokhara University with a passion for
          technology and solving practical problems through programming. I
          created this CGPA to Percentage Converter to help fellow students
          easily understand their academic performance and meet various
          application requirements. This app is designed with simplicity and
          accuracy in mind, ensuring a seamless experience for users. Thank you
          for using the app, and I hope it helps you achieve your goals! 😊 For
          any feedback or inquiries, feel free to reach out at:{" "}
          <a
            href="mailto:hi.nabinkdl@gmail.com"
            className="text-indigo-600 underline hover:text-indigo-800"
          >
            hi.nabinkdl@gmail.com
          </a>
          <div className=" flex pt-2 gap-2 ">
            <div className=" hover:text-indigo-600">
              <a href="https://www.instagram.com/navinn_x" target="_blank">
                <Instagram />
              </a>
            </div>
            <div className=" hover:text-indigo-600">
              <a href="https://www.facebook.com/nabinkdl" target="_blank">
                <Facebook />
              </a>
            </div>
            <div className=" hover:text-indigo-600">
              <a href="https://github.com/nabinkdl" target="_blank">
                <Github />
              </a>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
