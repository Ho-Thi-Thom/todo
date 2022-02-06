const Input = ({ value, onChange }) => {
  return (
    <input
      placeholder="enter text"
      autoFocus
      value={value.value}
      className="input"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default Input;
