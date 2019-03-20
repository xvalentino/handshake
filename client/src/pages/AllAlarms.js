import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Text from "mineral-ui/Text";
import NewAlarm from "../components/NewAlarm";
import Alarm from "../components/Alarm";

export const ALL_ALARMS = gql`
  {
    allAlarms(orderBy: createdAt_DESC) {
      id
      text
      createdAt
    }
  }
`;

export const AllAlarms = () => {
  return (
    <>
      <Text>Alarms</Text>
      <NewAlarm />
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
                <Alarm key={alarm.id} alarm={alarm} />
              ))}
            </ul>
          );
        }}
      </Query>
    </>
  );
};
