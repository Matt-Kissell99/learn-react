import React from "react";
import ReactDOM from "react-dom";
import Input from './components/1-atoms/input';

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
            <Input/>
            </div>
        )
};

ReactDOM.render(<Index3 />, document.getElementById("basic div"));