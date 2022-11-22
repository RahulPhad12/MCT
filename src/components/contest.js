import React, { useState, useEffect } from "react";
import moment from "moment";
import Cup from "../components/cup.png";

function Contest() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://kontests.net/api/v1/all").then((result) => {
      result.json().then((resp) => {
        //   console.log(resp);
        setData(resp);
      });
    });
  }, []);
 

  return (
    <>
      <div className="container">
        {data.map((item) => (
          <div className="contest_info">
            <h2>{item.name}</h2>
            <p>
              Start Date:{" "}
              {moment(item.start_time).subtract(10, "days").calendar()}
            </p>
            <p>Start Time: {moment(item.start_time).format("h:mm:ss a")}</p>
            <p>Duration: {item.duration}</p>
            <p className="site">{item.site}</p>
            <a href={item.url}>Start Test</a>
            <img src={Cup} alt="cup" className="cup" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Contest;
