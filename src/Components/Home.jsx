import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Myimg from "../assets/IMG_20231112_153643_780.jpg";
import Leetcode from "../assets/Screenshot 2024-06-14 162813.png";
import recipeheavenimg from "../assets/Screenshot 2024-06-14 185148.png";
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="font-outfit px-5 py-32 ">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          className="h-[65vh] sm:h-[60vh] flex flex-col md:flex-row gap-[40px] justify-between items-center px-2 sm:mx-10 bg-orange-500 rounded-md sm:py-20 sm:px-20 sm:mb-10"
        >
          <div className="h-[40vh] px-3">
            <div className="sm:text-5xl text-3xl sm:pb-10 pb-5 pt-5 flex flex-col sm:gap-6 gap-2">
              Hey There. <br />{" "}
              <span
                className="cursor-pointer"
                // Initial color style
              >
                I'm{" "}
                <motion.u
                  whileHover={{ fontSize: "60px", color: "black" }}
                  style={{ color: "#ffffff" }}
                  className="font-bold"
                >
                  Jeelani Basha
                </motion.u>
              </span>
            </div>
            <div className="sm:text-2xl text-xl flex flex-wrap sm:w-[53vw]">
              I'm a Web Developer, 3rd year B.Tech Computer Science (CSE)
              Student, Aspiring to become a Software Engineer. Also intersted in
              Problem Solving.
            </div>
          </div>
          <div className="h-full">
            <img
              className="md:h-[34vh] md:w-[35vh] h-[30vh] w-[31vh] border-black border-2"
              src={Myimg}
              alt="Personal Photo"
            />
          </div>
        </motion.div>

        <div className="sm:px-20 sm:mx-10 sm:my-20 pl-2 pt-[3.3rem]">
          <p className="sm:text-3xl text-2xl">Education:</p>
          <table className="border border-black sm:w-[80%] w-[94%] border-separate border-spacing-0 sm:my-10 my-5 sm:text-2xl text-xl">
            <tbody>
              <tr className="border-b border-black">
                <td className="border border-black p-4">
                  SRM University AP, Amravati-Btech (CSE)
                </td>
                <td className="border border-black p-4">
                  CGPA: <span className="text-orange-400">9.3</span>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="border border-black p-4">
                  Loyola Public School, Nallapadu-ISC (MPC)
                </td>
                <td className="border border-black p-4">
                  Per: <span className="text-orange-400">89%</span>
                </td>
              </tr>
              <tr className="border-b border-black">
                <td className="border border-black p-4">
                  Loyola Public School, Nallapadu-School
                </td>
                <td className="border border-black p-4">
                  Per: <span className="text-orange-400">93%</span>
                </td>
              </tr>
            </tbody>
          </table>

          <a href="https://srmap.edu.in/" target="_blank">
            <p className="text-black flex gap-2 items-center text-xl">
              Check out more about SRM AP -
              <img
                className="h-[50px] "
                src="https://upload.wikimedia.org/wikipedia/en/6/6e/SRM_University%2C_Andhra_Pradesh_logo.png"
                alt=""
              />
            </p>
          </a>
        </div>

        <div className="sm:px-20 sm:mx-10 sm:my-20 mt-10">
          <p className="sm:text-3xl text-2xl mb-2">Leetcode Profile:</p>
          <p className="sm:text-xl text-md my-2">
            <u>
              <a target="_blank" href="https://leetcode.com/u/Jeelani443/">
                Leetcode Profile Link
              </a>
            </u>
          </p>
          <p className="text-xl">Just Started Way to go</p>
          <img className="mt-3 mb-3" src={Leetcode} alt="" />
        </div>

        <div className="sm:px-20 sm:mx-10 sm:my-20 pl-2 pt-10">
          <p className="sm:text-3xl text-2xl mb-3">Latest Project:</p>
          <p className="sm:text-2xl text-xl pb-3">Recipe Heaven</p>
          <p className="mb-2">
            Recipe Haven is a dynamic and user-friendly recipe website designed
            to help users discover a wide variety of dish recipes. Whether
            you're a seasoned chef or a kitchen novice, Recipe Haven provides an
            extensive database of recipes to suit all tastes and skill levels.
            This platform is built using the{" "}
            <b>
              <u>MERN stack</u>
            </b>
            (MongoDB, Express.js, React.js, and Node.js) and styled with{" "}
            <b>
              <u>Tailwind CSS</u>
            </b>
            , ensuring a seamless and visually appealing user experience.
          </p>
          <img
            className="sm:w-[70vw] sm:h-[70vh] mt-3 mb-3"
            src={recipeheavenimg}
            alt="RecipeHeavenimg"
          />
          <a
            className="sm:text-xl text-md underline"
            target="_blank"
            href="https://recipe-heaven-frontend-app.vercel.app/"
          >
            Link to the Website : recipe-heaven-frontend-app.vercel.app/
          </a>
          <p className="sm:pt-3 pt-6 sm:mb-5 mb-10">
            Go to Projects Section to check more Projects.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
