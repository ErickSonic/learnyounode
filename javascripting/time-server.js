const net = require('net')
const tcp = process.argv[2]

function zeroPad(number) {
  if(number <10){
    return '0' + number
  }
  return number
}

let server = net.createServer(function (socket) {
  let date = new Date();
  
  let year   = date.getFullYear();
  let month  = zeroPad(date.getMonth() + 1);
  let day    = zeroPad(date.getDate());
  let hour   = zeroPad(date.getHours());
  let minute = zeroPad(date.getMinutes());
  
  let dateString = year + '-' + month + '-' + day;
  dateString = dateString + ' ' + hour + ':' + minute;
  
  socket.end(dateString + '\n');
});

server.listen(tcp); 