import React, {useState, useEffect, Fragment} from "react";
import "./Teachers.css";
import axios from "axios";


export const Teachers = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  });
 
   return(
    <Fragment>
      <div className="teachers_main">
        <div className="teachers_wrapper">
        {data.map((item, index) => {
          return (
          
              <div className="teachers_box" key={index}>
                <img src={item.url} alt="" />
                <p>{item.id}</p>
                
            </div>
          );
        })}
        </div>
       
      </div>
    </Fragment>
   )
};