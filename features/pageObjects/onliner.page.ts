import { browser, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { HeaderRepository } from "../objectRepository/header.obj";
import { FooterRepository } from "../objectRepository/footer.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class OnlinerPage {
    
    headerRepo: HeaderRepository;
    footerRepo: FooterRepository;

    constructor() {
        this.headerRepo = new HeaderRepository;
        this.footerRepo = new FooterRepository;
    }

    public async clearBrowserData() {
        let browserHacks = new BrowserHacks;
        browserHacks.ClearBrowserData();
    }

    public navigateToOnliner() {
        browser.navigate().to(browser.params.onlinerByURL);
    }

    public async checkHeaderByClass() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.headerRepo.headerByClass), defaultTimeout, "Header wasn't loaded or has incorrect class");
    }

    public async checkHeaderByTag() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.headerRepo.headerByTag), defaultTimeout, "Header wasn't loaded or has incorrect tag");
    }

    public async checkFooterByClass() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.footerRepo.footerByClass), defaultTimeout, "Footer wasn't loaded or has incorrect class");
    }

    public async checkFooterByTag() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.footerRepo.footerByTag), defaultTimeout, "Footer wasn't loaded or has incorrect tag");
    }


}