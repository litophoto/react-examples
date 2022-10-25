const StringChildren = () => {
  return <div>Hello World!</div>;
};

const ArrayChildren = () => {
  return <div>{["Hello ", <span>World</span>, "!"]}</div>;
};

const ArrayAsChildren = () => {
  return (
    <ul>
      {["first", "second"].map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

const Message = ({ value }) => {
  return <div>Message is {value}</div>;
};

const ArrayOfMessage = () => {
  const arrayOfMessageObjects = [
    { id: 1, value: "aaa" },
    { id: 2, value: "bbb" },
  ];
  return (
    <ul>
      {arrayOfMessageObjects.map(({ id, ...message }) => (
        <Message key={id} {...message} />
      ))}
    </ul>
  );
};

export { StringChildren, ArrayChildren, ArrayAsChildren, ArrayOfMessage };
