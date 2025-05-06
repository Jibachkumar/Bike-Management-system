import React from "react";

function Report() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center mt-1 space-x-2 text-gray-700 text-sm font-normal">
            <i className="fas fa-signal text-gray-400"></i>
            <span>Venue Reports</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row md:space-x-8">
          <form
            className="flex flex-col space-y-6 w-full md:w-1/3 text-gray-700 text-sm font-normal"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="venueName" className="block mb-1">
                Venue Name
              </label>
              <select
                id="venueName"
                name="venueName"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f15a40] focus:border-transparent"
              >
                <option defaultValue>rental</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Total Bookings</label>
              <p className="text-lg font-semibold text-gray-900">0</p>
              <hr className="border-t border-gray-300 mt-2" />
            </div>

            <div>
              <label className="block mb-1">Show by</label>
              <div className="flex space-x-3">
                <select
                  id="showBy1"
                  name="showBy1"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f15a40] focus:border-transparent"
                >
                  <option defaultValue>Weekdays</option>
                </select>
                <select
                  id="showBy2"
                  name="showBy2"
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f15a40] focus:border-transparent"
                >
                  <option defaultValue>Total bookings</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="selectDate" className="block mb-1">
                Select date
              </label>
              <input
                type="text"
                id="selectDate"
                name="selectDate"
                defaultValue="April 5, 2025 to May 5, 2025"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#f15a40] focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-36 bg-[#f15a40] text-white text-xs font-normal rounded-full py-2 mt-2 hover:bg-[#e04e36] transition-colors"
            >
              Update
            </button>
          </form>

          <div className="flex-1 mt-6 md:mt-0">
            <div className="flex items-center space-x-2 mb-2">
              <div
                className="w-6 h-3 rounded-sm"
                style={{ backgroundColor: "#f15a40" }}
              ></div>
              <span className="text-xs text-gray-500 font-normal">
                Bookings
              </span>
            </div>
            <div className="relative w-full h-48 text-gray-400 text-xs font-normal select-none">
              <div className="absolute top-0 left-0 flex flex-col gap-y-3 justify-between h-full pr-8">
                {[
                  "1",
                  "0.9",
                  "0.8",
                  "0.7",
                  "0.6",
                  "0.5",
                  "0.4",
                  "0.3",
                  "0.2",
                  "0.1",
                  "0",
                ].map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              <div className="absolute -bottom-[150px] left-16 right-10 flex justify-between px-2">
                {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
