import React from "react";
import rtcc from "../images/rtcc_detail_1-removebg-preview.png";
import visual from "../images/indiaVisual.png";
import explainer from "../images/42492_2021_75_Fig1_HTML.webp";
import { Link } from "react-router-dom";
const HomeRest = () => {
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Real-time Crime Data Access
              </h2>
              <p class="mb-8 font-light lg:text-xl">
                SmartSecure sources real-time crime data from reliable
                government databases, offering an up-to-date and accurate
                reflection of the current crime scenario in each district.
              </p>

              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Continuous deployment
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Realtime Data
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    User-friendly Dashboard
                  </span>
                </li>
              </ul>
              <p class="mb-8 font-light lg:text-xl">
                Secure BackEnd to make sure no data gets in wrong hands
              </p>
            </div>
            <img
              class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={rtcc}
              alt="dashboard feature image"
            />
          </div>

          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 ">
            <img
              className="hidden object-cover h-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={visual}
              alt="feature image 2"
            />
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                District-wise Visualization and Analytics
              </h2>
              <p class="mb-8 font-light lg:text-xl">
                The system presents crime rates in a user-friendly dashboard,
                allowing authorities to visually analyze trends, patterns, and
                hotspots across different districts. Utilizes interactive maps,
                charts, and graphs to highlight specific crime categories and
                their prevalence.
              </p>

              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Presents crime rates in a user-friendly dashboard
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Allows authorities to visually analyze trends, patterns
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Identifies hotspots across different districts
                  </span>
                </li>
              </ul>
              <p class="font-light lg:text-xl">
                Utilizes interactive maps, charts, and graphs to highlight
                specific crime categories and their prevalence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900">
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div class="col-span-2 mb-8">
            <p class="text-lg font-medium text-purple-600 dark:text-purple-500">
              Find concerning areas
            </p>
            <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Machine Learning Crime Prediction
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Implements machine learning models to predict potential future
              crime trends based on historical data. Provides actionable
              insights to law enforcement, enabling them to proactively allocate
              resources and increase vigilance for specific crime types
            </p>
            <div className="bg-gray-900 p-4 mt-8 mr-40 flex items-center justify-center">
              <Link to="/login">
                <button className="bg-blue-500 text-white py-2 px-4 rounded flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="20"
                    height="20"
                    className="mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  Sign up now
                </button>
              </Link>
            </div>
          </div>
          <div class="col-span-2">
            <img src={explainer} alt="visual rep" />
          </div>
        </div>
      </section>

      <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure class="max-w-screen-md mx-auto">
            <blockquote>
              <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                SmartSecure aims to not only provide a comprehensive crime
                analysis tool but also to evolve into a proactive and
                collaborative system that empowers both law enforcement agencies
                and communities to work together for a safer and more secure
                future.
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Customizable Alert System
              </h2>
              <p class="mb-8 font-light lg:text-xl">
                SmartSecure incorporates an alert system that notifies
                authorities when crime rates exceed predefined thresholds,
                allowing for swift and targeted responses.
              </p>

              <p class="mb-8 font-light lg:text-xl">
                Extend the system to include detailed analysis of crime
                hotspots, enabling authorities to focus on specific
                neighborhoods or areas requiring heightened security measures.
              </p>
            </div>
            <img
              class="hidden w-72 mx-auto mb-4 rounded-lg lg:mb-0 lg:flex"
              src="https://cdn-icons-png.flaticon.com/512/559/559384.png"
              alt="dashboard feature image"
            />
          </div>

          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16 ">
            <img
              className="hidden  mb-4 rounded-lg lg:mb-0 lg:flex"
              src="https://static.vecteezy.com/system/resources/thumbnails/019/050/321/small/handshake-symbol-icon-png.png"
              alt="feature image 2"
            />
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Community Engagement and Reporting
              </h2>
              <p class="mb-8 font-light lg:text-xl">
                Facilitates citizen involvement by incorporating a reporting
                mechanism, encouraging communities to share information and
                concerns. Integrates social media platforms for crowd-sourced
                data collection and community-driven crime awareness.
              </p>

              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Presents crime rates in a user-friendly dashboard
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Allows authorities to visually analyze trends, patterns
                  </span>
                </li>
                <li class="flex space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    Identifies hotspots across different districts
                  </span>
                </li>
              </ul>
              <p class="font-light lg:text-xl">
                Utilizes interactive maps, charts, and graphs to highlight
                specific crime categories and their prevalence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeRest;
