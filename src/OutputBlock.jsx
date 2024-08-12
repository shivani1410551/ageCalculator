const OutputBlock = ({ item }) => {
  return (
    <div className={`${item.className} md:space-x-2`}>
      <span className="hyphen">--</span>
      <span className="hyphen">--</span>
      <span className="outputText">{item.text}</span>
    </div>
  );
};

export default OutputBlock;
