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
step("Increase Number Of Product <product_name>", async function (product_name) {
    await click(button({value:"increment"},toRightOf(text(product_name))))
});
step("Decrease Number Of Product <product_name>", async function (product_name) {
    await click(button({value:"decrement"},toRightOf(text(product_name))))
});
step("Remove Product <ASUS MG- Laptop>", async function (product_name) {
    await click(button({value:"remove"},toRightOf(text(product_name))))
});
step("Clear All Products", async function () {
    await click(button({id:"clearProductsBTN"}))
});
