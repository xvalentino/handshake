import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Text from "mineral-ui/Text";

const ALL_ALARMS = gql`
  {
    allAlarms {
      id
      text
    }
  }
`;

export default () => {
  return (
    <>
      <Text>Alarms</Text>
      <Query query={ALL_ALARMS}>
        {result => {
          if (result.loading || !result.data) {
            return <div>loading...</div>;
          }
          if (result.error) {
            return <div>there was an error</div>;
          }
          return (
            <ul>
              {result.data.allAlarms.map(alarm => (
                <Text element="li" key={alarm.id}>
                  {alarm.id} -- {alarm.text}
                </Text>
              ))}
            </ul>
          );
        }}
      </Query>
    </>
  );
};
