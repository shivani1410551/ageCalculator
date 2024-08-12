const AgeInput = ({
  LabelClassName,
  name,
  placeholder,
  labelRef,
  inputClassName,
  inputRef,
  Error,
  birthDate,
  setBirthDate,
  handleFocus,
  num,
}) => {
  return (
    <div className="input-block">
      <label htmlFor={name} className={`${LabelClassName}`} ref={labelRef}>
        {name}
      </label>{" "}
      <br />
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        className={`${inputClassName}`}
        ref={inputRef}
        onClick={() => handleFocus(num)}
        value={birthDate}
        onChange={(e) => setBirthDate(Number(e.target.value))}
      />{" "}
      <br />
      {Error && <span className="error">{Error}</span>}
    </div>
  );
};

export default AgeInput;
