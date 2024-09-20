# SVG Logo Maker

## Author: Sylvester Assiamah - Module 10

## Description

This project is a Node.js command-line application that generates a simple logo based on user input and saves it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and saves the generated SVG to a `.svg` file. This project utilizes Object-Oriented Programming principles and makes use of Inquirer for user input and Jest for testing.

## User Story

As a fullstack developer, I want to generate a simple logo for my projects so that I don't have to pay a graphic designer.

## Acceptance Criteria

- Given a command-line application that accepts user input:
  - When prompted for text, I can enter up to three characters.
  - When prompted for the text color, I can enter a color keyword (or a hexadecimal number).
  - When prompted for a shape, I am presented with a list of shapes to choose from: circle, triangle, and square.
  - When prompted for the shape's color, I can enter a color keyword (or a hexadecimal number).
  - When I have entered input for all the prompts, an SVG file is created named `logo.svg`, and the output text "Generated logo.svg" is printed in the command line.
  - When I open the `logo.svg` file in a browser, I am shown a 300x200 pixel image that matches the criteria I entered.

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: "RUT" for the text, "white" for the text color, "circle" from the list of shapes, and "red" for the shape color.

![SVG Logo Example](assets/images/screenshot.png)

## Walkthrough Video

A walkthrough video demonstrating the functionality of the application and passing all tests can be found [here](assets/videos/SVG_demo.mp4).

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/AssiamahS/svg-logo-maker.git
    cd svg-logo-maker
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    node index.js
    ```

4. **Run tests**:
    ```sh
    npm test
    ```

## Directory Structure

The recommended directory structure for this project is as follows:


```plaintext
svg-logo-maker/
│
├── index.js
│
├── lib/
│   ├── shapes.js
│   └── shapes.test.js
│
├── assets/
│   ├── images/
│   │   └── ( image files)
│   └── videos/
│       └── ( video files)
│
└── node_modules/
    └── (dependencies)



## Deployment
- Link to the repository: Module 10(https://github.com/AssiamahS/node_svg-logo_generator_cli)
- Deployed application - https://assiamahs.github.io/node_svg_logo_generator_cli/

## Usage
Generate SVG logos by providing text, selecting colors, and choosing shapes through a Node.js command-line application. Save the generated logo as an SVG file named 'logo.svg' for use in your projects.

## Credits
Rutgers Bootcamp resources.

  
## License
 MIT liscense.
