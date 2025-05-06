import React, { useEffect, useState, useRef } from "react";
import Descriptions from "../ui/UserDescription";

function Home() {
  const targetRef = useRef(null);
  const targetRefOne = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const obsCallback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting && entry.intersectionRatio >= 0.01) {
          if (entry.target === targetRef.current) {
            setTimeout(() => setIsVisible(true), 300);
          }
          if (entry.target === targetRefOne.current) {
            setIsVisible2(true);
          }
        }
      });
    };

    const obsOptions = {
      root: null,
      threshold: 0.01,
      // rootMargin: "400px",
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    } else {
      observer.unobserve(targetRef.current);
    }

    if (targetRefOne.current) {
      observer.observe(targetRefOne.current);
    } else {
      observer.unobserve(targetRefOne.current);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* 1st section  */}
      <div className="flex justify-between gap-x-5 relative z-10">
        {/* svg */}
        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[242px]"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="fill-black"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-slate-800"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-black/10"
            ></path>
          </svg>
        </div> */}
        {/* Image  */}
        <div className="w-full h-full ">
          <img
            className="w-full object-cover h-[42rem]"
            src="https://english.onlinekhabar.com/wp-content/uploads/2021/12/Motorbiking-1024x576.jpg"
            alt=""
            width="300"
            height="300"
          />
        </div>

        <div className="absolute flex justify-between lg:gap-x-[330px] top-60 z-10 ">
          {/* left content */}
          <div
            ref={targetRef}
            className={`lg:ml-48 mt-28 lg:mt-1 transition-transform duration-1000 ease-in-out ${
              isVisible ? "translate-x-0" : "-translate-x-20 opacity-0"
            }`}
          >
            {/* <div className="bg-yellow-500 opacity-80 relative px-10 py-2 rounded-full  before:content-[''] before:absolute before:right-full before:top-[50px] before:border-t-[13px] before:border-b-[13px] before:border-r-[100px] before:border-t-transparent before:border-b-transparent before:border-r-yellow-500"> */}
            <p className=" font-serif font-semibold text-2xl text-black/80 ">
              The <span className=" text-white">platform</span> that connects
              shopkeeper and <span className=" text-white">cyclist</span> so{" "}
              <br /> that{" "}
              <span className="text-white">
                you just pleasure and enjoy each
              </span>{" "}
              Ride
            </p>
            <p className="font-mono text-[20px] mt-3 text-[#151b24]">
              We're here to help! Our online booking and workshop <br />{" "}
              management software is ideal for your bike rental company's <br />
              specific needs.
            </p>

            <button
              type="button"
              className="px-5 py-2 mt-3 text-xl font-serif font-semibold sm:text-base text-yellow-600 border border-yellow-500 rounded-md hover:bg-red-50 transition"
            >
              Free Trial
            </button>
            {/* </div> */}
          </div>

          {/* right content */}
          <div
            ref={targetRef}
            className={`ml-auto transition-transform duration-1000 ease-in-out ${
              isVisible ? "translate-x-0" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="z-50 opacity-80">
              <img
                src="https://images.pexels.com/photos/1208777/pexels-photo-1208777.jpeg?cs=srgb&dl=pexels-fr3nks-1208777.jpg&fm=jpg"
                alt="cycle"
                className="rounded-xl object-cover w-64 h-72 shadow-2xl border-green-400 border"
              />
              <div
                className="relative sm:-top-36 lg:-top-10 left-40 bg-white border border-green-400 rounded-lg p-4 w-56 shadow-sm flex flex-col gap-2"
                style={{ backdropFilter: "none" }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-red-500 font-semibold text-sm">
                    <i className="fas fa-clock"></i>
                    <span>Book</span>
                  </div>
                  <div className="text-green-600 font-bold text-sm">#B12</div>
                </div>
                <div className="text-xs text-gray-700">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="bg-green-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                      In progress
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold mt-1">
                    <span>Amount:</span>
                    <span>50 $</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2st section  */}
      <div className={`bg-[#f9f7f0] h-full `}>
        {/* private policy title */}
        <div
          ref={targetRefOne}
          className={`max-w-5xl mx-auto pt-10 transition-transform duration-1000 ease-in-out ${
            isVisible2 ? "translate-y-0" : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="text-2xl text-center font-mono sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Organise your fleet, grow online bookings, analysis and more,
            <span className="text-orange-500">Geek Tech has you covered.</span>
          </h1>

          <div className="mt-6 bg-orange-500 rounded-full flex flex-col sm:flex-row justify-center items-center gap-4 py-3 px-6 sm:px-12 text-white text-sm font-semibold">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-white text-base"></i>
              Free Account
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-white text-base"></i>
              No Payment Details Needed
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-white text-base"></i>
              Join 1000+ Other Users
            </div>
          </div>
        </div>

        {/* private policy content */}
        <div className=" mx-auto px-4 py-12">
          <h2 className="text-2xl text-center font-mono sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight ">
            Capture every opportunity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 rounded-lg">
            {/* 1st Feature Block */}
            <div className="flex  flex-col items-center">
              <div className=" bg-white/80 w-[25rem] h-[20rem] rounded-md">
                <div className="space-y-4 relative mx-auto mt-14 text-center rounded-md flex flex-col justify-center items-center">
                  {/*  Card 1 */}
                  <div className="flex w-[250px] items-center justify-between rounded-md bg-white p-2 shadow-md">
                    <div>
                      <h2 className="text-lg font-mono font-semibold leading-3 text-gray-900">
                        Rental
                      </h2>
                      <p className="mt-1 font-mono text-xs text-gray-400">
                        group/single Ride
                        <br />
                        Adult Motor Bike
                      </p>
                    </div>
                    <button
                      className="flex items-center space-x-1 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white"
                      aria-label="Status: Serviced"
                    >
                      <i className="fas fa-check-circle text-sm"></i>
                      <span>Serviced</span>
                    </button>
                  </div>

                  {/*  Card 2 */}
                  <div className="flex w-[250px] items-center justify-between rounded-md bg-white p-2 shadow-md">
                    <div>
                      <h2 className="text-lg font-mono font-semibold leading-3 text-gray-900">
                        Bicycle
                      </h2>
                      <p className="mt-1 font-mono text-xs text-gray-400">
                        Available fast
                        <br />
                        price limit
                      </p>
                    </div>
                    <button
                      className="flex items-center space-x-1 rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white"
                      aria-label="Status: Service Due"
                    >
                      <i className="far fa-clock text-sm"></i>
                      <span>Service Due</span>
                    </button>
                  </div>

                  {/* <!-- Card 3 (disabled) --> */}
                  <div className="flex w-[250px] items-center justify-between rounded-md bg-white p-2 shadow-md opacity-40 cursor-default select-none">
                    <div>
                      <h2 className="text-lg font-mono font-semibold leading-3 text-gray-900">
                        Motor Cycle
                      </h2>
                      <p className="mt-1 font-mono text-xs text-gray-400">
                        reliable price
                        <br />
                        Age condition
                      </p>
                    </div>
                    <button
                      className="flex items-center space-x-1 rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white"
                      aria-label="Status: Service Due"
                    >
                      <i className="far fa-clock text-sm"></i>
                      <span>Service Due</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center max-w-xs mt-8 font-serif">
                <h3 className="font-bold text-2xl">Increase Bookings</h3>
                <ul className="text-[#222831] text-[15px]">
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e] pr-1"></i>
                    <span className="">Customers will love booking online</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e]"></i>
                    <span className=""> No double bookings</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e]  pr-1"></i>
                    <span className="">Increased upsell opportunities</span>
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e] pr-1"></i>
                    <span className="">Fewer phone calls</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Second Feature --> */}
            <div className="flex flex-col items-center">
              <div className=" bg-white/80 w-[25rem] h-[20rem]  rounded-md">
                <div className="relative mx-auto mt-14 text-center bg-white shadow-md rounded-md w-48 h-48 flex justify-center items-center">
                  {/* Circular progress ring */}
                  <svg
                    className="w-28 h-48"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#D9D9D9"
                      strokeWidth="12"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#2563EB"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray="339.292"
                      strokeDashoffset="122.5"
                      transform="rotate(-90 60 60)"
                    />
                  </svg>

                  {/* Center text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-black leading-none">
                      68
                    </span>
                    <span className="mt-1 text-xs font-serif font-normal tracking-widest text-gray-400">
                      IN USE
                    </span>
                  </div>

                  {/* Top right card */}
                  <div className="absolute -top-10 -right-16 w-28 rounded-md bg-white px-3 py-3 text-center shadow-md font-sans">
                    <span className="text-xl font-mono font-bold leading-none text-orange-600">
                      157
                    </span>
                    <p className="mt-0.5 text-[8px] font-serif font-normal text-gray-400">
                      Total orders today
                    </p>
                  </div>

                  {/* Bottom left card */}
                  <div className="absolute -bottom-10 -left-20 w-36 rounded-md bg-white px-5 py-3 shadow-md">
                    <p className="mb-0.5 text-sm font-bold leading-none text-orange-600">
                      New Booking
                    </p>
                    <p className="text-[8px] font-serif font-normal text-gray-400">
                      client specific
                    </p>
                    <p className="text-[8px] font-serif font-normal text-gray-400">
                      Gwarkho-Nepal
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center max-w-xs mt-8 font-serif">
                <h3 className="font-bold text-2xl">Increase Bookings</h3>
                <ul className="text-[#222831] text-[15px]">
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e] pr-1"></i>
                    Customers will love booking online
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e] pr-1"></i>
                    No double bookings
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e] pr-1"></i>
                    Increased upsell opportunities
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e] pr-1"></i>
                    Fewer phone calls
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Third Feature --> */}
            <div className="flex flex-col items-center ">
              <div className="bg-white/80 w-[25rem] h-[20rem]  rounded-md">
                <div className="relative mx-auto mt-14 text-center bg-white shadow-md rounded-md w-48 h-48 flex justify-center items-center">
                  {/* <!-- Chart --> */}
                  <svg
                    viewBox="0 0 320 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-44"
                  >
                    {/* <!-- Y-axis grid lines --> */}
                    <line
                      x1="40"
                      y1="20"
                      x2="320"
                      y2="20"
                      stroke="#e5e7eb"
                      stroke-width="1"
                    />
                    <line
                      x1="40"
                      y1="60"
                      x2="320"
                      y2="60"
                      stroke="#e5e7eb"
                      stroke-width="1"
                    />
                    <line
                      x1="40"
                      y1="100"
                      x2="320"
                      y2="100"
                      stroke="#e5e7eb"
                      stroke-width="1"
                    />
                    <line
                      x1="40"
                      y1="140"
                      x2="320"
                      y2="140"
                      stroke="#e5e7eb"
                      stroke-width="1"
                    />

                    {/* <!-- Y-axis labels --> */}
                    <text
                      x="10"
                      y="25"
                      class="fill-gray-400 text-[10px] font-sans"
                    >
                      100
                    </text>
                    <text
                      x="10"
                      y="65"
                      class="fill-gray-400 text-[10px] font-sans"
                    >
                      60
                    </text>
                    <text
                      x="10"
                      y="105"
                      class="fill-gray-400 text-[10px] font-sans"
                    >
                      40
                    </text>

                    {/* <!-- X-axis labels --> */}
                    <text
                      x="50"
                      y="165"
                      class="fill-gray-400 text-[10px] font-sans"
                    >
                      4
                    </text>
                    <text
                      x="90"
                      y="165"
                      class="fill-gray-400 text-[10px] font-sans"
                    >
                      5
                    </text>
                    <text
                      x="130"
                      y="165"
                      class="fill-gray-400 text-[10px] font-sans"
                    >
                      6
                    </text>
                    <text
                      x="170"
                      y="165"
                      class="fill-gray-400 text-[10px] font-sans"
                    >
                      7
                    </text>
                    <text
                      x="210"
                      y="165"
                      class="fill-gray-400 text-[10px] font-sans"
                    >
                      8
                    </text>
                    <text
                      x="250"
                      y="165"
                      class="fill-gray-400 text-[10px] font-sans"
                    >
                      9
                    </text>
                    <text
                      x="290"
                      y="165"
                      class="fill-gray-400 text-[10px] font-sans"
                    >
                      10
                    </text>

                    {/* <!-- Area Fill --> */}
                    <path
                      d="M40 100 
                      L50 120 
                      L90 110 
                      L130 105 
                      L170 100 
                      L210 90 
                      L250 80 
                      L290 40 
                      L310 40 
                      L310 140 
                      L40 140 Z"
                      fill="#fca5a5"
                      fill-opacity="0.5"
                    />
                    {/* <!-- Line --> */}
                    <path
                      d="M40 100 
                      L50 120 
                      L90 110 
                      L130 105 
                      L170 100 
                      L210 90 
                      L250 80 
                      L290 40"
                      stroke="#f87171"
                      stroke-width="2"
                      fill="none"
                      stroke-linejoin="round"
                    />

                    {/* <!-- Chart Dots --> */}
                    <circle
                      cx="50"
                      cy="120"
                      class="w-2 h-2 fill-red-300 stroke-red-400 stroke-[2] rounded-full"
                    />
                    <circle
                      cx="90"
                      cy="110"
                      class="w-2 h-2 fill-red-300 stroke-red-400 stroke-[2] rounded-full"
                    />
                    <circle
                      cx="130"
                      cy="105"
                      class="w-2 h-2 fill-red-300 stroke-red-400 stroke-[2] rounded-full"
                    />
                    <circle
                      cx="170"
                      cy="100"
                      class="w-2 h-2 fill-red-300 stroke-red-400 stroke-[2] rounded-full"
                    />
                    <circle
                      cx="210"
                      cy="90"
                      class="w-2 h-2 fill-red-300 stroke-red-400 stroke-[2] rounded-full"
                    />
                    <circle
                      cx="250"
                      cy="80"
                      class="w-2 h-2 fill-red-300 stroke-red-400 stroke-[2] rounded-full"
                    />
                    <circle
                      cx="290"
                      cy="40"
                      class="w-2 h-2 fill-red-300 stroke-red-400 stroke-[2] rounded-full"
                    />
                  </svg>

                  {/* <!-- Stats Boxes --> */}
                  <div class="absolute top-10 -right-24 space-y-2">
                    <div class="w-28 bg-white shadow-md rounded-lg px-2 py-1 flex items-center ">
                      <i class="fas fa-arrow-up text-blue-600 text-xl"></i>
                      <div>
                        <p class="text-xl font-bold font-serif text-gray-900">
                          21%
                        </p>
                        <p class="text-[10px] font-serif font-normal text-gray-400">
                          Booking Increase
                        </p>
                      </div>
                    </div>
                    <div class="w-28 bg-white shadow-md rounded-lg px-2 py-1 flex items-center space-x-3">
                      <i class="fas fa-arrow-up text-blue-600 text-xl"></i>
                      <div>
                        <p class="text-2xl font-bold font-serif text-gray-900">
                          142
                        </p>
                        <p class="text-[10px] font-serif font-normal text-gray-400">
                          Total Bookings
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center max-w-xs mt-8 font-serif">
                <h3 className="font-bold text-2xl">Save Time</h3>
                <ul className="text-[#222831] text-[15px]">
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e] pr-1"></i>
                    Quick setup
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e]  pr-1"></i>
                    Bespoke to your business
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e] pr-1"></i>
                    Safe and secure
                  </li>
                  <li>
                    <i className="fas fa-check-circle text-[#8b879e] pr-1"></i>
                    Less manual management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-wrap justify-center relative">
          <Descriptions />
        </div> */}
        {/* four feature */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 font-[Inter]">
            Specialists in <span className="text-[#ff553e]">bike sectors</span>
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bike Rental */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://saharaseats.com/wp-content/uploads/2024/10/b708861c-6659-4ec4-a305-e8e3373cc0f0.jpg"
                alt="White bike with brown seat and handlebars leaning against white wall with shadows"
                className="rounded-lg w-full object-cover max-h-[300px]"
                width="600"
                height="300"
              />
              <h3 className="mt-4 font-bold text-gray-900 text-xl font-serif">
                Bike Rental
              </h3>
              <p className="mt-1 text-black/80 font-serif text-[14px] max-w-[320px]">
                Bike rental management is fun but can sometimes be challenging.
                We've created GeekTech to meet your every need when running a
                bike.
              </p>
            </div>

            {/* Electric Bike Rental */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://i.ytimg.com/vi/890grVV8wwE/sddefault.jpg"
                alt="Red electric bike and another bike lying on rocky ground with forest and mountains in background"
                className="rounded-lg w-full object-cover max-h-[300px]"
                width="600"
                height="300"
              />
              <h3 className="mt-4 font-bold text-gray-900 text-xl font-serif">
                Electric Bike Rental
              </h3>
              <p className="mt-1 text-black/80 font-serif text-[14px] max-w-[360px]">
                With the growth of the electric bike rental market, we've
                adapted our software to help you run a mixed or fully bike
                fleet. If this is you, you’re going to love GeekTech.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd section */}
      <div className="">
        {/* 1st content */}
        <div className="max-w-7xl mx-auto px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between md:gap-20">
          {/* Left Content */}
          <section className="max-w-xl flex flex-col gap-2">
            <div className="w-12 h-12 border-2 border-gray-700 rounded-md flex items-center justify-center relative">
              <i className="fas fa-laptop text-gray-700"></i>
              <i
                className="fas fa-bicycle text-gray-700 absolute"
                style={{ transform: "translateY(-2px)" }}
              ></i>
            </div>
            <h1 className="text-2xl font-extrabold font-serif leading-tight text-gray-900">
              Manage your entire bike <br /> rental operation in one place
            </h1>
            <p className="text-sm font-serif text-black/60 leading-relaxed">
              Our system handles everything from bookings to waivers, making it
              easy for you and your team to operate efficiently.
            </p>
            <ul className="list-disc list-inside font-serif text-black/60 text-sm space-y-1">
              <li>
                <span className="font-semibold text-black">
                  Flexible Pricing:
                </span>{" "}
                Set prices by hour, days and +more.
              </li>
              <li>
                <span className="font-semibold text-black">
                  Inventory Control:
                </span>{" "}
                Manage all assets effortlessly, from bikes to accessories.
              </li>
            </ul>
            <p className="text-sm font-serif text-black/60 leading-relaxed">
              Geek tech Watches offer an affordable way to enjoy ride timepieces
              without compromising on style. geet tech Watches For rent with
              Movement combine precision with striking designs. Explore the
              collection today and elevate your Ride effortlessly.
            </p>
          </section>

          {/* Right Content */}
          <section className="relative flex justify-center md:justify-end flex-1 max-w-lg">
            <div className="rounded-l-md bg-black/75 w-5" />
            <div className="rounded-r-2xl bg-gray-200 w-full max-w-lg overflow-hidden">
              <div className="flex gap-3 p-4 flex-wrap">
                <button className="flex items-center gap-2 bg-red-500 text-white text-xs font-semibold rounded-full px-4 py-1">
                  <i className="fas fa-search"></i> Search
                </button>
                <button className="flex items-center gap-2 bg-red-500 text-white text-xs font-semibold rounded-full px-4 py-1">
                  <i className="fas fa-plus"></i> Create
                </button>
                <button className="flex items-center gap-2 border border-red-500 text-red-500 text-xs font-semibold rounded-full px-4 py-1">
                  <i className="far fa-calendar-alt"></i> From Date
                </button>
                <button className="flex items-center gap-2 border border-red-500 text-red-500 text-xs font-semibold rounded-full px-4 py-1">
                  <i className="far fa-calendar-alt"></i> To Date
                </button>
              </div>
              <div className="space-y-2 p-4">
                <div className="h-6 rounded bg-red-200 w-full max-w-[90%]" />
                <div className="h-6 rounded bg-gray-300 w-full max-w-[95%]" />
                <div className="h-6 rounded bg-green-200 w-full max-w-[90%]" />
                <div className="h-6 rounded bg-blue-200 w-full max-w-[85%]" />
                <div className="h-6 rounded bg-gray-300 w-full max-w-[95%]" />
                <div className="h-6 rounded bg-green-200 w-full max-w-[90%]" />
                <div className="h-6 rounded bg-gray-300 w-full max-w-[95%]" />
              </div>
            </div>

            {/* Upcoming Bookings cards */}
            <div className="absolute -bottom-10 left-10 bg-white rounded-xl shadow-md p-2 w-36 text-gray-900">
              <p className="text-xs font-semibold uppercase tracking-wider font-serif mb-1 text-center">
                Upcoming Bookings
              </p>
              <p className="text-3xl font-extrabold leading-none text-center">
                100
              </p>
              <p className="text-xs font-semibold text-green-600 flex justify-center gap-1 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.707a1 1 0 011.414 0L10 13.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.5a1 1 0 01-1.414 0l-4-4.5a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                100%
              </p>
            </div>

            {/* Status Card */}
            <div className="absolute font-serif top-24 -right-14 bg-white rounded-xl shadow-md p-4 w-40 text-gray-900">
              <p className="text-xs font-semibold uppercase tracking-wider mb-3">
                Status
              </p>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-gray-600 inline-block"></span>{" "}
                  Provisional
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-blue-500 inline-block"></span>{" "}
                  Confirmed
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-red-500 inline-block"></span>{" "}
                  Checked out
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>{" "}
                  Checked in
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* 2th content  */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="flex flex-col justify-between lg:flex-row lg:items-center lg:space-x-20">
            {/* <!-- Left section --> */}
            <section className="relative mt-12 lg:mt-0 flex justify-center lg:justify-center max-w-xs lg:max-w-none">
              {/* <!-- First Card --> */}
              <article className="bg-white rounded-lg w-56 sm:w-72 md:w-76 relative transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative rounded-t-xl overflow-hidden">
                  <img
                    src="https://www.adventurehimalayantravels.com/uploads/img/kathmandu-mountain-biking-tour-3-days-1595736585.webp"
                    alt="Mountain Climb Trail with cyclist riding on a forest path with mountains in the background"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width="320"
                    height="200"
                  />
                  <div className="absolute top-2 right-2 font-serif bg-orange-900 rounded-md px-2 py-1 text-xs font-semibold text-gray-900 shadow text-center">
                    <span className="block leading-none text-white/85">24</span>
                    <span className="block -mt-0.5 text-white/85">APR</span>
                  </div>
                </div>
                <div className="p-4 text-gray-900 text-sm sm:text-base font-serif">
                  <h3 className="font-semibold text-black/80 mb-1">
                    Mountain Climb
                  </h3>
                  <p className="mb-3 leading-relaxed text-black/70 text-sm">
                    A great introduction for the novice climber. We will take a
                    route of ~60km with a mix of roads and gravel trails.
                  </p>
                  <p className="text-gray-500 mb-4 text-xs sm:text-sm">
                    FROM £30
                  </p>
                  <button className="w-full bg-red-500 text-white rounded-md py-2 text-sm sm:text-base font-semibold hover:bg-red-600 transition">
                    Book Now
                  </button>
                </div>
              </article>

              {/* <!-- Second Card --> */}
              <article className="bg-white rounded-xl w-64 sm:w-72 md:w-[16rem] absolute -top-6 left-20 sm:left-24 md:left-44 z-10 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative rounded-t-xl overflow-hidden">
                  <img
                    src="https://nepaltraveller.com/images/main/1733208874.sidetrackimageUntitled%20design%20(2).png"
                    alt="Group ride cyclists in a mountain valley with pine trees and blue sky"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width="320"
                    height="200"
                  />
                  <div className="absolute top-2 right-2 bg-orange-900 rounded-md px-2 py-1 text-xs font-serif font-semibold text-gray-900 shadow text-center">
                    <span className="block leading-none text-white/85">25</span>
                    <span className="block -mt-0.5 text-white/85">APR</span>
                  </div>
                </div>
                <div className="p-3 text-gray-900 text-sm sm:text-base font-serif">
                  <h3 className="font-semibold text-black/80">Group Ride</h3>
                  <p className="mb-1 leading-relaxed text-black/70 text-sm">
                    An easy ride for beginner cyclists. We’ll take you on a fun
                    route beginning and ending at the bike shop.
                  </p>
                  <p className="text-gray-500 mb-2 text-xs sm:text-sm">
                    FROM £30
                  </p>
                  <button className="w-full bg-red-500 text-white rounded-md py-2 text-sm sm:text-base font-semibold hover:bg-red-600 transition">
                    Book Now
                  </button>
                </div>
              </article>
            </section>

            {/* <!-- Right section --> */}
            <section className="flex-shrink-0 max-w-xl lg:max-w-md font-serif">
              <div className="text-gray-900 mb-6">
                <i className="fas fa-map-marker-alt fa-lg mb-4 block"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
                Add Tours &amp; Activities
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Easily set up events and sell tours while maintaining your
                rental availability.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm  text-gray-600 mb-6">
                <li>
                  <span className="font-semibold text-black/90">
                    Integrated Maintenance:
                  </span>
                  <span className="text-sm">
                    Prioritize safety with integrated bike maintenance.
                  </span>
                </li>
                <li>
                  <span className="font-semibold text-black/90">
                    Online Booking Page:
                  </span>
                  <span className="text-sm">
                    Drive 24/7 bookings and boost sales.
                  </span>
                </li>
              </ul>
              <div className="flex space-x-6">
                <button
                  type="button"
                  className="px-5 py-2 text-sm sm:text-base text-red-500 border border-red-500 rounded-md hover:bg-red-50 transition"
                >
                  Free trial
                </button>
                <button
                  type="button"
                  className="text-sm sm:text-base text-red-500 flex items-center space-x-1 hover:underline"
                >
                  <span>Learn more</span>
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 18l6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
