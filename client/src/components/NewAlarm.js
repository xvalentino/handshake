import React, { useState } from "react";
import Text from "mineral-ui/Text";
import TextInput from "mineral-ui/TextInput";
import Button from "mineral-ui/Button";

export default () => {
  const [text, setText] = useState("");
  return (
    <div>
      <Text element="label">Create new alarm</Text>
      <TextInput value={text} onChange={event => setText(event.target.value)} />
      <Button>Save</Button>
    </div>
  );
};
