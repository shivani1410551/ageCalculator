const OutputBlock = ({ className, text, id }) => {
  return (
    <div className={`${className} md:space-x-2`}>
      <span className="hyphen">--</span>
      <span className="hyphen">--</span>
      <span className="outputText">{text}</span>
    </div>
  );
};

export default OutputBlock;
