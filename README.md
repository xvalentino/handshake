# Basic stack for Handshake

## Server

Created with [graphcool](https://www.graph.cool/)

### Why?

- GraphQL server
- Takes care of bootstrapping database models
- can take care of the basics easily.

### Running

To run the server locally you must deploy a new version of the server after each change. You can deploy to the GraphCool cloud or locally.

```bash
cd server
yarn graphcool deploy
```

From the server you can also run the playground to see what your server looks like

```bash
yarn graphcool playground
```

## Client

Using [create-react-app](https://github.com/facebook/create-react-app)

### Why?

- I like React
- CRA gets things going quick
- I like parcel better but CRA has stuff like tests setup already and all that.

### Running

To run the front end:

```bash
cd client
yarn start
```

Also make sure that client/App.js has the right uri for the apollo client. this will need to match your "simple" enpoint you get after running `graphcool deploy` from the server.

Thats it!
