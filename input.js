let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;

  

};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('process exitor')
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up")
  }

  if (key === 'd') {
    connection.write("Move: right")
  }

  if (key === 's') {
    connection.write("Move: down")
  }

  if (key === 'a') {
    connection.write("Move: left")
  }
}

module.exports = setupInput
