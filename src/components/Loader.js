import React from "react";

const Loader = () => (
    <div className="loader" onClick={(e) => e.stopPropagation()}>
        <div style={{display: "flex", justifyContent: "center", margin: "0 auto",}} className="lds-dual-ring"></div>
    </div>
)

export default Loader;
