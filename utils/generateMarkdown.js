// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## ${data.contentTable}
  ## ${data.installation}
  ## ${data.usage}
  ## ${data.credits}
  ## ${data.license}
  ## ${data.badges}
  ## ${data.features}
  ## ${data.contribution}
  ## ${data.test}
`;
}

module.exports = generateMarkdown;
