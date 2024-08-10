import { useState, useRef } from "react";
import AgeInput from "./AgeInput";
import Divider from "./Divider";
import OutputBlock from "./OutputBlock";
const App = () => {
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(null);
  const [Error, setError] = useState({
    birthDay: "",
    birthMonth: "",
    birthYear: "",
  });

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

  function validate(birthDay, birthMonth, birthYear) {
    //  if input field is empty
    if (!birthDay || !birthMonth || !birthYear) {
      setError("This field is required");
      Init();
      return;
    }
    // input validation
    let tempErrors = { birthDay: "", birthMonth: "", birthYear: "" };
    const parsedDay = parseInt(birthDay, 10);
    const parsedMonth = parseInt(birthMonth, 10);
    const parsedYear = parseInt(birthYear, 10);
    // Check if month is valid
    if (parsedMonth < 1 || parsedMonth > 12) {
      // setError("Must be a valid month.");
      tempErrors.birthMonth = "Must be a valid month.";
      return false;
    }
    // Check if day is valid considering different months and leap years
    const daysInMonth = new Date(parsedYear, parsedMonth, 0).getDate();
    if (parsedDay < 1 || parsedDay > daysInMonth) {
      // setError("Must be a valid day.");
      tempErrors.birthDay = "Must be a valid day.";

      return false;
    }
    // Check if year is reasonable (not in the future, not too old)
    const currentYear = new Date().getFullYear();
    if (parsedYear < 1900 || parsedYear > currentYear) {
      // setError("Must be in the past.");
      tempErrors.birthYear = "Must be in the past.";

      return false;
    }
    setError(tempErrors);
    setError(""); // Clear any previous error
    // return true if no errors
    return Object.values(tempErrors).every((x) => x === "");
  }
  // to focus on the input field
  const handleFocus = (inputNumber) => {
    if (inputNumber === 1) {
      inputRef_1.current.focus();
    } else if (inputNumber === 2) {
      inputRef_2.current.focus();
    } else if (inputNumber === 3) {
      inputRef_3.current.focus();
    }
  };
  //  calculate the age
  function calculateAge(day, month, year) {
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonth = currentDate.getMonth() - birthDate.getMonth();
    let ageDay = currentDate.getDate() - birthDate.getDate();

    if (ageDay < 0) {
      ageMonth--;
      ageDay += new Date(birthYear, birthMonth, 0).getDate();
    }
    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }
    return {
      year: ageYear,
      month: ageMonth,
      day: ageDay,
    };
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      const result = calculateAge(day, month, year);
      setAge(result);
    }
  }

  return (
    <div className="bg-Lightgrey min-h-screen flex items-center justify-center text-[32px] font-Poppins font-[poppins] xs:grid xs:place-content-center">
      <main className="bg-White md:p-10  relative rounded-t-2xl rounded-bl-2xl rounded-br-[8rem] shadow-md xs:p-4">
        <form
          action="#"
          onSubmit={handleSubmit}
          className="input-box flex items-center md:mb-10 xs:mb-10"
        >
          <AgeInput
            LabelClassName="label"
            name="day"
            placeholder="DD"
            inputClassName="inputStyle"
            labelRef={labelRef_1}
            inputRef={inputRef_1}
            Error={Error}
            birthDate={birthDay}
            setBirthDate={setBirthDay}
            num="1"
            handleFocus={handleFocus}
          />

          <AgeInput
            name="month"
            placeholder="MM"
            inputClassName="inputStyle"
            LabelClassName="label"
            labelRef={labelRef_2}
            inputRef={inputRef_2}
            Error={Error}
            birthDate={birthMonth}
            setBirthDate={setBirthMonth}
            num="2"
            handleFocus={handleFocus}
          />
          <AgeInput
            LabelClassName="label"
            name="year"
            placeholder="YYYY"
            inputClassName="inputStyle"
            labelRef={labelRef_3}
            inputRef={inputRef_3}
            Error={Error}
            birthDate={birthYear}
            setBirthDate={setBirthYear}
            num="3"
            handleFocus={handleFocus}
          />
        </form>

        <Divider calculateAge={calculateAge} />

        <div className="output-box md:-mt-4 xs:-mt-3">
          <OutputBlock className="year-output-block " text="years" age={age} />
          <OutputBlock
            className="month-output-block "
            text="months"
            age={age}
          />
          <OutputBlock className="days-output-block " text="days" age={age} />
        </div>
      </main>
    </div>
  );
};

export default App;
