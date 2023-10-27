import { Input } from "@chakra-ui/react";

export const InputForm = (props) => {
  const { placeholder, value, onChange, bg } = props;

  return (
    <div>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        bg={bg}
      />
    </div>
  );
};
