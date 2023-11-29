import React from "react";

const StepTwoStarter = () => {
  return (
    <div className="flex items-center h-full mx-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-airbnb-light-black">
          <div className="text-2xl">Step 2</div>
          <h1 className="text-4xl">
            <strong>A view of your property</strong>
          </h1>
          <p className="text-xl">
            Provided images a title and description of your property
          </p>
        </div>
        <div>
          <video src="/home2.mp4" autoPlay Loop controls={false}></video>
        </div>
      </div>
    </div>
  );
};

export default StepTwoStarter;
