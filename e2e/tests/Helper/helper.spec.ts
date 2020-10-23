/**
 * Helper Spec
 */
import { browser, element, By } from '@syncfusion/ej2-base/e2e/index';

export namespace Helper {
    export const schedule: object = By.id('schedule');
    export const button: object = By.id('radio2');
    export const content: object = By.className('e-tip-content');
    export const today: object = By.className('e-today');
    export const day: object = By.className('e-day');
    export const month: object = By.className('e-month');
    export const week: object = By.className('e-week');
    export const workweek: object = By.className('e-work-week');
    export const agenda: object = By.className('e-agenda');
    export const monthAgenda: object = By.className('e-month-agenda');
    export const tDay: object = By.className('e-timeline-day');
    export const tWeek: object = By.className('e-timeline-week');
    export const tWorkWeek: object = By.className('e-timeline-work-week');
    export const tMonth: object = By.className('e-timeline-month');
    export const loadAndWait: Function = (url: string, ele: Element, time: number = 2000) => {
        browser.loadAsync(url);
        browser.wait(browser.ExpectedConditions.presenceOf(element(ele)), time);
        browser.driver.manage().window().maximize();
    };
}
