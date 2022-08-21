// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'no license used'){
    return `![badge][https://img.shields.io/github/license/moyuh/readme-generator]${license}`;
  } else{
    return ' ';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'no license used'){
    return `[${license}](https://choosealicense.com/license${license})`
  } else {
    return ' ';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license used'){
    return `##[${license}](#table-of-contents) This project is under the following license: 
    ${renderLicenseLink(license)}`;
  } else{
    return '';
  }
};

function renderLicenseToTableOfContents(license) {
  if (license !== 'no license used'){
    return `*[License](#license)`;
  } else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table-of-Contents


`;
}

module.exports = generateMarkdown;
