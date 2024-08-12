import OutputBlock from "./OutputBlock";

const OutputDisplay = () => {
  return (
    <>
      <div className="output-box md:-mt-4 xs:-mt-3">
        <OutputBlock className="year-output-block " text="years" id="1" />
        <OutputBlock className="month-output-block " text="months" id="2" />
        <OutputBlock className="days-output-block " text="days" id="3" />
      </div>
    </>
  );
};

export default OutputDisplay;
