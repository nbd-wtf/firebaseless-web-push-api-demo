const Buffer = require('buffer').Buffer

;(async function () {
  const registration = await navigator.serviceWorker.register('/sw.js')

  await registration.update()

  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      'BFE7oTCWpTrF0LBYrRDdguCN11btI2vLoiL8opl0VcU7kUqBrV13yZFVVkmObsRXOXgTQnjClXLUZjNjq5fZGSQ'
    )
  }

  const sub = await registration.pushManager.subscribe(subscribeOptions)

  console.log(JSON.stringify(sub.toJSON(), null, 2))
  console.log(
    'copy and paste the JSON above into send.js as the `pushSubscription` object.'
  )
  console.log('then call `node send.js` on your terminal.')
})()

function urlBase64ToUint8Array(b64) {
  return Uint8Array.from(Buffer.from(b64, 'base64'))
}
