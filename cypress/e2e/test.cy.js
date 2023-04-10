describe('Sipariş button test', () => {
    
    beforeEach(() => {
      cy.visit('http://localhost:3000/pizza')
    })
    
  
    it('Test name-input', () => {
      cy
      .get('[data-cy = "name-input"]')
      .type('a')
      .should('have.value', 'a')
      .should('have.class', 'is-invalid')
      cy
      .get('[data-cy= "order-button"]')
      .should('have.disabled', true)
      cy
      .get('[data-cy= "name-input"]')
      .clear()
      .type('al')
      .should('have.value', 'al')
      .clear()
      .should('have.class', 'is-invalid')
      cy
      .get('[data-cy= "order-button"]')
      .should('have.disabled', true)
      cy
      .get('[data-cy= "name-input"]')
      .type('Ali')
      .should('have.value', 'Ali')
      .should('not.have.class', 'is-invalid')
    })
  
    it('Test dough-dropdown', () => {
    
      cy
      .get('[data-cy="dough-dropdown"]')
      .select('ince')
      .should('have.value', 'ince')
      cy
      .get('[data-cy="dough-dropdown"]')
      .select('orta')
      .should('have.value', 'orta')
      cy
      .get('[data-cy="dough-dropdown"]')
      .select('kalın')
      .should('have.value', 'kalın')
      })
  
    
    it('Test special-text', () => {
      cy
      .get('[data-cy = "special-text"]')
      .type('Plastik ürünleri göndermeyin')
      .should('have.value', 'Plastik ürünleri göndermeyin')
    })


    it('Buton çalışıyor mu kontrol et', () => {
        cy
        .get('[data-cy= "order-button"]')
        .should('have.disabled', false)
      })
 })