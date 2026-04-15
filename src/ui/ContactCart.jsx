import React from "react";

const ContactCart = ({ cont }) => {
  return (
    <div className="container mx-auto">
      <div className="bg-base-200 rounded-xl shadow py-4 mt-2">
        <div className="mx-5">
            <h1 className="text-xl">with{cont.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactCart;
