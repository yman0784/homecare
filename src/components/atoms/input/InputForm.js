import { Input } from "@chakra-ui/react";

export const InputForm = (props) => {
  const { placeholder, onChange, bg } = props;

  return (
    <div>
      <Input placeholder={placeholder} onChange={onChange} bg={bg} />
    </div>
  );
};
