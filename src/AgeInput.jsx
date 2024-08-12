const AgeInput = ({
  item,
  labelRef,
  inputRef,
  Error,
  birthDate,
  setBirthDate,
  handleFocus,
}) => {
  return (
    <div className="input-block">
      <label
        htmlFor={item.name}
        className={`${item.LabelClassName}`}
        ref={labelRef}
      >
        {item.name}
      </label>{" "}
      <br />
      <input
        type="text"
        name={item.name}
        id={item.name}
        placeholder={item.placeholder}
        className={`${item.inputClassName}`}
        ref={inputRef}
        onClick={() => handleFocus(item.num)}
        value={birthDate}
        onChange={(e) => setBirthDate(Number(e.target.value))}
      />{" "}
      <br />
      {Error && <span className="error">{Error}</span>}
    </div>
  );
};

export default AgeInput;
