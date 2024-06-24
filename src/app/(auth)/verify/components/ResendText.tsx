import moment from "moment";
import React from "react";
import { LogoSubHeading, Resendpin } from "../styles";

type Props = {
  timer: number;
  onPress: () => void;
};

const ResendText = ({ timer, onPress }: Props) => {
  const formattedTime = moment().minutes(0).seconds(timer).format("mm:ss");
  if (timer > 0) {
    return (
      <LogoSubHeading>
        Resend new OTP in {formattedTime} seconds.
      </LogoSubHeading>
    );
  } else {
    return (
      <LogoSubHeading>
        If you didn't receive it?{" "}
        <Resendpin onPress={onPress}>Resend</Resendpin>
      </LogoSubHeading>
    );
  }
};

export default ResendText;
