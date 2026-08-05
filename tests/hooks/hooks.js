const config = require('../../platform/config');
const { chromium } = require('playwright');
const { After, AfterAll, Before, BeforeAll, Status, setDefaultTimeout } = require('@cucumber/cucumber');

const globaltimeout = config.expect?.timeout || 5000;
setDefaultTimeout(globaltimeout);

let browser;
let context;
let page;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

Before(async function () {
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page;

  // Bloquer les ressources inutiles (pubs, analytics, sockets)
  await page.route("**/*", (route) => {
    const url = route.request().url();
    if (
      url.includes("ads") ||
      url.includes("socket.io") ||
      url.includes("analytics")
    ) {
      route.abort();
    } else {
      route.continue();
    }
  });
});

After(async function ({ pickle, result }) {
    console.log(result?.status);
    if (result?.status === Status.FAILED) {
        const screenshot = await page.screenshot({
            path: `./reports/screenshots/${pickle.name}.png`,
            type: 'png',
        });
        await this.attach(screenshot, 'image/png');
    }
    await page.close();
    await context.close();
});

AfterAll(async function () {
  await browser.close();
});