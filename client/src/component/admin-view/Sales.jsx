import React from "react";

function Sales() {
  return (
    <div>
      <div className="max-w-5xl mt-3 mx-auto space-y-4">
        {/* Summary Cards */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          {[
            {
              title: "Total Sales",
              value: "50,000",
              percent: "20%",
              color: "text-red-600",
            },
            {
              title: "Total Expenses",
              value: "10,000",
              percent: "30%",
              color: "text-blue-600",
            },
            {
              title: "Products Sold",
              value: "100",
              percent: "30%",
              color: "text-green-600",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4 flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  {item.title}
                </span>
                <div
                  className={`flex items-center space-x-1 ${item.color} text-xs font-semibold`}
                >
                  <i className="fas fa-arrow-up"></i>
                  <span>{item.percent}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {item.value}
              </div>
              <div className="text-xs text-blue-600 font-semibold mt-1 cursor-pointer select-none">
                Details <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Visitors Stats */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-gray-700 font-semibold mb-4">Visitors Stats</h2>
          <div className="overflow-x-auto">
            <svg
              className="w-full h-48"
              viewBox="0 0 600 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Line chart showing visitors stats from January to December"
              role="img"
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0"
                  y1="0"
                  x2="600"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ef4444" offset="0%" />
                  <stop stopColor="#a78bfa" offset="50%" />
                  <stop stopColor="#3b82f6" offset="100%" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[...Array(13)].map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={50 + i * 50}
                  y1="0"
                  x2={50 + i * 50}
                  y2="180"
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              ))}
              {[...Array(7)].map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="50"
                  y1={180 - i * 30}
                  x2="600"
                  y2={180 - i * 30}
                  stroke="#e5e7eb"
                  strokeWidth="1"
                />
              ))}

              {/* Y-axis Labels */}
              {["0", "10000", "20000", "30000", "40000", "50000", "60000"].map(
                (label, i) => (
                  <text
                    key={label}
                    x="10"
                    y={185 - i * 30}
                    fontSize="10"
                    fill="#9ca3af"
                    textAnchor="start"
                  >
                    {label}
                  </text>
                )
              )}

              {/* X-axis Labels */}
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((month, i) => (
                <text
                  key={month}
                  x={50 + i * 50}
                  y="195"
                  fontSize="10"
                  fill="#9ca3af"
                  textAnchor="middle"
                >
                  {month}
                </text>
              ))}

              {/* Line Chart */}
              <path
                d="M50 160 Q75 40 100 120 T150 40 T200 120 T250 40 T300 120 T350 160 T400 180 T450 200 T500 220 T550 180 T600 120"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
