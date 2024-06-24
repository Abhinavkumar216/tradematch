import {
  View,
  Text,
  DataDetectorTypes,
  KeyboardTypeOptions,
  TouchableOpacity,
} from "react-native";
import React, { Dispatch, SetStateAction, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { InputWrapper, CountryCode, InputStyle } from "../styles";
import { ThemeContext } from "styled-components/native";

type Props = {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  loading: boolean;
  placeholder: string;
  dataDetectorTypes?: DataDetectorTypes;
  keyboardType: KeyboardTypeOptions;
  maxLength: number;
  autoFocus?: boolean;
  editable?: boolean;
  children?: React.ReactNode;
};
const Input = ({
  value,
  onChange,
  loading,
  placeholder,
  dataDetectorTypes,
  keyboardType,
  maxLength,
  autoFocus,
  children,
  editable
}: Props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <InputWrapper>
      {children}
      <InputStyle
        placeholderTextColor={themeContext?.colors?.text + 80}
        placeholder={placeholder}
        dataDetectorTypes={dataDetectorTypes}
        keyboardType={keyboardType}
        cursorColor={themeContext?.colors?.text + 80}
        maxLength={maxLength}
        autoFocus={autoFocus}
        value={value}
        editable={editable ??  !loading}
        onChangeText={onChange}
      />
      {value && (
        <TouchableOpacity
          style={{ paddingHorizontal: 20 }}
          onPress={() => onChange("")}
        >
          <Ionicons
            name="close-circle-outline"
            size={26}
            color={themeContext?.colors?.text + 80}
          />
        </TouchableOpacity>
      )}
    </InputWrapper>
  );
};

export default Input;
