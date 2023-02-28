// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ![${data.altText}](./screenshots/${data.screenshots})


  ## License:
  ${data.license}  
  

  ## Credits:
  ${data.credits}


  ## Report Issues:
  If you need to report any issues with the application, write to the email:\n
  ${data.email}


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
