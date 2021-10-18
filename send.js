const webpush = require('web-push')

const pushSubscription = {
  endpoint:
    'https://fcm.googleapis.com/fcm/send/fbVKJxh9lK8:APA91bGRgD4P5STXAYFe2M-_Ta82Cg94qlqNfioWeOiy5FOyH7L7mO58tauQVwbgnWcQSxUYX_c8yzh5pZieFm4z8iQCzNkqYdtqNYyEM5fRwyTKJAe9slZxhZCaG3-U6xKU6fzRWxoy',
  keys: {
    p256dh:
      'BN1T9oElzY4GT098pzSqbNJd3w5RQ6SaE5b0XKJFvtZjAKg_qBCVIv78EG3m-SgfR4rjuFePg5cL6RDJmV-grg4',
    auth: '5B9zGnum1zRv3xwOPk0ZTA'
  }
}

const payload = 'xyz'

const options = {
  vapidDetails: {
    subject: 'http://localhost:7070',
    publicKey:
      'BFE7oTCWpTrF0LBYrRDdguCN11btI2vLoiL8opl0VcU7kUqBrV13yZFVVkmObsRXOXgTQnjClXLUZjNjq5fZGSQ',
    privateKey: '71_Ym_LhvCXua4o293kviE-akPyjUci8dhqhJhF8d4c'
  }
}

webpush.sendNotification(pushSubscription, payload, options)
