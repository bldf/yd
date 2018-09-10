const {Builder, By, Key, until} = require('selenium-webdriver');
console.log('aaaaaaaaa');
(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    console.log('cccccccccc');
    try {
        await driver.get('https://www.baidu.com/');
        await driver.findElement(By.id('kw')).sendKeys('node', Key.RETURN);
        await driver.wait(until.titleIs('node_百度搜索'), 1000);
    } finally {
        await driver.quit();
    }
})();
console.log('bbbbbbb');