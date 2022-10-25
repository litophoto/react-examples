const Width = ({ children }) => children(500);
const MinWidth = ({ width: minWidth, children }) => (
  <Width>{(width) => (width > minWidth ? children : null)}</Width>
);

const RenderProp = () => {
  return (
    <>
      <Width>{(width) => <div>window is {width}</div>}</Width>
      <Width>
        {(width) =>
          width > 600 ? <div>min-width requirement met!</div> : null
        }
      </Width>

    </>
  );
};

export default RenderProp;

// TODO: https://reactpatterns.com/

