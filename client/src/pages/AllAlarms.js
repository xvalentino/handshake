import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Text from "mineral-ui/Text";
import NewAlarm from "../components/NewAlarm";
import Alarm from "../components/Alarm";
import _ from "underscore";
import moment from "moment";

const smartSort = alarms => {
  // upvote vs how new it is
  _.sortBy(alarms, alarm => {
    const createdAt = moment()
      .from(alarm.createdAt)
      .valueOf();
    const now = moment().fromNow();
    console.log(now, createdAt);
    const timeSince = now - createdAt;
    return timeSince / -alarm.vote;
  });
  return alarms;
};

export const ALL_ALARMS = gql`
  {
    allAlarms(orderBy: createdAt_DESC) {
      id
      text
      createdAt
      vote
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
          const alarms = smartSort(result.data.allAlarms);
          return (
            <ul>
              {alarms.map(alarm => (
                <Alarm key={alarm.id} alarm={alarm} />
              ))}
            </ul>
          );
        }}
      </Query>
    </>
  );
};
