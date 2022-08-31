import { TextInput } from "react-native";

interface Props {
  placeholder: string;
  secureTextEntry?: boolean;
  style: Object;
  autofocus?: boolean;
  submit(args: string): void;
}

export default function Input({
  placeholder,
  secureTextEntry,
  style,
  autofocus,
  submit,
}: Props) {
  return (
    <TextInput
      style={style}
      returnKeyType="done"
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoFocus={autofocus}
      enablesReturnKeyAutomatically={true}
      onChange={({ nativeEvent }) => {
        submit(nativeEvent.text);
      }}
      autoCapitalize="none"
    />
  );
}
