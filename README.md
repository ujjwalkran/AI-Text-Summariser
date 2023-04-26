# AI-Text-Summariser

This is a web application built using React.js that utilizes the OpenAI API through RapidAPI to summarize large blocks of text into shorter, more manageable chunks. It also allows users to save the history of their previous requests and includes a copy button to easily copy the summary to the clipboard. 


## Technologies Used

- React.js
- OpenAI API through RapidAPI
- Vite
- Tailwind CSS
- Redux Toolkit


## Requirements

- Node.js v14.x or higher
- npm


## Installation

1. Clone the repository:<br/>
   git clone https://github.com/ujjwalkran/AI-Text-Summariser.git
 
2. Install the required packages: <br/>
   npm install

3. Create a RapidAPI account and subscribe to the OpenAI API.
4. Create a `.env` file in the root of the project and add your RapidAPI key:<br/>
   REACT_APP_RAPIDAPI_KEY = YOUR_API_KEY_HERE
   
5. Start the development server:<br/>
   npm run dev


## Usage

To use the AI-Text-Summariser, open a web browser and navigate to `http://localhost:3000`. Enter the URL of the article or text you wish to summarize and click the "Summarize" button. The summary will be displayed on the page, along with the option to copy it to the clipboard. The application will also save a record of the previous requests in the history section.

The website can also be viewed on Netlify at https://articlesummariser.netlify.app.


## Customization

The application can be customized by adjusting various parameters in the `src/config.js` file, such as the maximum length of the summary and the maximum number of previous requests to display in the history section.


## Acknowledgements

This project was inspired by the need for a simple and efficient way to summarize large blocks of text and was developed using the OpenAI API through RapidAPI.




