import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
    // await page.goto(baseUrl);? или здесь
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);

    const form = await page.$('.widget__form');
    const input = await form.$('.input');
    await input.type('4539499701100246');
    const submit = await form.$('.button');
    submit.click();
    await page.waitForSelector('.input.bgValid');
  });

  test('Должен добавить класс bgInvalid если номер не валидный', async () => {
    await page.goto(baseUrl);
    const form = await page.$('.widget__form');
    const input = await form.$('.input');
    await input.type('4539499701100247');
    const submit = await form.$('.button');
    submit.click();
    await page.waitForSelector('.input.bgInvalid');
  });
});
