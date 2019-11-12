describe('Test suite', () => {
    it('First test', () => {
        cy.log('Hello world1!')
        cy.visit('www.google.com')
        cy.get('gLfyf').type('Rafael')
     })
    
})
