import OutputBlock from "./OutputBlock";

const OutputDisplay = ({ birthYears, birthMonth, birthDay }) => {
  console.log(birthYears, birthMonth, birthDay);
  return (
    <>
      <div className="output-box md:mt-10 xs:-mt-3">
        <OutputBlock
          className="year-output-block "
          text="years"
          id="1"
          age={birthYears}
        />
        <OutputBlock
          className="month-output-block "
          text="months"
          id="2"
          age={birthMonth}
        />
        <OutputBlock
          className="days-output-block "
          text="days"
          id="3"
          age={birthDay}
        />
      </div>
    </>
  );
};

export default OutputDisplay;
