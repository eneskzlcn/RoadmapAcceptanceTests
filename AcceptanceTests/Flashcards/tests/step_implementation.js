/* globals gauge*/
"use strict";
const path = require('path');
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});




// step("Add task <item>", async (item) => {
//     await write(item, into(textBox("What needs to be done?")));
//     await press('Enter');
// });

// step("View <type> tasks", async function (type) {
//     await click(link(type));
// });

// step("Complete tasks <table>", async function (table) {
//     for (var row of table.rows) {
//         await click(checkBox(toLeftOf(row.cells[0])));
//     }
// });

// step("Clear all tasks", async function () {
//     await evaluate(() => localStorage.clear());
// });

// step("Open todo application", async function () {
//     await goto("todo.taiko.dev");
// });

// step("Must not have <table>", async function (table) {
//     for (var row of table.rows) {
//         assert.ok(!await text(row.cells[0]).exists(0, 0));
//     }
// });

// step("Must display <message>", async function (message) {
//     assert.ok(await text(message).exists(0, 0));
// });

// step("Add tasks <table>", async function (table) {
//     for (var row of table.rows) {
//         await write(row.cells[0]);
//         await press('Enter');
//     }
// });

// step("Must have <table>", async function (table) {
//     for (var row of table.rows) {
//         assert.ok(await text(row.cells[0]).exists());
//     }
// });

step("Open Flashcard application on <port>", async function(port) {
	await goto("localhost:"+port+"/");
});

step("Enter a question <question>", async function(question) {
	await write(question,into(textBox('Question')));
});

step("Enter a answer <answer>", async function(answer) {
await write(answer,into(textBox('Answer')));
});

step("Add flashcard", async function() {
	await click('Add');
});
step("Must display <question>", async function(question) {
	await text(question).exists();
});

step("Pick the flashcard of question <question>", async function(question) {
	await click(text(question));
});

step("Delete all flashcards", async function() {
	await click('Delete All')
});

step("Should not display <question>", async function(question) {
    assert.ok(!await text(question).exists());
});

