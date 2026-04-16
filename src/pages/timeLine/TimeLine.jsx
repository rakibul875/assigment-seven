import React, { useContext, useState } from "react";
import { FriendsContext } from "../../context/friendsContext/FriendProvider";
import EmptyPage from "../../ui/EmptyPage";
import ContactCart from "../../ui/ContactCart";
import { ArrowDown, ChevronDown } from "lucide-react";

const TimeLine = () => {
  const { contact } = useContext(FriendsContext);
  const [filter, setFilter] = useState("All");

  const filteredContact =
    filter === "All" ? contact : contact.filter((item) => item.type === filter);

  return (
    <div className="container mx-auto my-20">
      <h1 className="text-3xl font-bold">Time Line</h1>

      <div className="mt-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-3">
            {filter}<ChevronDown className="ml-2" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => setFilter("All")}>All</button>
            </li>
            <li>
              <button onClick={() => setFilter("Call")}>Call</button>
            </li>
            <li>
              <button onClick={() => setFilter("Text")}>Text</button>
            </li>
            <li>
              <button onClick={() => setFilter("Video")}>Video</button>
            </li>
          </ul>
        </div>
      </div>

      {filteredContact.length === 0 ? (
        <EmptyPage />
      ) : (
        filteredContact.map((cont, index) => (
          <ContactCart cont={cont} key={index} />
        ))
      )}

      {/* {contact.length == 0 ? (
        <EmptyPage />
      ) : (
        contact.map((cont, index) => <ContactCart cont={cont} key={index} />)
      )} */}
    </div>
  );
};

export default TimeLine;
