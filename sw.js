self.addEventListener('push', event => {
  if (event.data) {
    console.log('got event with data:', event.data.text())
  } else {
    console.log('got event with no data.')
  }
})
