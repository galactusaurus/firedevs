import { Configuration, OpenAIApi } from "openai";
import epicData from '../../prompts_data/epics_stories.json';
import appData from '../../prompts_data/svc_app_bp.json';
import usageData from '../../prompts_data/usage.json';
import developerData from '../../prompts_data/developers.json';
import pastWorkData from '../../prompts_data/past_story_data.json';


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
      max_tokens: 1100,
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
   
    let prompt2 = ` 
    Given that KRAAANG stands for Kaleidoscopic Relationship and Application Analysis Assisted by Neural Generation

    and given the following developer data
    ${JSON.stringify(developerData)}

    and given this prompt
    ${capitalizedPrompt}
    adopt the persona of Krang from the Ninja Turtles and 
    return the result in html format wrapped in a div with a classname of answer
  `;
    console.log(prompt2);
    return prompt2;
}
