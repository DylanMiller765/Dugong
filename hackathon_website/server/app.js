const express = require("express");
const { OpenAI } = require('openai');

const app = express();
app.use(express.json()); // To parse JSON bodies

const PORT = process.env.PORT || 8080;

// Initialize OpenAI with your API key
const openai = new OpenAI({ apiKey: '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' });

// Add CORS headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Endpoint to handle chat requests
app.post("/chat", async (req, res) => {
    try {
        // Get the user message from the request body
        const userMessage = req.body.message;

        // Call OpenAI GPT-3 API to generate a response
        const completion = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "change the location code (ISO STANDARD) depending on what cities the user wants to go to and change the date of the link depending on when they want their flight (year is assumed to be 2024 unless specified) (only give me back the modified link with no extra messages before or after): https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2024-05-02&adults=1&nonStop=false&max=4" },
                { role: "user", content: userMessage } // Use the user's message
            ],
            model: "gpt-3.5-turbo",
        });

        // Send the response back to the client
        res.send(completion.choices[0].message.content);
    } catch (error) {
        console.error("Error during chat:", error);
        res.status(500).send("An error occurred while generating a response.");
    }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));