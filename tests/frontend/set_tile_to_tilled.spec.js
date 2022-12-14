// Generated by Selenium IDE
require('chromedriver');
const { Builder, By, Key, until} = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');

const screen = {
  width: 1920,
  height: 1080
};

describe('Set tile to Tilled', function() {
  this.timeout(30000)
  let driver
  let vars
  let url
  beforeEach(async function() {
    let chrome_options = new chrome.Options().headless().windowSize(screen);
    //let chrome_options = new chrome.Options().windowSize(screen);
    url = "http://127.0.0.1:5501/bahay_cube.html";

    driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(chrome_options)
            .build();
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Selected tile should be tilled', async function() {
    // Test name: set_tile_to_tilled
    // Step # | name | target | value
    // 1 | open | http://127.0.0.1:5501/bahay_cube.html | 
    await driver.get(url)
    // 2 | setWindowSize | 1294x1392 | 
    await driver.manage().window().setRect({ width: 1294, height: 1392 })
    // 3 | click | id=tile_id_0 | 
    await driver.findElement(By.id("tile_id_0")).click()
    // 4 | click | css=.till_btn | 
    await driver.findElement(By.css(".till_btn")).click()
    // 5 | assertElementPresent | css=.tilled | 
    let selected_tile = await driver.findElement(By.id("tile_id_0"));
    let tile_class = await selected_tile.getAttribute('class');
    expect(tile_class).to.eq('tilled');
  })

  it('Selected tile class should not empty', async function() {
    // Test name: set_tile_to_tilled
    // Step # | name | target | value
    // 1 | open | http://127.0.0.1:5501/bahay_cube.html | 
    await driver.get(url)
    // 2 | setWindowSize | 1294x1392 | 
    await driver.manage().window().setRect({ width: 1294, height: 1392 })
    // 3 | click | id=tile_id_0 | 
    await driver.findElement(By.id("tile_id_0")).click()
    // 4 | click | css=.till_btn | 
    await driver.findElement(By.css(".till_btn")).click()
    // 5 | assertElementPresent | css=.tilled | 
    let selected_tile = await driver.findElement(By.id("tile_id_0"));
    let tile_class = await selected_tile.getAttribute('class');
    expect(tile_class).to.not.eq('empty');
  })
})
