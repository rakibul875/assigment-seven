import React, { useContext} from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendsContext } from "../../context/friendsContext/FriendProvider";
import EmptyPage from "../../ui/EmptyPage";

const Stats = () => {
  const { contact } = useContext(FriendsContext); 

  if(contact.length==0){
    return <EmptyPage/>
  }
  
  const callType=contact.filter(cont=>cont.type=='Call').length
  const textType=contact.filter(cont=>cont.type=='Text').length
  const videoType=contact.filter(cont=>cont.type=='Video').length
  

  const data = [
    { name: "Call", value: callType, fill: "#0088FE" },
    { name: "Text", value: textType, fill: "#00C49F" },
    { name: "Video", value: videoType, fill: "#FFBB28" },
  ];
  return (
   
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mx-5 mt-5">Friendship Analytics</h1>
      <div className="flex justify-center bg-base-200 my-5 py-5 rounded-2xl">
        <h1 className="text-xl font-bold">By Interaction Type</h1>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "50vh",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>

  );
};

export default Stats;
