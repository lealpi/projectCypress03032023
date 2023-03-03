export default class HtmlIframesPage {
    // Get the iframe
    getIframeBody() {
        return cy.get('.result')
          .wait(5000)
          .its('0.contentDocument.body')
          .should('not.be.empty')
          .then(cy.wrap)
      }

      closeCookies () { 
        return this.getIframeBody().get('a[id="banner-accept"]').should('exist')
      }

      //Interacts with the “About us” link
      aboutUsLink() {
        return this.getIframeBody().get('a[class="nav-link fw-bold"]:first').should('exist')
      }
  
      getAllUrls() {
        return cy.get('a').then($links => $links.map((i, link) => this.baseUrl + Cypress.$(link).attr('href')).get())
      }
    
      getAllButtons() {
        return cy.get('button')
    }
    
    clickOnLogin() {
        return cy.get('.d-lg-inline-block > .btn').click()
    }
    
    signUp() {
        return cy.get('#signUp').click()
    }

    signUpName() {
        // fill the input for the create account
        return cy.get('#textRegName').type("TEST")
    }

    signUpEmail() {
        // fill the input for the create account
        return cy.get('#textSRegEmail').type("test@yopmail.com")
    }

    
}