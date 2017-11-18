#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');

const { 
        addCustomer, 
        findCustomer,
        updateCustomer,
        removeCustomer,
        listCustomers
    } = require('./index');

// customer questions
const addQuestions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'customer first name'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'customer last name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'customer phone number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'customer email address'
    }
];

program
    .version('1.0.0')
    .description('Client management system')

// program.command('add <firstname> <lastname> <phone> <email>')
//         .alias('a')
//         .description('Add a customer')
//         .action((firstname, lastname, phone, email) => {
//             addCustomer({firstname, lastname, phone, email});
//         });

// add customer command
program.command('add')
        .alias('a')
        .description('Add a customer')
        .action(() => {
            prompt(addQuestions).then(answers => addCustomer(answers));
        });

// update customer command
program.command('update <_id>')
    .alias('u')
    .description('update a customer')
    .action(_id => {
        prompt(addQuestions).then(answers => updateCustomer(_id,answers));
    });

// find customer command
program.command('find <name>')
        .alias('f')
        .description('find a customer')
        .action(name => findCustomer(name));

// remove customer command
program.command('remove <_id>')
    .alias('r')
    .description('remove a customer')
    .action(_id => removeCustomer(_id));

// list all the customers
program.command('list')
    .alias('l')
    .description('list all customers')
    .action(() => listCustomers());

if (process.argv.length > 1) {
    // node commands.js --version
    program.parse(process.argv);
}