import { HeaderPage } from "../pageObjects/header.page";
import { FooterPage } from "../pageObjects/footer.page";

export = function exampleSteps() {

    const footerPage = new FooterPage;
    const headerPage = new HeaderPage;

    this.setDefaultTimeout(600 * 1000);

    this.After(async () => {
        await headerPage.clearBrowserData();
    });

    this.Given(/^I am on Onliner page$/, async () => {
        headerPage.navigateToOnliner();
    });

    this.When(/^I click on Services link$/, async () => {
        await headerPage.clickServices();
    });

    this.Then(/^I see Orders title$/, async () => {
        await headerPage.checkTitleByClass();
    });

    this.When(/^I click on Vacancies link$/, async () => {
        await footerPage.clickVacancies();
    });

    this.Then(/^I see Vacancies title$/, async () => {
        await footerPage.checkTitleByTag();
    });
}