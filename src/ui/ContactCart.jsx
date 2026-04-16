import { MessageSquareMore, Phone, Video } from "lucide-react";
import React from "react";

const ContactCart = ({ cont }) => {
  return (
    <div className="container mx-auto">

     
      <div className="bg-base-200 rounded-xl shadow py-4 mt-2 flex items-center">
        <div className="ml-5">
          {cont.type=='Call'&& <Phone />}
          {cont.type=='Text'&& <MessageSquareMore />}
          {cont.type=='Video'&& <Video />}
        </div>
        <div className="mx-5 space-y-2">
          <h1 className="text-xl"><span className="text-2xl font-bold">{cont.type}</span> with{cont.name}</h1>
          <p className="text-sm text-gray-500">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      </div>

  );
};

export default ContactCart;
