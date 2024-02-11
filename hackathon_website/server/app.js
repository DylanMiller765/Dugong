const express = require("express");
const { OpenAI } = require('openai');

const app = express();
app.use(express.json()); // To parse JSON bodies

const PORT = process.env.PORT ||  8080;

// Initialize OpenAI with your API key
const openai = new OpenAI({ apiKey: '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' });

// Start the server

// Add this to your server setup code
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
  
// Endpoint to handle chat requests
app.post("/chat", async (req, res) => {
  try {
    // const userMessage = req.body.message;

    // Call OpenAI GPT-3 API to generate a response
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "what is 1+1" }
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


