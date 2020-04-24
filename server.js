const http = require("http");
const app = require("../carnival/backend/app");
const debug = require("debug")("node-angular");

//normalize Port
const normalizePort = val => {
  var port = parseInt(val > 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
//onError
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe" + addr : "port " + port;

  switch (error.code) {
    case "EACCES":
      console.log("requires elavated privilege");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.log(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};
//onListening
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe" + addr : "port " + port;
  debug("Listening on" + bind);
};

const port = normalizePort(process.env.port || "5000");
app.set("port", port);
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port);
