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


step("Open Guest Ladger Book Application On <port>", async function(port) {
	await goto('localhost:'+port+'/')
});

step("Enter a email <email>", async function(email) {
	await write(email,into(textBox('E-mail')));
});

step("Enter a message <message>", async function(message) {
	await write(answer,into(textBox('Message')));
});

step("Submit", async function() {
	await click(button({id:'submit'}))
});
step("Must display <message>", async function(message) {
	await assert.ok(await text(message).exists());
});