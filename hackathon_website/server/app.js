const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server Started!"));

const items = [
    {
        name: "laptop",
        price: 323
    },

    {
        name: "Derek",
        price: 0
    },
];

app.get("/api/items", (req, res) => {
    res.send(items);
})

