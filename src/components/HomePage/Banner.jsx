import { Plus } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto my-10 bg-base-200 py-10">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="w-full">
            <h1 className="text-5xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br /> relationships that matter most.
            </p>
            <button className="btn bg-green-900 text-white">
              <Plus />
              Add a Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
