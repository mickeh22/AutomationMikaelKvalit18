describe('', function () {
    it('Login and Log out', function() {
        cy.log('Just testing setup')
  
        // go to login/index (separate step)
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
  
        //login/index
        cy.contains('Please, login!')
        cy.get('#login').type('marc') 
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()
        cy.contains('User').click()
        cy.contains('yuri').click()
        cy.get('#j_idt50 > table > tbody > tr:nth-child(5) > td:nth-child(7) > a:nth-child(3)').click()
        cy.contains('User').click()
        cy.get('.btn-primary').click()    
        cy.get('.fa-caret-down').click()
        
  
        //dasboard
        cy.contains('Hotel Accommodadion')
        cy.get('.fa-caret-down').click()
        cy.get('.dropdown-menu > li > a').click()
  
  
             
     })
  
  })