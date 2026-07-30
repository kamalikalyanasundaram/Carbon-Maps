import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Carbon Maps API running");
});

app.post("/save-trip", (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

app.listen(5001, () => console.log("Server running on port 5001"));
