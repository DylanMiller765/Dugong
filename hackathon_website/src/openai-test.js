const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: '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' });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "what is 1+1" }
    ],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0].message.content); // Assuming you want to log the response
}
main();
