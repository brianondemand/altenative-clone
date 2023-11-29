import Image from "next/image";
import React from "react";

const Overview = () => {
  const mainTitle = "Get Started Today!";
  const data = [
    {
      title: "Details about your property",
      description:
        "Property location, number of guests allowed, amenities available",
      image: "/overview1.webp",
    },
    {
      title: "View of your property",
      description: "Add photos, title and description of your property",
      image: "/overview2.webp",
    },
    {
      title: "Publish",
      description: "Publish your property for clients to see",
      image: "/overview3.webp",
    },
  ];

  return (
    <div className="flex h-full justify-between items-center px-32 gap-20">
      <div>
        <strong>
          <h1 className="text-5xl leading-normal text-airbnb-light-black">
            {mainTitle}
          </h1>
        </strong>
      </div>
      <ul className="flex flex-col gap-16">
        {data.map(({ description, title, image }, index) => (
          <li key={title} className="flex items-center justify-center gap-6">
            <strong className="text-2xl pt-5 text-airbnb-light-black">
              <h3>{index + 1}</h3>
            </strong>
            <div className="pt-5">
              <strong className="text-2xl text-airbnb-light-black">
                <h3>{title}</h3>
              </strong>
              <p className="text-airbnb-light-gray">{description}</p>
            </div>
            <div className="relative w-48 h-32 object-cover">
              <Image src={image} alt="overview" fill />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;
