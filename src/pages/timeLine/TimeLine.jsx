import React, { useContext } from "react";
import { FriendsContext } from "../../context/friendsContext/FriendProvider";
import EmptyPage from "../../ui/EmptyPage";
import ContactCart from "../../ui/ContactCart";
import { ArrowDown } from "lucide-react";

const TimeLine = () => {
  const { contact } = useContext(FriendsContext);
  console.log(contact.length);

  return (
    <div className="container mx-auto my-20">
      <h1 className="text-3xl font-bold">Time Line</h1>

      <div className="mt-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-3">
            All  <ArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button>All</button>
            </li>
            <li>
              <button>Call</button>
            </li>
            <li>
              <button>Text</button>
            </li>
            <li>
              <button>Video</button>
            </li>
           
          </ul>
        </div>
      </div>

      {contact.length == 0 ? (
        <EmptyPage />
      ) : (
        contact.map((cont, index) => <ContactCart cont={cont} key={index} />)
      )}
    </div>
  );
};

export default TimeLine;
