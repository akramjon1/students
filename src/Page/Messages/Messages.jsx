import React, { Fragment, useState, useEffect } from "react";
import "./Messages.css";
import axios from "axios";

export const Messages = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  });
  const handleRead = (e) =>{
    alert(e);
  }
  return (
    <Fragment>
      <div className="messages_main">
        {data.map((item, index) => {
          return (
            <div className="messages_wrapper">
              <div className="messages_box" key={index}>
                <span>{item.name}</span>
                <span>{item.email}</span>
              {/*  
              <button onClick={handleRead(item.body)}>Read</button>
              */}
                <button>Read</button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
