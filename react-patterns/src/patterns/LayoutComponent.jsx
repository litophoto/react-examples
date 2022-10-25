const VerticalSplit = ({ startSide, endSide }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>{startSide}</div>
      <div style={{ flex: 3 }}>{endSide}</div>
    </div>
  );
};

export default VerticalSplit
