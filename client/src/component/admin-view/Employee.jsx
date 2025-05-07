import React from "react";

function Employee() {
  return (
    <div>
      <div className="max-w-7xl mt-2 mx-auto">
        <form className="flex flex-col sm:flex-row sm:space-x-3 mb-6 space-y-3 sm:space-y-0">
          <input
            aria-label="Search"
            type="search"
            placeholder="Search..."
            className="flex-grow rounded-lg border border-[#e6ebf1] bg-white py-2 px-4 text-sm placeholder:text-[#bfc9d9] focus:outline-none focus:ring-2 focus:ring-[#a3b1c6]"
          />
          <select
            aria-label="Dir. Status"
            className="w-full sm:w-36 rounded-lg border border-[#e6ebf1] bg-white py-2 px-3 text-sm text-[#bfc9d9] focus:outline-none focus:ring-2 focus:ring-[#a3b1c6]"
          >
            <option>Status</option>
          </select>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              name: "Jibachh Kumar",
              title: "Assistant",
              email: "Jibachh@gmail.com",
              phone: "9810266710",
              username: "jibachhkumar",
              image:
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            },
            {
              name: "Hari Shyam",
              title: "Manager",
              email: "harishyam@gmail.com",
              phone: "9810266710",
              username: "harishyam",
              image:
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            },
            {
              name: "Ram Kumar",
              title: "HR",
              email: "ram@gmail.com",
              phone: "9810266710",
              username: "ramkumar",
              image:
                "https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
            },
          ].map((person, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 shadow-[0_0_10px_rgba(230,235,241,0.7)]"
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={person.image}
                  alt={`Profile photo of ${person.name}`}
                  className="w-10 h-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="font-bold text-sm text-[#1f2937] leading-tight">
                    {person.name}
                  </p>
                  <p className="text-xs text-[#6b7280] leading-tight">
                    {person.title}
                  </p>
                </div>
              </div>
              <hr className="border-[#e6ebf1] mb-3" />
              <div className="space-y-3 text-[#6b7280] text-xs">
                <div className="flex items-center space-x-2">
                  <i className="far fa-envelope" />
                  <span>{person.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone-alt" />
                  <span>{person.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-user" />
                  <span>{person.username}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employee;
