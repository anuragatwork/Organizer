import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Circles
        height="80"
        width="80"
        color="#18ffff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />{" "}
      <span
        style={{
          color: "blue",
          fontWeight: "bolder",
          letterSpacing: "2px",
        }}
      >
        <br/>Loading Shresth's Site 
      </span>
    </div>
  );
};

export default Loading;
