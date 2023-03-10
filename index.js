// TODO: Include packages needed for this application
// External modules
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// Internal modules
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
// Readme generator prompt questions
const readmeQuestions = [
    {
        type: 'input',
        message: 'What is your full name (example: Anastasia Markova)',
        name: 'fullName',
        default: 'Anastasia Markova',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        default: 'anastasia19markova@gmail.com',
        validate(email) {
            const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
            return emailRegEx.test(email) ? true : 'A valid email address is required';
        },
    },
    {
        type: 'input',
        message: 'What is your GitHub username? (example: mriya20)',
        name: 'username',
        default: 'mriya20',
        validate(username) {
            // checks if the username provided is a valid github username
            const gitHubUsernameRegEx = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
            return gitHubUsernameRegEx.test(username) ? true : 'A valid GitHub username is required';
        },
    },
    {
        type: 'input',
        message: 'What is the name of your GitHub repo? (so that the badges can work)',
        name: 'repo',
        default: 'README-Generator',
        validate(repo) {
            const gitHubRepoRegEx = /[\w-]+/i;
            return gitHubRepoRegEx.test(repo) ? true : 'A valid GitHub repo name is required';
        },
    },
    {
        type: 'input',
        message: 'What do you want the title of your README to be? (Must be 6 characters or longer)',
        name: 'title',
        default: 'Project title',
        validate(title) {
            return title.length > 5 ? true : 'Must be 6 characters or longer';
        },
    },
    {
        type: 'input',
        message: 'Write a short sentence explaining what your project does. (Must be 6 characters or longer)',
        name: 'about',
        default: 'What your project is about.',
        validate(about) {
            return about.length > 5 ? true : 'Must be 6 characters or longer';
        },
    },
    {
        type: 'input',
        message: 'Write a detailed description explaining what your project does. (Must be 6 characters or longer)',
        name: 'description',
        default: 'A description of your project.',
        validate(description) {
            return description.length > 5 ? true : 'Must be 6 characters or longer';
        },
    },
    {
        type: 'input',
        message: 'Write a user story section to further explain the need for your application.',
        name: 'userStory',
        default: 'A user story.',
    },
    {
        type: 'input',
        message: 'Write the main lessons you learned whilst making this project.',
        name: 'lessons',
        default: 'I learned many things.',
    },
    {
        type: 'input',
        message: 'Write installation steps that are required for your project',
        name: 'installation',
        default: 'Some lovely installation steps.',
    },
    {
        type: 'input',
        message: 'Write the instructions on how to use your application',
        name: 'usage',
        default: 'Some lovely instructions on how to use your application.',
    },
    {
        type: 'input',
        message: 'Write the list of technologies that were used in the construction of your application',
        name: 'technology',
        default: 'Some lovely tech that was used.',
    },
    {
        type: 'input',
        message: 'Write a list of features that are present in your application',
        name: 'features',
        default: 'Some lovely features.',
    },
    {
        type: 'input',
        message: 'Write a contribution guide for others seeking to edit the project',
        name: 'contribution',
        default: 'Some contribution guidelines.',
    },
    {
        type: 'input',
        message: 'Write down the tests available to test out your application',
        name: 'tests',
        default: 'Some tests here.',
    },
    {
        type: 'input',
        message: 'Write the groups or persons that helped make the project happen!',
        name: 'credits',
        default: 'My fantastic contributors, I love them',
    },
    {
        type: 'list',
        message: 'Choose a license for your application. (navigate using up & down arrow keys or k & jgit )',
        name: 'license',
        choices: [
            'afl-3.0',
            'apache-2.0',
            'artistic-2.0',
            'bsl-1.0',
            'bsd-2-clause',
            'bsd-3-clause',
            'bsd-3-clause-clear',
            'cc',
            'cc0-1.0',
            'cc-by-4.0',
            'cc-by-sa-4.0',
            'wtfpl',
            'ecl-2.0',
            'epl-1.0',
            'epl-2.0',
            'eupl-1.1',
            'agpl-3.0',
            'gpl',
            'gpl-2.0',
            'gpl-3.0',
            'lgpl',
            'lgpl-2.1',
            'lgpl-3.0',
            'isc',
            'lppl-1.3c',
            'ms-pl',
            'mit',
            'mpl-2.0',
            'osl-3.0',
            'postgresql',
            'ofl-1.1',
            'ncsa',
            'unlicense',
            'zlib',
        ],
    },
];



// TODO: Create a function to write README file
// Write users prompts to a file 
function writeToFile(fileName, markdownData) {
    fs.writeFile(fileName, markdownData, (err) => {
        if (err) return console.log(err);
        console.log(`Nice one! You've generated your lovely ${fileName} file!`);
    });
}

const writeFileAysnc = util.promisify(writeToFile);

// TODO: Create a function to initialize app
// Main executable async function
async function init() {
    try {
        const userResponses = await inquirer.prompt(readmeQuestions);
        console.log('Your responses: ', userResponses);
        console.log('Many thanks for the prompt responses! Fetching your github data');

        // Get the license data from the user prompt
        // const userLicenseData = await getLicense(userResponses.license);
        // console.log('Your license data: ', userLicenseData);


        // Pass the user prompt data and avatar link to the generateMarkdown func
        console.log('Generating your README text...');
        const readmeMarkdown = generateMarkdown(
            userResponses,
            // gitHubUserData.url,
            // userLicenseData.spdx_id,
            // userLicenseData.name
        );

        // Create the readme file
        await writeFileAysnc('ExampleREADME.md', readmeMarkdown);
    } catch (error) {
        console.log(error);
    }
}

// Function call to initialize app
init();
