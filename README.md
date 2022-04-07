## example-gateway-subscriptions

The purpose of this is to show that Apollo Federation can use websockets, this was based
on `apollo-federation-tools` but the module is out of date, and this works with apollo server ^0.48.x

To use:

```
docker compose up
```

Open two browser windows one to localhost:3000 and one to localhost:3000/post and test away to see
messages get updated in real time

See: `https://github.com/reduxdj/apollo-gateway-subscription` for more info.
