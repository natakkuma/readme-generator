// FUNCTION renderLicenseBadge - function that returns a license badge based on which license is passed in
  function renderLicenseBadge(license) {

    //if Apache 2.0
    if (license === 'Apache 2.0') {
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } 
    
    //else if GNU GPL v3
    else if (license === 'GNU GPL v3') {
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } 
    
    //else if MIT
    else if (license === 'MIT') {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } 
    
    //else if ISC
    else if (license === 'ISC') {
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    
    //else if Mozilla 2.0
    } else if (license === 'Mozilla 2.0') {
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    
    //else if Boost 1.0
    } else if (license === 'Boost 1.0') {
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    } 
    
    //else if there is no license, return an empty string
    else if (license === 'no license') {
      return '';
    }

  };


//FUNCTION renderLicenseLink - function that returns the license link
  function renderLicenseLink(license) {

    //if Apache 2.0
    if (license === 'Apache 2.0') {
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    } 
    
    //else if GNU GPL v3
    else if (license === 'GNU GPL v3') {
      return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
    } 
    
    //else if MIT
    else if (license === 'MIT') {
      return '[MIT](https://opensource.org/licenses/MIT)';
    } 
    
    //else if ISC
    else if (license === 'ISC') {
      return '[ISC](https://opensource.org/licenses/ISC)';
    } 
    
    //else if Mozilla 2.0
    else if (license === 'Mozilla 2.0') {
      return '[Mozilla 2.0](https://opensource.org/licenses/MPL-2.0)';
    } 
    
    //else if Boost 1.0
    else if (license === 'Boost 1.0') {
      return '[Boost 1.0](https://www.boost.org/LICENSE_1_0.txt)';
    } 
    
    //else if there is no license, return an empty string
    else if (license === 'no license') {
      return '';
    }
    
  };


//FUNCTION renderLicenseSection - function that returns the license section of README
  function renderLicenseSection(license) {

    //if Apache 2.0
    if (license === 'Apache 2.0') {
      return 'Please click the link above to view license.';
    } 
    
    //else if GNU GPL v3
    else if (license === 'GNU GPL v3') {
      return 'Please click the link above to view license.';
    } 
    
    //else if MIT
    else if (license === 'MIT') {
      return 'Please click the link above to view license.';
    } 
    
    //else if ISC
    else if (license === 'ISC') {
      return 'Please click the link above to view license.';
    } 
    
    //else if Mozilla 2.0
    else if (license === 'Mozilla 2.0') {
      return 'Please click the link above to view license.';
    } 
    
    //else if Boost 1.0
    else if (license === 'Boost 1.0') {
      return 'Please click the link above to view license.';
    } 
    
    //else if there is no license, return an empty string
    else if (license === 'no license') {
      return '';
    }
    
  };

//FUNCTION generateMarkdown - function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## License 
  This project is license under ${data.license}

  ## Contributing 
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  For additional information or inquiries, please contact me directly at ${data.email}. Please feel free to view my other projects at https://github.com/${data.username}.

`;
}

module.exports = generateMarkdown;
