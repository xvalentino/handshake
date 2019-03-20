const request = require("request");

export default async event => {
  const alarm_id = event.data.id;

  await request.post(
    "https://bellbird.joinhandshake-internal.com/push",
    { json: { alarm_id } },
    (error, response, body) => {
      console.log("response", response);
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }
  );

  return event;
};
