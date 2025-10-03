import { useEffect, useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  let increaseCount = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    let setTimer = setInterval(() => {
      console.log("Learning React2");
    }, 1000);
    console.log("UseReturn");
    return () => {
      clearInterval(setTimer);
    };
  }, []);
  console.log("renderingg");
  return (
    <div className="userFunctional" style={{ border: "1px solid black" }}>
      <h1>
        Count: {count}
        <button onClick={increaseCount}>Count Increase</button>
      </h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {props.name}(Funtional)</h2>
      <h3>Location: Bengaluru</h3>
    </div>
  );
};

export default User;
