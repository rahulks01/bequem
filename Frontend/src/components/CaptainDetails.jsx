import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CapatainContext";

const CaptainDetails = () => {
  const { captain } = useContext(CaptainDataContext);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="/captain.jpg"
            alt=""
          />
          <h4 className="text-lg font-medium capitalize">
            {captain.fullname.firstname + " " + captain.fullname.lastname}
          </h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹295.20</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">74.3</h5>
          <p className="text-sm text-gray-600">k.m. Driven</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-star-fill"></i>
          <h5 className="text-lg font-medium">4.6</h5>
          <p className="text-sm text-gray-600">Avg. ratings</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
