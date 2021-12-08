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
    evaluate,
    button
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

// Return a screenshot file name

step("Must display <message>", async function (message) {
    assert.ok(await text(message).exists());
});

step("Open Basic Counter application <port>", async function(port) {
	await goto("localhost:"+port+"/");
});

step("Increase amount of <repeat_count>", async function(repeat_count) {
	for(let i = 0 ; i< repeat_count; i++)
    {
        await click(button({id:'incrementBTN'}));
    }
});

step("Decrease amount of <arg0>", async function(arg0) {
	for(let i =0 ; i < arg0; i++)
    {
        await click(button({id:'decrementBTN'}));
    }
});
step("Reset all increments-decrements", async function() {
	await click(button({id:'resetBTN'}));
});