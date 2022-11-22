import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import CounterWrapper from "remote_counter/CounterWrapper";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    CounterWrapper(divRef.current);
  }, []);

  return (
    <div className="p-5">
      <div>Name: host-react</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <div className="pt-2" ref={divRef}></div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
