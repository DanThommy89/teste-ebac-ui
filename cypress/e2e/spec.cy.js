
  
///<reference types=”cypress” />

const perfil = require ('../fixtures/perfil.json')
context ('Funcionalidade Login', () =>{
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(() => {
    cy.screenshot()
  });


  it ('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()


})

it.only('Deve fazer login com sucesso - Usando Arquivo de Dados', () => {
  cy.get('#username').type(perfil.usuario)
  cy.get('#password').type(perfil.senha)
  cy.get('.woocommerce-form > .button').click()


});


it ('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
 
  cy.get('#username').type('_ebac@teste.com')
  cy.get('#password').type('t@teste.com')
  cy.get('.woocommerce-form > .button').click()
  cy.get('page-title').should('contain', 'Minha Conta')
})
})