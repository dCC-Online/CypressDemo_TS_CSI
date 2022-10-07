
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should ber on a new url which 
    // includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify 
    // that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})

describe('hooks', function () {
  before(function () {
    // runs once before the first test in this block
  });

  after(function () {
    // runs once after the last test in this block
  });

  beforeEach(function () {
    // runs before each test in this block
  });

  afterEach(function () {
    // runs after each test in this block
  });

  // test cases
});


it('creates 2 items', () => {
  cy.visit('/') // command
  cy.focused() // command
    .should('have.class', 'new-todo') // assertion

  cy.get('[data-testid="new-todo"]') // command
    .type('todo A{enter}') // command
    .type('todo B{enter}') // command

  cy.get('[data-testid="todo-list"] li') // command
    .should('have.length', 2) // assertion
})


beforeEach(() => {
  // now this runs prior to every test
  // across all files no matter what
  cy.resetDb()
})


describe("POST /login", () => {
  it("login as user", () => {
    cy.loginByApi("jdoe", "password123").then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

