import fs from 'fs';
import inquirer from 'inquirer';
import { Circle, Triangle, Square } from './lib/shapes';

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo',
        validate: input => input.length <= 3 || 'Text must be three characters or less.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select a shape for the logo:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hex):'
    }
];

inquirer
    .prompt(questions)
    .then(answers => {
        const { text, textColor, shape, shapeColor } = answers;
        let svgShape;

        switch (shape) {
            case 'Circle':
                svgShape = new Circle();
                break;
            case 'Triangle':
                svgShape = new Triangle();
                break;
            case 'Square':
                svgShape = new Square();
                break;
        }
        svgShape.setColor(shapeColor);

        const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
${svgShape.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;

        fs.writeFileSync('logo.svg', svgContent.trim());
        console.log('Generated logo.svg');
    })
    .catch(error => {
        console.error('Error loading inquirer:', error);
    });
