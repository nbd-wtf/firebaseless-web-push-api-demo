# How to use:

```
yarn # or npm install
make # will put built files under /out
cd out
python -m http.server 7070
# open browser on http://localhost:7070
```

## How it works

This is just an example that looks very bad, but it works. Everything is hardcoded like no one should ever do.

This uses the Web Push API without the aid of confusing Firebase libraries and registrations and API access keys.

The server needs a private and a public key. These can be generated with:

```
./node_modules/.bin/web-push generate-vapid-keys
```

Take these and put them on `send.js`. They will be used by the `web-push` library to encrypt push messages sent to the browser.

After that, as the user opens the web page and makes the `PushManager.subscribe()` call, it will get an URL in return and a public key and another secret. These must then be passed to the server somehow (here the `send.js` script) so they can feed them to the `web-push` library.

Internally the `web-push` library encrypts the payload and then calls the HTTP endpoint given to the user by the browser (for example, on Google Chrome the endpoint is `https://fcm.googleapis.com/fcm/send/something`, other browsers will have other URLs).

Since it's an open web standard we don't have to ask Firebase for access.
