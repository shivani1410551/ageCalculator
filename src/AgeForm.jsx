import AgeInput from "./AgeInput";
import { useRef, useEffect, useState } from "react";
const AgeForm = ({ handleAge, setAge }) => {
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [Error, setError] = useState();
  const inputRef_1 = useRef(null);
  const inputRef_2 = useRef(null);
  const inputRef_3 = useRef(null);
  const labelRef_1 = useRef(null);
  const labelRef_2 = useRef(null);
  const labelRef_3 = useRef(null);
  function Init() {
    labelRef_1.current && labelRef_1.current.classList.add("labelError");
    labelRef_2.current && labelRef_2.current.classList.add("labelError");
    labelRef_3.current && labelRef_3.current.classList.add("labelError");

    inputRef_1.current && inputRef_1.current.classList.add("inputError");
    inputRef_2.current && inputRef_2.current.classList.add("inputError");
    inputRef_3.current && inputRef_3.current.classList.add("inputError");
  }
  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef_1.current.focus();
  }, []);
  function handleFocus(inputNumber) {
    if (inputNumber === 1) {
      inputRef_1.current.focus();
    } else if (inputNumber === 2) {
      inputRef_2.current.focus();
    } else if (inputNumber === 3) {
      inputRef_3.current.focus();
    }
  }
  // validate
  const validateDate = () => {
    const dayInt = parseInt(birthDay);
    const monthInt = parseInt(birthMonth);
    const yearInt = parseInt(birthYear);

    if (!birthDay || !birthMonth || !birthYear) {
      setError("This field is required");
      Init();
      return false;
    }

    const currentDate = new Date();
    const birthDate = new Date(yearInt, monthInt - 1, dayInt);

    if (birthDate > currentDate) {
      setError("The date cannot be in the future.");
      return false;
    }

    const daysInMonth = new Date(yearInt, monthInt, 0).getDate();
    if (dayInt < 1 || dayInt > daysInMonth) {
      setError(
        `Invalid day. ${monthInt}/${yearInt} only has ${daysInMonth} days.`
      );
      return false;
    }

    if (monthInt < 1 || monthInt > 12) {
      setError("Invalid month. Month should be between 1 and 12.");
      return false;
    }

    if (yearInt > currentDate.getFullYear() || yearInt < 1900) {
      setError("Please enter a valid year.");
      return false;
    }

    setError("");
    return birthDate;
  };
  // calculate age
  const calculateAge = (birthDate) => {
    const currentDate = new Date();
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths -= 1;
      ageDays += new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
    }

    if (ageMonths < 0) {
      ageYears -= 1;
      ageMonths += 12;
    }

    setAge({ years: ageYears, months: ageMonths, days: ageDays });
  };
  // handle form
  function handleSubmit(e) {
    e.preventDefault();
    if (!birthDay || !birthMonth || !birthYear) return;
    const birthDate = validateDate();
    if (birthDate) {
      calculateAge(birthDate);
    }
    setBirthDay("");
    setBirthMonth("");
    setBirthYear("");
  }
  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="input-box flex items-center md:mb-10 xs:mb-10"
    >
      <AgeInput
        handleFocus={handleFocus}
        LabelClassName="label"
        name="day"
        placeholder="DD"
        inputClassName="inputStyle"
        num="1"
        labelRef={labelRef_1}
        inputRef={inputRef_1}
        Error={Error}
        birthDate={birthDay}
        setBirthDate={setBirthDay}
        min={1}
        max={31}
      />
      <AgeInput
        handleFocus={handleFocus}
        name="month"
        placeholder="MM"
        inputClassName="inputStyle"
        LabelClassName="label"
        num="2"
        labelRef={labelRef_2}
        inputRef={inputRef_2}
        Error={Error}
        birthDate={birthMonth}
        setBirthDate={setBirthMonth}
        min={1}
        max={12}
      />
      <AgeInput
        handleFocus={handleFocus}
        LabelClassName="label"
        name="year"
        placeholder="YYYY"
        inputClassName="inputStyle"
        num="3"
        labelRef={labelRef_3}
        inputRef={inputRef_3}
        Error={Error}
        birthDate={birthYear}
        setBirthDate={setBirthYear}
        min={1900}
        max={new Date().getFullYear()}
      />
      <button type="submit">
        {" "}
        <img
          src="./assets/images/icon-arrow.svg"
          alt="icon arrow"
          className=" bg-Purple rounded-full  absolute z-10  xs:h-[2.75rem] xs:w-[2.75rem] xs:p-3 xs:transform xs:translate-x-[-50%]  xs:left-[50%]
xs:bottom-[8rem]

    hover:bg-Offblack cursor-pointer
    md:h-[3.75rem] md:w-[3.65rem]
    md:p-[0.85rem] 
    md:translate-y-[-42%]
    md:top-[42%]


lg:translate-y-[-36.33%]
lg:top-[36.33%]
lg:left-[32rem]


    "
        />
      </button>
    </form>
  );
};

export default AgeForm;
