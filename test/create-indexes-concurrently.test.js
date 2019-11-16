"use strict";

const rule = require("../lib/rules/create-indexes-concurrently"),
    RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("create-indexes-concurrently", rule, {
    valid: [
        {
            code: "queryInterface.addIndex('I', { concurrently: true })",
            options: []
        },
        {
            // Catch issue where node.callee.property doesn't exist
            code: "cache = require('../cache');",
            options: []
        }
    ],

    invalid: [
        {
            code: "queryInterface.addIndex('I', { concurrently: false })",
            errors: [{ message: "Concurrently must be set to true." }]
        },
        {
            code: "queryInterface.addIndex('I', {})",
            errors: [{ message: "Must specify concurrently: true for index creation." }]
        }
    ]
});
