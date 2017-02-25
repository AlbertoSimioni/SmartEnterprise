var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://147.162.226.101:30003')
console.log("eio")
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
  client.end()
})

client.on('connect', function () {
  client.subscribe('presence')
  client.publish('presence', 'Hello mqtt')
})
 

