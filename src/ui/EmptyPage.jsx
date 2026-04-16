import { ShieldAlert } from "lucide-react";
import React from "react";

const EmptyPage = () => {
  return (
    <div>
      <div className="text-center py-5 bg-base-300 my-5 rounded-2xl">
        <div className="flex justify-center items-center">
        <span>  <ShieldAlert size={100} className="text-red-700" /></span>
        </div>
        <h1 className="text-2xl font-bold">No timelines yet</h1>
        <p className="text-xl font-semibold text-gray-400">
          Your timeline is empty. Start adding important timelines or <br />
          timelines to see them appear here.
        </p>
      </div>
    </div>
  );
};

export default EmptyPage;
