// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses, /*gitHubUserUrl, licenseSpdxID, licenseName*/) {

  const draftMarkdown = `
# ${userResponses.title}
![License: ${userResponses.license}](https://img.shields.io/github/license/${userResponses.username}/${userResponses.repo}?color=yellow)
![Last Commit to Current Repo](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo})
![Commits a month](https://img.shields.io/github/commit-activity/m/${userResponses.username}/${userResponses.repo})
${userResponses.about}
## Table of Contents 📃
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technology](#technology)
5. [Features](#features)
6. [Contribution](#contribution)
7. [Tests](#tests)
8. [Credits](#credits)
9. [License](#license)
9. [Questions](#questions)
## Description
${userResponses.description}
### User Story 👤
${userResponses.userStory}
### What did I Learn 🏫
${userResponses.lessons}
## Installation
The steps to install the application are as follows:
${userResponses.installation}
## Usage
${userResponses.usage}
## Technology
Consider using badges from either [shields.io](https://shields.io/) or [Awesome Badges](https://dev.to/envoy_/150-badges-for-github-pnk#skills) to show of your tech used in a visual way 📛
The technology used for the development of this app was:
${userResponses.technology}
## Features
${userResponses.features}
## Contribution
${userResponses.contribution}
## Tests
${userResponses.tests}
## Credits
🙏 Made with the help of:
${userResponses.credits}
## License
![License: ${userResponses.license}](https://img.shields.io/github/license/${userResponses.username}/${userResponses.repo}?color=yellow)
[${userResponses.license}](/LICENSE)
## Questions
![Ask Me Anything](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)
${userResponses.username}"
GitHub: [${userResponses.username}](https://github.com/${userResponses.username})
Any feedback please email: [${userResponses.fullName}](mailto:${userResponses.email})
`;


  return draftMarkdown;

}

module.exports = generateMarkdown;
