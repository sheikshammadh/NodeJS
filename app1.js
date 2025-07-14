// server.js
import express from 'express';
import morgan from 'morgan';
import router from './Routes/empRouter.js';  // Make sure this path is correct

const app = express();
const host = '127.0.0.1';
const port = 8080;

// ───────────── Middlewares ─────────────
// Logs all HTTP requests
app.use(morgan('dev'));

// Parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// Parse JSON payloads (application/json)
app.use(express.json());

// ───────────── Routes ─────────────
// Root check
app.get("/", (req, resp) => {
  resp.json({ message: "Application Root Request" });
});

// Mount /emp router
app.use("/emp", router);

// ───────────── Start Server ─────────────
app.listen(port, host, (err) => {
  if (err) throw err
  console.log(`Server running at: http://${host}:${port}/`);
});
