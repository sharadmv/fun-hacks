var serialport = require('serialport');
var SerialPort = serialport.SerialPort;


exports.Serial = function(name) {
  var port = new SerialPort(name, {
      baudrate: 9600,
      parser: serialport.parsers.readline('\n')
  });

  port.on("open", function () {
    console.log('Serial port opened');
    port.on('data', function(data) {
      console.log(data.toString('ascii'))
    });
  });
}
