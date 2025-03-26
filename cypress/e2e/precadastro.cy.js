/// <reference types=”cypress” />


describe ('Funcionalidade Pré Cadastro', () => {
    
    beforeEach(() => {
      
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type('teste30@5teste.com')
        cy.get('#reg_password').type('!teste@teste$')
        cy.get(':nth-child(4) > .button').click()
});


});