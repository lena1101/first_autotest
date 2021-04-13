import { browser, by, element, ElementFinder, ExpectedConditions, Key } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";

const defaultTimeout = browser.params.defaultTimeout;

export = function exampleSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

    this.Given(/^I am on Onliner page$/, async () => {
        browser.navigate().to(browser.params.onlinerByURL);
    });

    this.Then(/^I see Flea market hyperlink$/, async () => {
        let fleaMarketLink:ElementFinder = await element(by.xpath("//a[contains(text(), 'Барахолка')]"));
        await browser.wait(ExpectedConditions.visibilityOf(fleaMarketLink), defaultTimeout, "Flea market hyperlink wasn't loaded or has incorrect locator");
    });

    this.Then(/^I click on Flea market hyperlink$/, async () => {
        let fleaMarketLink:ElementFinder = await element(by.xpath("//a[contains(text(), 'Барахолка')]"));
        await fleaMarketLink.click();
        await browser.wait(ExpectedConditions.urlContains("https://baraholka.onliner.by/"), defaultTimeout, "URL wasn't changed");
    });

    this.Then(/^Find Showel$/, async () => {
        let searchField:ElementFinder = await element(by.id("fleaMarketSearchInput"));
        
        await browser.wait(ExpectedConditions.visibilityOf(searchField), defaultTimeout, "Search Field wasn't loaded or has incorrect locator");
        await searchField.sendKeys("Лопата");
        await searchField.sendKeys(Key.ENTER);
    });

    this.Then(/^Check results$/, async () => {
        let resultsHeader:ElementFinder = await element(by.css(".b-ba-tabs"));
        await browser.wait(ExpectedConditions.visibilityOf(resultsHeader), defaultTimeout, "resultsHeader wasn't loaded or has incorrect locator");
        await browser.sleep(3000);
    });

}