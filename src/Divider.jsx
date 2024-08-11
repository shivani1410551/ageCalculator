const Divider = ({ onCalculateAge }) => {
  return (
    <div className="divide">
      <div
        className=" border-b md:my-4 md:w-[20rem] md:mx-2  xs:w-[12rem]
        lg:w-[32rem]
  xs:my-6
  "
      ></div>
      <button type="submit" onClick={onCalculateAge}>
        {" "}
        <img
          src="./assets/images/icon-arrow.svg"
          alt="icon arrow"
          className=" bg-Purple rounded-full  absolute z-10  xs:h-[2.75rem] xs:w-[2.75rem] xs:p-3 xs:transform xs:translate-x-[-50%]  xs:left-[50%]
xs:bottom-[10rem]

    hover:bg-Offblack cursor-pointer
    md:h-[3.75rem] md:w-[3.65rem]
    md:p-[0.85rem] 
    md:translate-y-[-42%]
    md:top-[42%]


lg:translate-y-[-34.33%]
lg:top-[34.33%]
lg:left-[32rem]


    "
        />
      </button>
    </div>
  );
};

export default Divider;
