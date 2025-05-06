// UserDescriptions.jsx
import React from "react";
import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";
import { Space } from "antd";

const users = [
  {
    title: "Geet Tech",
    overall: "★★★★★",
    quote: "“simplicity, customization, speed, gui, price, scaling ability.”",
    name: "Konstantinos P.",
    role: "Shop owner",
    industry: "Computer Hardware",
    size: "1 Employee",
    disclaimer:
      "Capterra reviews constitute the subjective opinions of individual end users based on their own experiences and do not represent the views of Capterra or its affiliates.",
  },
  {
    title: "Software advice",
    overall: "★★★★★",
    quote:
      "“Overall, I am satisfied with the program. He helps with everyday tasks in the electronics service.”",
    name: "Michał Z.",
    role: "Founder",
    industry: "Consumer Services",
    size: "1 Employee",
    disclaimer:
      "Software Advice reviews constitute the subjective opinions of individual end users based on their own experiences and do not represent the views of Software Advice or its affiliates.",
  },
  {
    title: "GetApp",
    overall: "★★★★★",
    quote: "“Very clear and simple interface. Lots of useful features.”",
    name: "Dmytro K.",
    role: "Service Center Manager",
    industry: "Information Technology and Services",
    size: "1 to 10 Employees",
    disclaimer:
      "GetApp reviews constitute the subjective opinions of individual end users based on their own experiences and do not represent the views of GetApp or its affiliates.",
  },
  {
    title: "Jibachh",
    overall: "★★★★★",
    quote:
      "“I like that it is cloud based and works on all of my devices including iphone and ipad. It is very easy to add photos and create customer invoices.”",
    name: "Jibachh K.",
    role: "Owner",
    industry: "Automotive",
    size: "1 Employee",
    disclaimer:
      "Capterra reviews constitute the subjective opinions of individual end users based on their own experiences and do not represent the views of Capterra or its affiliates.",
  },
];

const UserCard = ({
  title,
  overall,
  quote,
  name,
  role,
  industry,
  size,
  disclaimer,
}) => {
  return (
    <div className="w-[280px] rounded-lg border border-gray-200 shadow-sm p-5">
      <Space>
        <SmileTwoTone />
      </Space>
      <span className="font-serif font-semibold pl-1">{title}</span>
      <p className="text-sm font-semibold mb-1">
        Overall:{" "}
        <span className="text-yellow-500" aria-label="5 stars">
          {overall}
        </span>
      </p>
      <p className="text-xs italic font-semibold mb-3 leading-tight">{quote}</p>
      <p className="text-xs font-bold mb-0">{name}</p>
      <p className="text-xs font-semibold mb-0">{role}</p>
      <p
        className={`text-xs mb-0 ${
          role === "Founder" ? "text-blue-700" : "font-normal"
        }`}
      >
        {industry}
      </p>
      <p className="text-xs font-normal mb-3">{size}</p>
      <p className="text-[6px] text-gray-400 leading-tight">{disclaimer}</p>
    </div>
  );
};

function UserDescriptions() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* <h2 className="text-center text-black/90 text-3xl font-bold font-serif mb-8">
        What our users say
      </h2> */}
      <div className="flex flex-wrap justify-center gap-6">
        {users.map((t, i) => (
          <UserCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
}

export default UserDescriptions;
