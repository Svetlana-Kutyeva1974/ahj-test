import puppetteer from 'puppeteer';
import { fork } from 'child_process';
// const childProcess = require('child_process');

jest.setTimeout(50000); // default puppeteer timeout

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
      headless: false, // show gui
      slowMo: 450,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
    // await page.goto(baseUrl);// ? или здесь
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('Должен добавить класс valid если номер валидный', async () => {
    await page.goto(baseUrl);

    const form = await page.$('[data-widget=form-widget]');
    const input = await form.$('[data-id=form-input]');
    await input.type('44561261212345467');
    const submit = await form.$('[data-id=form-submit]');
    submit.click();
    await page.waitForSelector('[data-id=form-input].valid');
  });

  test('Должен добавить класс invalid если номер не валидный', async () => {
    await page.goto(baseUrl);

    const form = await page.$('[data-widget=form-widget]');
    const input = await form.$('[data-id=form-input]');
    await input.type('44561261212345464');
    const submit = await form.$('[data-id=form-submit]');
    submit.click();
    await page.waitForSelector('[data-id=form-input].invalid');
  });
});
