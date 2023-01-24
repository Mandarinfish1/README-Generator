
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


const licenseLinks = {
  'GNU General Public License v3.0':'[![license](https://img.shields.io/badge/License-GNU-brightgreen.svg)](https://opensource.org/licenses/GPL-3.0)',
  'MIT':'[![license](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)',
  'BSD 2-Claus Simplified License':'[![License](https://img.shields.io/badge/License-BSD%202-brightgreen.svg)](https://opensource.org/licenses/BSD-2-Clause)',
  'BSD 3-Claus New or Revised License':'[![License](https://img.shields.io/badge/License-BSD%203-brightgreen.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'GNU Affero General Public License v3.0':'[![License](https://img.shields.io/badge/License-GNU%20Affero%20General%20Public%20License%20v3.0-brightgreen.svg)](https://opensource.org/licenses/AGPL-3.0)',
  'GNU General Public License v2.0':'[![License](https://img.shields.io/badge/License-GPL--2.0-brightgreen.svg)](https://opensource.org/licenses/GPL-2.0)',
  'GNU Lesser General Public License v2.1':'[![License](https://img.shields.io/badge/License-GNU%20Lesser%20General%20Public%20License%20v2.1-brightgreen.svg)](https://opensource.org/licenses/LGPL-2.1)',
  'Mozilla Public License 2.0':'[![License](https://img.shields.io/badge/License-MPL--2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'The Unlicense':'[![License](https://img.shields.io/badge/License-Unlicensed-brightgreen.svg)](https://opensource.org/licenses/unlicense)',
  };
    

function askUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the Title of your Project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does your project have?',
      choices: [
        'GNU General Public License v3.0',
        'MIT',
        'BSD 2-Claus Simplified License',
        'BSD 3-Claus New or Revised License',
        'Apache 2.0',
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
      name: 'installLink1',
      message: 'Do you need to add a link to help with installing and running your project?',
    },
    { type: 'input',
      name: 'installationLink2',
      message: 'Do you need to add a second link to help with intalling and running your project?',
  },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information for your project?',
    },
    {
      type: 'input',
      name: 'screenshot1',
      message: 'Is there a screenshot to demo? Please add here:',
    },
    {
      type: 'input',
      name: 'screenshot2',
      message: 'Is there another screenshot to demo? Plese add here:',
    },
    {
      type: 'input',
      name: 'screenshot3',
      message: 'Do you need to add a screenshot of the completed Project? Please add here:',
    },
    {
      type: 'input',
      name: 'video',
      message: 'Is there video you would like to add? Please add here:',
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
      name: 'url',
      message: 'Link to README Github Repository?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the test instructions for your project?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'profile',
      message: 'What is your Github Profile link?',
    },
  ]);
}
 

const generateReadMe = ({ title, license,description,  installation, installLink1, installLink2, usage, screenshot1, screenshot2, screenshot3, video,contributing, credit, reference, url, test, email, username,  profile,   }) =>


`# Title

${title}

## License

${licenseLinks[license]}


## Description

- ${description}

## Table of Contents
- [Title](#title)
- [License](#license)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [Credits](#credits)
- [Reference](#reference)
- [Test Instructions](#test-instructions)
- [Completed Project Link](#completed-project-link)
- [Questions](#questions)

## Installation

- ${installation}
- ${installLink1}
- ${installLink2}

## Usage

- ${usage}

## Demo

- ${screenshot1}
- ${screenshot2}
- ${screenshot3}
- ${video}

## Contributing

- ${contributing}

## Credits

- ${credit}

## Reference

- ${reference}

## Test Instructions

- ${test}

## Completed Project Link

- ${url}

#  Questions

- If you have questions, I can be reached by:
- Email @ ${email}
- Github Username: ${username}
- Github Profile Link: ${profile}`;



const init = () => {
  askUser()
    .then((answers) => writeFile('README.md', generateReadMe(answers)))
    .then(() => console.log('README.md file has been created!'))
    .catch((err) => console.error(err));
}



init();



