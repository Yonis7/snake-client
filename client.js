const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (data) => {
    console.log(data)
  });

  conn.on("connect", () => {
    console.log('Connection successful')
    conn.write(`Name: YA7`)
  })

  return conn;
};



module.exports = connect