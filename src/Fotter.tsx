import { Link, useLocation } from "react-router-dom";
import { Github } from "lucide-react";

const Fotter: React.FC = () => {
  const location = useLocation(); // Get the current location

  // Determine the link text and route based on the current path
  const isHomeActive = location.pathname === "/";
  const linkText = isHomeActive ? "About" : "Home";
  const linkTo = isHomeActive ? "/about" : "/";

  return (
    <div className="flex justify-center bg-white ">
      <div className="bg-white fixed bottom-0 w-full pb-2  flex justify-center items-center">
        <div>
          <a
            href="https://github.com/nabinkdl/CGPA-Conveter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm"
          >
            <div className=" hover:text-indigo-600 text-xs text-slate-600 flex justify-center items-center gap-0 relative">
              <div>Source Code:</div>
              <div>
                <Github className="h-5" />
              </div>
            </div>
          </a>
        </div>
        <div className=" hover:text-indigo-600 text-slate-700">
          {"| "}
          <Link to={linkTo}>{linkText}</Link>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
