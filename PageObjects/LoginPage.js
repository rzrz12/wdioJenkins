import Page from '../PageObjects/Page';

class LoginPage extends Page { //every page object extends page class

	get email() { return $('input[name="email"]') }
	get password() { return $('input[name="password"]') }
    get submitBtn() { return $('button[class*="submit"]') }

    open() {
    	super.open('example');
    }

    submit() {
    	this.submitBtn.click();
    }
}

 export default new LoginPage();