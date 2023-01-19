

const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const askUser = () => {
  return inquirer.prompt ([
  {
    type: 'input',
    name: 'title',
    message: 'What is the Title of your Project?',
  },
  { 
  type: 'list',
  name: 'license',
  message: 'What license does your project have?',
  choices:  
    ['GNU General Public License v3.0',
    'MIT License',
    'BSD 2-Claus Simplified License',
    'BSD 3-Claus New or Revised License',
    'Boost Software License 1.0',
    'Creative-Commons Zero v1.0 Universal',
    'Eclipse Public License 2.0',
    'GNU Affero General Public License v3.0',
    'GNU General Public License v2.0',
    'GNU Lesser General Public License v2.1',
    'Mozilla Public License 2.0',
    'The Unlicense'],
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
 
const generateReadMe = ({ title, license, description, installation, usage, contributing, credit, reference, test, demo, url, email, username, profile,  }) =>

`# Title
${title}

## License

<span class="badge text-bg-primary">${license}</span>

## Description

- ${description}

## Table of Contents
- [Title](#title)
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [credits](#credits)
- [Test instructions](#test-instructions)
- [links for project](#links-for-project)
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
- Github Profile link: ${profile}


<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>README Generator</title>
  </head>
<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>`;

const init = () => {
  askUser()
    .then((answers) => writeFile('README.md', generateReadMe(answers)))
    .then(() => console.log('README.md file has been created!'))
    .catch((err) => console.error(err));
};

init();


