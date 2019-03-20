import React from "react";
import Text from "mineral-ui/Text";
import styled from "@emotion/styled";

const StyledText = styled(Text)({
  textTransform: "uppercase"
});

export default ({ alarm }) => {
  return (
    <StyledText element="li" key={alarm.id}>
      {alarm.id} -- {alarm.text}
    </StyledText>
  );
};
