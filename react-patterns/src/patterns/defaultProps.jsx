const Greeting = (props) => {
  return <div>Hi {props.name}!</div>;
};

Greeting.defaultProps = {
  name: "Guest",
};

// export default Greeting

// from ES6

const GreetingES6 = ({ name = "Guest" }) => {
  return <div>Hi {name}!</div>;
};

export default GreetingES6;
