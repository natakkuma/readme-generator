//Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

//Link to Readme Markdown
const generateMarkdown = require('./utils/generateMarkdown.js');

//QUESTION ARRAY for User Input to include:
    //title of project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    //choose a license for my application from a list of options
    //GitHub username is entered and added to the section of the README entitled Questions, with a link to my GitHub profile
    //Email address is entered and added to the section of the README entitled Questions, with instructions on how to reach me with additional question
    //links in Table of Contents corresponds to sections of the README
const questions = [

    //Project Title 
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the project title. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project title!')
                return false;
            }
        }
    },

    //Description Section
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the project description. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project description!')
                return false;
            }
        }
    },

    //Installation Section
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation information for your project. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the installation information!')
                return false;
            }
        }
    },

    //Usage Section
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your project. (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter the usage information!')
                return false;
            }
        }
    },

    //License Section
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license. (Check all that apply)',
        choices: ['Apache 2.0', 'GNU GPL v3', 'MIT', 'ISC', 'Mozilla 2.0', 'Boost 1.0']
    },

    //Contributing Section
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter guidelines for contributions to your project.'
    },

    //Test Section 
    {
        type: 'input',
        name: 'test',
        message: 'Please enter instructions to run tests.'
    },

    //Question Section - Github Username
    {
        type: 'name',
        name: 'username',
        message: 'Please enter your Github username. (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your Github username!')
                return false;
            }
        }
    },

    //Question Section - Email Address
    {
        type: 'name',
        name: 'email',
        message: 'Please enter your email address (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!')
                return false;
            }
        }
    },
];

//FUNCTION to Wrtie ReadMe File
function writeToFile(fileName, data) {}

//FUNCTION to initialize app
function init() {}

//FUNCTION call to initialize app
init();
