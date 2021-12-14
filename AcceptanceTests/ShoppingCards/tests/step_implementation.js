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
    button,
    near,
    tableCell
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

step("Open Shopping Card Application On <port>", async function (port) {
    await goto("localhost:"+port+"/")
});

step("Must Display <message>", async function (message) {
    assert.ok(await text(message).exists(0,0));
});
step("Must Not Display <message>", async function (message) {
    assert.ok(!await text(message).exists());
});

step("Choose The Product <product_name>", async function (product_name) {
    await click(text(product_name));
});

step("Go To The Basket", async function () {
    await click(link({id:'basketLink'}));

});
step("Increase Number Of Product", async function () {
    await click(text('+'));
});
step("Decrease Number Of Product", async function () {
    await click(text('-'));
});
step("Remove Product", async function () {
    await click(text('0'));
});
step("Clear All Products", async function () {
    await click(text('Clear Basket'));
});
