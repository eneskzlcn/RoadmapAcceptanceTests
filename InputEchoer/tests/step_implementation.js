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

step("Open InputEchoer application", async function () {
    await goto("localhost:3000/");
});

step("Add text to echo <echotext>",async function(echotext){
    await focus(textBox('Enter a text to echo'));
    await write(echotext, into(textBox("Enter a text to echo")))
    await click(button("Echo"));
}
);
step("Must display <message>", async function (message) {
    assert.ok(await text(message).exists());
});
step("Clear echo items", async function()
{
    await click(button("Clear"));
});

