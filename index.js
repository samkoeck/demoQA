const {By,Keys,Builder} = require("selenium-webdriver");
require("chromedriver");
const {firstName} = require('./pageObjects/form.po');

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}
 
async function FillInForm(){
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("https://demoqa.com/automation-practice-form");
 
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);

        driver.findElement(By.id("firstName")).sendKeys('Sam');
        driver.findElement(By.id("lastName")).sendKeys('Koeck');
        // driver.findElement(By.id("userEmail")).sendKeys('samkoeck@gmail.com');
        driver.findElement(By.xpath("//label[@for='gender-radio-1']")).click();
        driver.findElement(By.id("userNumber")).sendKeys('0485157642');
        driver.findElement(By.id("userForm")).submit();

        //It is always a safe practice to quit the browser after executio
        await driver.quit();
 
}
 
FillInForm()