import React from "react";

const EmptyPage = () => {
  return (
    <div>
      <div className="text-center py-25">
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
