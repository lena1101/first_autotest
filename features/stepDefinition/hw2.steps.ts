import { OnlinerPage } from "../pageObjects/onliner.page";

export = function exampleSteps() {

    const onlinerPage = new OnlinerPage;

    this.After(async () => {
        await onlinerPage.clearBrowserData();
    });

    this.Given(/^I am on Onliner page$/, () => {
        onlinerPage.navigateToOnliner();
    });

    this.Then(/^I see header by class$/, async () => {
        await onlinerPage.checkHeaderByClass();
    });

    this.Then(/^I see header by tag$/, async () => {
        await onlinerPage.checkHeaderByTag();
    });

    this.Then(/^I see footer by class$/, async () => {
        await onlinerPage.checkFooterByClass();
    });

    this.Then(/^I see footer by tag$/, async () => {
        await onlinerPage.checkFooterByTag();
    });

}