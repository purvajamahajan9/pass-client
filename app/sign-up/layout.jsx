import React from "react";

function layout(props) {
  return (
    <div className="flex items-center justify-center h-screen">
      {props.children}
    </div>
  );
}

export default layout;
