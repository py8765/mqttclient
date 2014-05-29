var mqtt = require('mqtt')

client = mqtt.createClient(3010, 'localhost');

client.subscribe('presence');
client.publish('presence', 'Hello mqtt');

client.on('message', function (topic, message) {
  console.log(message);
});