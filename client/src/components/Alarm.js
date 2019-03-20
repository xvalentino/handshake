import React from "react";
import Text from "mineral-ui/Text";
import Button from "mineral-ui/Button";
import styled from "@emotion/styled";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CREATE_ALARM = gql`
  mutation updateAlarm($id: ID!, $vote: Int!) {
    updateAlarm(id: $id, vote: $vote) {
      id
      text
      createdAt
      vote
    }
  }
`;

const StyledText = styled(Text)({
  textTransform: "uppercase"
});

export default ({ alarm }) => {
  return (
    <Mutation mutation={CREATE_ALARM}>
      {updateAlarm => {
        return (
          <StyledText element="li" key={alarm.id}>
            {alarm.id} -- {alarm.text} --- vote: {alarm.vote}
            <Button
              onClick={() =>
                updateAlarm({
                  variables: { id: alarm.id, vote: alarm.vote + 1 }
                })
              }
            >
              Upvote
            </Button>
          </StyledText>
        );
      }}
    </Mutation>
  );
};
