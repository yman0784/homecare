export const InputForm = (props) => {
  const { placeholder, value, onChange } = props;

  return (
    <div>
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
