import { Configuration, OpenAIApi } from "openai";
import epicData from '../../prompts_data/epics_stories.json';
import appData from '../../prompts_data/svc_app_bp.json';
import usageData from '../../prompts_data/usage.json';
import developerData from '../../prompts_data/developers.json';
import pastWorkData from '../../prompts_data/past_story_data.json';
import sprintData from '../../prompts_data/sprintresults.json';


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
   
    let prompt2 = ` 
    Given that you are a representive of a large brokerage offering invesment options for millennials
    that speak to causes and beliefs they might hold. There are two known causes Green_Energy (represented as green energy or Green Energy) and
    Affordable_Housing represented as "affordable housing" or affordable housing"

    and given this prompt
    ${capitalizedPrompt}

    return a comma-separated string buttressed by == on both sides that represents a list of causes this user is talking about 
    and ask the user if they are interested in pursuing investments about the other cause.
 
    

  `;
    console.log(prompt2);
    return prompt2;
}
