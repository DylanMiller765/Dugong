require('dotenv').config();


const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Define regular expression patterns
const cheapestFlightPattern = /cheapest\s*flight\s*to\s*(\w+)\s*from\s*(\w+)\s*to\s*(\w+)/i;
const fastestFlightPattern = /fastest\s*flight\s*to\s*(\w+)\s*from\s*(\w+)\s*to\s*(\w+)/i;
const directFlightPattern = /direct\s*flight\s*to\s*(\w+)\s*from\s*(\w+)\s*to\s*(\w+)/i;
// Add more patterns as needed for different query types

// Middleware
app.use(bodyParser.json());

// Define your OpenAI API key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Define your Amadeus API credentials
const AMADEUS_API_KEY = process.env.AMADEUS_API_KEY;


// Route to handle incoming chat messages
app.post('/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        let destination, departureDate, returnDate;
      
        // Parse user input based on different query patterns
        if (cheapestFlightPattern.test(userMessage)) {
            const match = cheapestFlightPattern.exec(userMessage);
            destination = match[1];
            departureDate = match[2];
            returnDate = match[3];
        } else if (fastestFlightPattern.test(userMessage)) {
            const match = fastestFlightPattern.exec(userMessage);
            destination = match[1];
            departureDate = match[2];
            returnDate = match[3];
        }
        // Add more conditions to handle other query patterns

        // Call OpenAI GPT API to generate response
        const generatedResponse = await interactWithChatGPT(userMessage);

        // Search for flights using Amadeus API
        const flights = await searchFlights(destination, departureDate, returnDate);

        // Send the generated response and flight options back to the client
        res.json({ response: generatedResponse, flights });

    } catch (error) {
        console.error('Error handling chat message:', error);
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Server responded with status:', error.response.status);
            console.error('Error details:', error.response.data);
            res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received from server');
            res.status(500).json({ error: 'No response received from server' });
        } else {
            // Something else went wrong
            console.error('Error processing request:', error.message);
            res.status(500).json({ error: 'Error processing request' });
        }
    }
    
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Function to interact with ChatGPT API
const MAX_RETRIES = 3;
let retries = 0;

async function interactWithChatGPT(message) {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const chatGPTResponse = response.data.choices[0].message.content;
        return chatGPTResponse;
    } catch (error) {
        if (error.response && error.response.status === 429 && retries < MAX_RETRIES) {
            retries++;
            console.warn(`Rate limited by OpenAI API. Retrying (${retries}/${MAX_RETRIES})...`);
            await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
            return interactWithChatGPT(message);
        } else {
            console.error('Error interacting with ChatGPT API:', error);
            throw new Error('Error interacting with ChatGPT API');
        }
    }
}

// Function to search for flights using Amadeus API
async function searchFlights(destination, departureDate, returnDate) {
    try {
        // Make a request to the Amadeus API to search for flights
        const response = await axios.get('https://api.amadeus.com/v2/flights', {
            params: {
                destination,
                departureDate,
                returnDate,
                apikey: AMADEUS_API_KEY
            }
        });

        // Extract flight information from the response
        const flights = response.data;

        return flights;
    } catch (error) {
        console.error('Error searching for flights:', error);
        throw new Error('Error searching for flights');
    }
}
