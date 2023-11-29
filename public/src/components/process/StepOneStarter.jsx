import React from "react";

const StepOneStarter = () => {
  return (
    <div className="flex items-center h-full mx-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-airbnb-light-black">
          <div className="text-2xl">Step 1</div>
          <h1 className="text-4xl">
            <strong>Tell us about your place</strong>
          </h1>
          <p className="text-xl">Provided a detail info of your place</p>
        </div>
        <div>
          <video src="/home.mp4" autoPlay Loop controls={false}></video>
        </div>
      </div>
    </div>
  );
};

export default StepOneStarter;
