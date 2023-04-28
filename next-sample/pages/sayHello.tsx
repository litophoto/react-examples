import { useState, useEffect } from "react";

// const SayHello = () => {
//   const [data, setData] = useState({ name: "" });
//   useEffect(() => {
//     fetch("api/hello")
//       .then((res) => res.json())
//       .then((profile) => setData(profile));
//   }, []);

//   return <div>hello {data.name}</div>;
// };

const SayHello = () => {
  const [data, setData] = useState({ name: "" });
  useEffect(() => {
    (async () => {
      const response = await fetch("api/hello");
      const jsonResponse = await response.json();
      await setData(jsonResponse);
    })();
  }, []);

  return <div>hello {data.name}</div>;
};

export default SayHello;
