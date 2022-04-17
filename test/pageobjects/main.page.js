const Page = require('./page');

class MainPage extends Page {
    get checkBox () {
        return $('#iCertifyCheck');
    }

    get agreementsModalDiv () {
        return $('[class="agreements__window modal__wrapper modal-is-active"]')
    }

    get noCertifiedWarningMessageDiv () {
        return $('[class="warning-msg flex items-center space-x-2 mx-10"]')
    }

    get enterButton () {
        return $('button[id="enter-agree"]');
    }

    get searchButton () {
        return $('button[id="search_button"]');
    }

    open () {
        return super.open('');
    }
}

module.exports = new MainPage();
