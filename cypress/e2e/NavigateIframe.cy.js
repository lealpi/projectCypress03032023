// Test Cases for HtmlIframesPage
import HtmlIframesPage from "../Pages/HtmlIframesPage"  

describe('HtmlIframesPage', () => {
    const page = new HtmlIframesPage()

    it('interacts with the HtmlIframesPage', () => {
      // Go to the link HTML Iframes 
      cy.visit('/html/html_iframes.htm')
      //Agree the cookies
      cy.get('#banner-accept').click({force:true})

      // Wait to load the text "Document is goes done"
      cy.contains('Document content also go here...').should('exist').scrollIntoView()
  
      // Wait for the iframe and interacts
      page.getIframeBody()

      page.closeCookies().click({force: true})
  
      //Interacts with the “About us” link and click on
      page.aboutUsLink().click({force: true})
  
      // Wait for the new Page
      cy.url().should('include', 'about/index.htm')

      // Get all URL of the New Page
      const allUrls = page.getAllUrls()
      console.log(allUrls)
  
      // Get all buttons of the New Page
      const allButtons = page.getAllButtons()
      console.log(allButtons)
  
      // Get text input text of the New Page
      

    })

  })
  