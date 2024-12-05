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
   
    let prompt2 = `Do not introduce yourself. Your job is to take input and choose one or more of the following areas of input and return what they might be interested in: 

            Green_Energy,
            Affordable_Housing,
            Microfinance,
            Regenerative_Agriculture,
            Education,
            Gender_Equality,
            Healthcare,
            Clean_Technology,
            Social_Enterprises,
            Animal_Wellness.

 
    ${capitalizedPrompt}
     
    Return a comma-separated list that represents a list of causes related to the prompt.
    The list that is created should have "==" before and after.
    The list should only have distinct values.
   
    Also return, in paragraph form the following: 
    Explain why the selected causes from the list pertain to the prompt.
  `;
    console.log(prompt2);
    return prompt2;
}
