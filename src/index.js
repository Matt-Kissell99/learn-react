import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
    return <div>Hello React!</div>;
};

const Index2 = () => {
    return <div>Hello Matt!</div>;
};

const Index3 = () => {
    return (
            <div>
            <Index />
            <Index2 />
            </div>
        )
};

ReactDOM.render(<Index3 />, document.getElementById("root"));