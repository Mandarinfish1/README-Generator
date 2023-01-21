
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

//const badge = require('./createBadge');

const askUser = () => {
  return inquirer.prompt ([
  {
    type: 'input',
    name: 'title',
    message: 'What is the Title of your Project?',
  },
  { 
  type: 'list',
  name: 'badge',
  message: 'What license does your project have?',
  choices: 
["GNU : (https://img.shields.io/badge/License-GNU-brightgreen.svg)](https://opensource.org/licenses/GPL-3.0)",
"MIT : (https://img.shields.io/ badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)"],
//"['GNU General Public License v3.0',
    //'BSD 2-Claus Simplified License',
    //'BSD 3-Claus New or Revised License',
    //'GNU Affero General Public License v3.0',
    //'GNU General Public License v2.0',
    //'GNU Lesser General Public License v2.1',
    //'Mozilla Public License 2.0',
   // 'The Unlicense'],
},
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your Project?',
  },
  { 
   type: 'input',
   name: 'installation',
   message: 'What are the installation instructions for your project?',
  },
  {
   type: 'input',
   name: 'usage',
   message:'What is the usage information for your project?',
  },
  { 
  type: 'input',
  name: 'demo',
  message:  'Is there a link to a Demo?',
  },
  {
  type: 'input',
  name: 'contributing', 
  message: 'What are the contribution guidelines for your project?',
 },
 {
  type: 'input',
  name: 'credit',
  message: 'Are there any collaborators for your project?',
 },
 {
 type: 'input',
 name: 'reference',
 message: 'Are there any reference materials or reference links you used for your project?',
 },
 {
  type: 'input',
  name: 'test',
  message: 'What are the test instructions for your project?',
},
{
  type: 'input',
  name: 'username',
  message: 'What is your Github username?',
},
{ 
  type: 'input',
  name: 'email',
  message:  'What is your email address?',
  },
  { 
  type: 'input',
  name: 'url',
  message:  'Link to README Github Repository?',
  },
  { 
  type: 'input',
  name: 'profile',
  message:  'What is your Github Profile link?',
  },
 ]);
};
 


const generateReadMe = ({ title, badge, description, installation, usage, contributing, credit, reference, test, demo, url, email, username, profile,  }) =>


`# Title

${title}

## License

${badge}

## Description

- ${description}

## Table of Contents
- [Title](#title)
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [Test instructions](#test-instructions)
- [Link to project](#link-to-project)
- [Questions](#questions)

## Installation

- ${installation}

## Usage

- ${usage}

## Demo

- ${demo}


## contributing

- ${contributing}

## credits

- ${credit}

## Reference

-${reference}


## Test instructions

- ${test}

## Link to project

- ${url}

#  Questions

- If you have additional questions, I can be reached by email at: ${email}.
- Github username: ${username}
- Github Profile link: ${profile}`


const init = () => {
  askUser()
    .then((answers) => writeFile('README.md', generateReadMe(answers)))
    .then(() => console.log('README.md file has been created!'))
    .catch((err) => console.error(err));
}

init();



