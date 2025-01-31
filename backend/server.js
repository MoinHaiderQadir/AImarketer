const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/predict", (req, res) => {
    const { impressions, clicks, adSpend, city, profession, platform } = req.body;

    // Call Python AI model using child_process
    const path = require("path");

const pythonProcess = spawn("python", [path.join(__dirname, "../ai-model/model.py"), impressions, clicks, adSpend, city, profession, platform]);


    let output = "";

    pythonProcess.stdout.on("data", (data) => {
        output += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
        console.error(`Error: ${data}`);
    });

    pythonProcess.on("close", (code) => {
        if (code === 0) {
            res.json({ prediction: output.trim() });
        } else {
            res.status(500).json({ error: "AI model failed to execute" });
        }
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
