import React from "react";

const StepThreeStarter = () => {
  return (
    <div className="flex items-center h-full mx-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-airbnb-light-black">
          <div className="text-2xl">Step 3</div>
          <h1 className="text-4xl">
            <strong>Finalize and Publish </strong>
          </h1>
          <p className="text-xl">
            Set a price per night and what clients you may require.
          </p>
        </div>
        <div>
          <video src="/home3.mp4" autoPlay Loop controls={false}></video>
        </div>
      </div>
    </div>
  );
};

export default StepThreeStarter;
