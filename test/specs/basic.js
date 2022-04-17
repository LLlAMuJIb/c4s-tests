const MainPage = require('../pageobjects/main.page');


describe('Age Verification PopUp', () => {
    it('end to end: user should accept to continue browsing', async () => {
        const modalDiv = MainPage.agreementsModalDiv
        const checkBox = MainPage.checkBox
        const enterButton = MainPage.enterButton
        const warningDiv = MainPage.noCertifiedWarningMessageDiv
        const searchButton = MainPage.searchButton

        await MainPage.open();

        await expect(modalDiv).toBeDisplayedInViewport('Age verification modal is not shown')
        
        await expect(checkBox).toBeClickable('CheckBox is not clickable')
        await expect(checkBox).not.toBeSelected('CheckBox is checked by default')
        
        await checkBox.click()
        await expect(checkBox).toBeSelected('CheckBox should be checked after click')
        
        await checkBox.click()
        await enterButton.click()
        
        await expect(warningDiv).toBeDisplayed('Warning should be displayed after clicking enter withoud checkbox checked')
        await expect(modalDiv).toBeDisplayedInViewport('Age verification modal is not shown')
        await expect(searchButton).not.toBeClickable('User should not be able to continue')

        await checkBox.click()
        await enterButton.click()

        await expect(warningDiv).not.toBeDisplayed('Warning should be displayed after clicking enter withoud checkbox checked')
        await expect(modalDiv).not.toBeDisplayedInViewport('Age verification modal is not shown')
        await expect(searchButton).toBeClickable('User should be able to continue')
    });

    it('popup must be shown after page loaded', async () => {
        await MainPage.open();

        await expect(MainPage.agreementsModalDiv).toBeDisplayedInViewport('Age verification modal is not shown')
    });

    it('checkbox must be disabled by default', async () => {
        await MainPage.open();

        await expect(MainPage.checkBox).toBeClickable('CheckBox is not clickable')
        await expect(MainPage.checkBox).not.toBeSelected('CheckBox is checked by default')
    });

    it('user should be able to continue after age verification', async () => {
        await MainPage.open();

        await MainPage.checkBox.click()
        await MainPage.enterButton.click()

        await expect(MainPage.noCertifiedWarningMessageDiv).not.toBeDisplayed('Warning should be displayed after clicking enter withoud checkbox checked')
        await expect(MainPage.agreementsModalDiv).not.toBeDisplayedInViewport('Age verification modal is not shown')
        await expect(MainPage.searchButton).toBeClickable('User should be able to continue')
    });

    it('user must not be able to continue without age verification', async () => {
        await MainPage.open();

        await MainPage.enterButton.click()

        await expect(MainPage.noCertifiedWarningMessageDiv).toBeDisplayed('Warning should be displayed after clicking enter withoud checkbox checked')
        await expect(MainPage.agreementsModalDiv).toBeDisplayedInViewport('Age verification modal is not shown')
        await expect(MainPage.searchButton).not.toBeClickable('User should not be able to continue')
    })
})