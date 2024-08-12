const OutputBlock = ({ className, text, age }) => {
  // console.log(age);
  return (
    <div className={`${className} md:space-x-2`}>
      <span className="hyphen">{age ? age : "--"}</span>
      <span className="hyphen">{age ? age : "--"}</span>
      <span className="outputText">{text}</span>
    </div>
  );
};

export default OutputBlock;
