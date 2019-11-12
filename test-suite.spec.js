describe('', function () {
  it('Login and Log out', function() {
      cy.log('Just testing setup')

      // go to login/index (separate step)
      cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')

      //login/index
      cy.contains('Please, login!')
      cy.get('#login').type('jp') 
      cy.get('#senha').type('1010')
      cy.get('#loginBtn').click()
      cy.contains('Bill').click()
      cy.contains('Index').click()
      cy.get('.sidebar-search').type('abc123')
      cy.contains('Reservation').click()
      cy.get('.btn-primary').click()    
      cy.contains('Show All Reservations').click()
      cy.get('.fa-caret-down').click()
      

      //dasboard
      cy.contains('Hotel Accommodadion')
      cy.get('.fa-caret-down').click()
      cy.get('.dropdown-menu > li > a').click()


           
   })

})

