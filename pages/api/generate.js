import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  //basePath: 'https://kraaang.openai.azure.com/'
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const prompt = req.body.prompt || '';
  if (prompt.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid question",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo-instruct-0914",
      prompt: generatePrompt(prompt),
      temperature: 0.6,
      max_tokens: 500,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(1100).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(prompt) {
  const capitalizedPrompt =
    prompt[0].toUpperCase() + prompt.slice(1).toLowerCase();
   
    let prompt2 = `Take on the persona of a personal digital assistant named Noob. Your job is take input from the user and choose one or more of the following areas of input and return what they might be interested in. 

            Green_Energy,
            Affordable_Housing,
            Microfinance,
            Regenerative_Agriculture,
            Education,
            Gender_Equality,
            Healthcare,
            Clean_Technology,
            Social_Enterprises,
            Animal_Wellness


    and given this prompt
    ==Regenerative_Agriculture, Clean_Technology==
    ${capitalizedPrompt}


    return a comma-separated string buttressed by == on both sides that represents a list of causes this user is talking about and ask the user if they are interested in pursuing investments about the other cause. If the prompt begins with a comma-separated string buttressed by == on both sides, include those causes in the response as well, adding or removing additional context from the prompt.
  `;
    console.log(prompt2);
    return prompt2;
}
