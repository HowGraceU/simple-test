const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.baidu.com');
        await driver.findElement(By.name('wd')).sendKeys('webdriver', Key.ENTER);
        await driver.wait(until.titleIs('webdriver_ 百度搜索'), 3000);
    } finally {
        await driver.quit();
    }
})();