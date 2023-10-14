const express = require('express');
const port = 2000;

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
    res.send("GET request: Success");
});

app.post("/api", (req, res) => {
    res.send("POST request: Success");
});

app.put("/api", (req, res) => {
    res.send("PUT request: Success");
});

app.delete("/api", (req, res) => {
    res.send("DELETE request: Success");
});

const { userRouter } = require('./routers');
app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
