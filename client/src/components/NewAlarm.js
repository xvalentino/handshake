import React, { useState } from "react";
import Text from "mineral-ui/Text";
import TextInput from "mineral-ui/TextInput";
import Button from "mineral-ui/Button";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { ALL_ALARMS } from "../pages/AllAlarms";

const CREATE_ALARM = gql`
  mutation createAlarm($text: String!) {
    createAlarm(text: $text) {
      id
      text
      createdAt
    }
  }
`;

export default () => {
  const [text, setText] = useState("");
  return (
    <Mutation
      mutation={CREATE_ALARM}
      update={(cache, { data: { createAlarm } }) => {
        const { allAlarms } = cache.readQuery({ query: ALL_ALARMS });
        cache.writeQuery({
          query: ALL_ALARMS,
          data: { allAlarms: [createAlarm, ...allAlarms] }
        });
      }}
    >
      {createAlarm => (
        <div>
          <Text element="label">Create new alarm</Text>
          <TextInput
            value={text}
            onChange={event => setText(event.target.value)}
          />
          <Button
            onClick={() => {
              createAlarm({ variables: { text } });
              setText("");
            }}
          >
            Save
          </Button>
        </div>
      )}
    </Mutation>
  );
};
