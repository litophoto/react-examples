let person = { name: "chantastic" };
let { name } = person;

let things = ["one", "two"];
let [first, second] = things;

const Greeting = ({ name }) => {
  return <div>Hi {name}!</div>;
};

const GreetingRestProps = ({ name, ...restProps }) => {
  return <div {...restProps}>Hi {name}!</div>;
};

export default GreetingRestProps