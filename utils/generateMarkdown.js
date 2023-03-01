// function to generate markdown for README
function generateMarkdown(data) {
  var badge1, badge2;
  console.log("data.license: ", data.license[0]);
  switch (data.license[0]) {
    case 'GNU AGPLv3': {
      badge1 = 'License: AGPL v3'; 
      badge2 = 'https://img.shields.io/badge/License-AGPL_v3-blue.svg';
      break;
    }
    case 'GNU GPLv3': {
      badge1 = 'License: GPL v3';
      badge2 = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    }
    case 'GNU LGPLv3': {
      badge1 = 'License: LGPL v3';
      badge2 = 'https://img.shields.io/badge/License-LGPL_v3-blue.svg';
      break;
    }
    case 'Mozilla Public License 2.0': {
      badge1 = 'License: MPL 2.0';
      badge2 = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
      break;
    }
    case 'Apache License 2.0': {
      badge1 = 'License: Apache';
      badge2 = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      break;
    }
    case 'MIT License': {
      badge1 = 'License: MIT';
      badge2 = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    }
    case 'Boost Software License 1.0': {
      badge1 = 'License: Boost';
      badge2 = 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg';
      break;
    }
    case 'The Unlicense': {
      badge1 = 'License: Unlicense';
      badge2 = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
      break;
    }
      default:
        console.log("data.license not valid");
  }
  console.log("badge1, badge2: ", badge1, badge2);
  return `# ![${badge1}](${badge2})  ${data.title}

  ## Description:
  ${data.description}\n
  The application can be found deployed at:\n
  ${data.deployed}


  ## Table of Content:
  - [Installation](#installation)
  - [Usage](#usage)  
  - [License](#license)
  - [Credits](#credits)
  - [Report Issues](#reportIssues)
  - [Badges](#badges)
  - [Features](#features)
  - [Contribution](#contribution)
  - [Test](#test)


  ## Installation:
  ${data.installation}


  ## Usage:
  ${data.usage}\n
  Screenshots illustrating the application usage:\n
  ![${data.altText}](./images/${data.screenshots})


  ## License:
  ${data.license}  
  

  ## Credits:
  ${data.credits}


  ## Questions / Report Issues:
  If you need to report any issues with the application, or ask any questions, write to the email:\n
  ${data.email}\n
  or contact GitHub username profile:\n
  https://github.com/${data.github}


  ## Badges:
  ${data.badges}


  ## Features:
  ${data.features}


  ## Contribution:
  ${data.contribution}


  ## Test:
  ${data.test}
`;
}

module.exports = generateMarkdown;
