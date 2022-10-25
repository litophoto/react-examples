import Greeting from "./patterns/defaultProps";
import GreetingRestProps from "./patterns/DestructuringProps";
import MyButton, {
  MyButtonNotReplacedClassName,
  MyButtonUsedToUndefined,
} from "./patterns/MergeDestructuredProps";
import ConditionalRendering from "./patterns/ConditionalRendering";
import { StringChildren, ArrayChildren, ArrayAsChildren, ArrayOfMessage } from "./patterns/ChildrenTypes";
import RenderProp from "./patterns/RenderProp";
import VerticalSplit from "./patterns/LayoutComponent";
const App = () => {
  return (
    <>
      <Greeting />
      <Greeting
        name="Fancy pants"
        className="fancy-greeting"
        id="user-greeting"
      />
      <MyButton className="delete-btn">Delete...</MyButton>
      <MyButtonNotReplacedClassName className="delete-btn">
        Delete...
      </MyButtonNotReplacedClassName>
      <MyButtonUsedToUndefined className="delete-btn">
        Delete...
      </MyButtonUsedToUndefined>
      <ConditionalRendering />
      <StringChildren />
      {/* <ArrayChildren /> */}
      <ArrayOfMessage />
      <RenderProp />
      <VerticalSplit startSide={
        <div>aaa</div>
      } endSide={
        <div>bbb</div>
      }></VerticalSplit>
    </>
  );
};

export default App;
