import HtmlIframesPage from "../Pages/HtmlIframesPage"  

describe('New account', () => {
  const page = new HtmlIframesPage()
  const username = "user"
  const email = 'test@test.com'

  it('Creates an account and logs into the site - Negative Recapcha', () => {
    // Go to the Login link
    cy.visit('market/signup.jsp')

    //Validate the URL
    cy.url().should('include', 'market/signup.jsp')

    //Sign Up 
    page.signUpName(username)
    page.signUpEmail(email)

    //Create account
    page.signUp()


})
})