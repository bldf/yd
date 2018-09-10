console.log('999')
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get('https://www.baidu.com/');
        await driver.findElement(By.name('wd'));
        await driver.sendKeys('node', Key.RETURN);
        await driver.wait(until.titleIs('node_百度搜索'), 1000);096542} finally {
        await driver.quit();
        console.log('2341243124as;ldkf')
    }
})();
