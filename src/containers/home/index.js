import React, { useEffect } from "react";
import request from "umi-request";

// 同构：一套React代码，在服务器端执行一次，再客户端再执行一次

const Home = () => {
  useEffect(() => {
    request
      .post("/api3/test", {
        data: {},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      request
          .post("/api3/test", {
              data: {},
          })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
  }, []);
  return (
    <div>
      <div>This is Dell Lee!</div>
      <button
        onClick={() => {
          alert("click1");
        }}
      >
        click
      </button>
    </div>
  );
};

export default Home;
