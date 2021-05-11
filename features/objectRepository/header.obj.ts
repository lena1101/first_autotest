import { by, element, ElementFinder } from "protractor";

export class HeaderRepository {
    readonly titleByClass: ElementFinder = element(by.css(".service-header__title_huge"));
    readonly servicesByText: ElementFinder = element(by.cssContainingText('.b-main-navigation a span', 'Услуги'));
}