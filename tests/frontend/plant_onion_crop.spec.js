// Generated by Selenium IDE
require('chromedriver');
const { Builder, By, Key, until} = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;
const chrome = require('selenium-webdriver/chrome');

const screen = {
  width: 1080,
  height: 1920
};

describe('Plant a onion crop', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    let chrome_options = new chrome.Options().headless().windowSize(screen);
    //let chrome_options = new chrome.Options().windowSize(screen);

    driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(chrome_options)
            .build();

    // 1 | open | http://127.0.0.1:5501/bahay_cube.html |
    await driver.get("http://127.0.0.1:5501/bahay_cube.html");
    // 2 | setWindowSize | 1294x1392 | 
    await driver.manage().window().setRect({ width: 1294, height: 1392 });
    // 3 | click | id=tile_id_5 | 
    await driver.findElement(By.id("tile_id_5")).click()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Selected tile should be tilled', async function() {
    // Test name: plant_potato_crop
    // Step # | name | target | value
    // 4 | click | css=.till_btn | 
    await driver.findElement(By.css(".till_btn")).click()
    // 5 | click | id=tile_id_0 | 
    let selected_tile = await driver.findElement(By.id("tile_id_5"));
    let tile_class = await selected_tile.getAttribute('class');
    expect(tile_class).to.eq('tilled');
  })

  it("Selected tile class should have 'onion_planted'", async function() {
    // 4 | click | css=.till_btn | 
    await driver.findElement(By.css(".till_btn")).click()
    // 5 | click | id=tile_id_0 | 
    await driver.findElement(By.id("tile_id_5")).click()
    // 6 | click | css=.plant_btn | 
    await driver.findElement(By.css(".plant_btn")).click()
    // 7 | click | xpath=//label[@id='onion_crop'] | 
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//label[@id=\'onion_crop\']"))), 1000).click();
    await driver.sleep(1000);
    // 8 | click | id=crop_to_plant_btn | 
    await driver.findElement(By.id("crop_to_plant_btn")).click()
    selected_tile  = await driver.findElement(By.id("tile_id_5"));
    let tile_class = await selected_tile.getAttribute('class');
    expect(tile_class.split(" ")[1]).to.eq('onion_planted');
  })

  it("Total Earnings should have a value of 85", async function() {
    // 4 | click | css=.till_btn | 
    await driver.findElement(By.css(".till_btn")).click()
    // 5 | click | id=tile_id_0 | 
    await driver.findElement(By.id("tile_id_5")).click()
    // 6 | click | css=.plant_btn | 
    await driver.findElement(By.css(".plant_btn")).click()
    // 7 | click | xpath=//label[@id='onion_crop'] | 
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//label[@id=\'onion_crop\']"))), 1000).click()
    await driver.sleep(1000);
    // 8 | click | id=crop_to_plant_btn | 
    await driver.findElement(By.id("crop_to_plant_btn")).click()
    // 9 | verifyText | css=.total_earnings_value | 85
    let total_earnings = await driver.findElement(By.css(".total_earnings_value")).getText()
    expect(total_earnings).to.eq("85");
  })
})
