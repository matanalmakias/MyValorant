import cors from "cors";
import express from "express";
import morgan from "morgan";
import { connect } from "./db/connect.js";
import { notFound } from "./middleware/not-found.js";
import { authRouter } from "./routes/users.js";
import { Server } from "socket.io";
import nodeEvents from "./nodeEvents/nodeEvents.js";

// Start the cron job
const app = express();

//once app starts: connect to db: and fill the roles collection
connect().catch((e) => {
  console.log(e);
});

//middlewares:
app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(morgan("dev"));

//routes:
app.use("/api/auth", authRouter);

//404:
app.use(notFound);

const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () =>
  console.log(`HTTP server running on port ${PORT}`)
);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  },
});
// const io = socketio(server, {
//   cors: {
//     origin: `*`, // I copied the origin in the error message and pasted here
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

nodeEvents.on("update", () => {
  io.emit("update");
});
