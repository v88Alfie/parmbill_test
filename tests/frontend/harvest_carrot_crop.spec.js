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

describe('Harvest a planted carrot', function() {
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
    await driver.get("http://127.0.0.1:5501/bahay_cube.html")
    // 2 | setWindowSize | 1294x1392 | 
    await driver.manage().window().setRect({ width: 1294, height: 1392 })
    // 3 | click | id=tile_id_10 | 
    await driver.findElement(By.id("tile_id_10")).click()
    // 4 | click | css=.till_btn | 
    await driver.findElement(By.css(".till_btn")).click()
    // 5 | click | id=tile_id_10 | 
    await driver.findElement(By.id("tile_id_10")).click()
    // 6 | click | css=.plant_btn | 
    await driver.findElement(By.css(".plant_btn")).click()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it("Selected tile class should have 'carrot_planted'", async function() {
    // 7 | click | xpath=//label[@id='carrot_crop'] | 
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//label[@id=\'carrot_crop\']"))), 1000).click()
    await driver.sleep(1000);
    // 8 | click | id=crop_to_plant_btn | 
    await driver.findElement(By.id("crop_to_plant_btn")).click()
    // 9 | verifyElementPresent | css=.carrot_planted | 
    selected_tile  = await driver.findElement(By.id("tile_id_10"));
    let tile_class = await selected_tile.getAttribute('class');
    expect(tile_class.split(" ")[1]).to.eq('carrot_planted');
  })

  it("Total Earnings should have a value of 75 after planting carrot crop", async function() {
    // 7 | click | xpath=//label[@id='carrot_crop'] | \
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//label[@id=\'carrot_crop\']"))), 1000).click()
    await driver.sleep(1000);
    // 8 | click | id=crop_to_plant_btn | 
    await driver.findElement(By.id("crop_to_plant_btn")).click()
    // 10 | verifyText | css=.total_earnings_value | 75
    let total_earnings = await driver.findElement(By.css(".total_earnings_value")).getText()
    expect(total_earnings).to.eq("75");
  })

  it("Planted corn tile should have 10 seconds waiting time to harvest", async function() {
    // 7 | click | xpath=//label[@id='carrot_crop'] | 
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//label[@id=\'carrot_crop\']"))), 1000).click()
    await driver.sleep(1000);
    // 8 | click | id=crop_to_plant_btn | 
    await driver.findElement(By.id("crop_to_plant_btn")).click()
    // 9 | waitForElementPresent | css=.harvest | 12000
    await driver.wait(until.elementLocated(By.css(".harvest")), 10200)
    selected_tile  = await driver.findElement(By.id("tile_id_10"));
    let tile_class = await selected_tile.getAttribute('class');
    expect(tile_class.split(" ")[1]).to.eq('harvest');
  })

  it("Planted corn tile should have $75 tile text", async function() {
    // 7 | click | xpath=//label[@id='carrot_crop'] | 
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//label[@id=\'carrot_crop\']"))), 1000).click()
    await driver.sleep(1000);
    // 8 | click | id=crop_to_plant_btn | 
    await driver.findElement(By.id("crop_to_plant_btn")).click()
    // 9 | waitForElementPresent | css=.harvest | 12000
    await driver.wait(until.elementLocated(By.css(".harvest")), 10200)
    // 10 | waitForText | css=#tile_id_10 > .tile_text | $75
    selected_tile = await driver.wait(until.elementTextIs(await driver.findElement(By.css("#tile_id_10 > .tile_text")), '$75'), 10200)
    let tile_text = await selected_tile.getText();
    expect(tile_text).to.eq('$75');
  })

  it("Total earnings should be $150 after harvesting corn crop", async function() {
    // 7 | click | xpath=//label[@id='carrot_crop'] | 
    await driver.wait(until.elementIsVisible(await driver.findElement(By.xpath("//label[@id=\'carrot_crop\']"))), 1000).click()
    await driver.sleep(1000);
    // 8 | click | id=crop_to_plant_btn | 
    await driver.findElement(By.id("crop_to_plant_btn")).click()
    // 9 | waitForElementPresent | css=.harvest | 12000
    await driver.wait(until.elementLocated(By.css(".harvest")), 10200)
    // 10 | waitForText | css=#tile_id_10 > .tile_text | $75
    await driver.wait(until.elementTextIs(await driver.findElement(By.css("#tile_id_10 > .tile_text")), '$75'), 10200)
    // 11 | click | id=tile_id_10 | 
    await driver.findElement(By.id("tile_id_10")).click()
    // 12 | click | id=harvest_btn | 
    await driver.findElement(By.id("harvest_btn")).click()
    // 13 | verifyText | css=.total_earnings_value | 150
    let total_earnings = await driver.findElement(By.css(".total_earnings_value")).getText()
    expect(total_earnings).to.eq("150");
  })
})
