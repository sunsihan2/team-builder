describe('Team member app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const roleInput = () => cy.get('input[name="role"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const termsCheckBox = () => cy.get('input[name="terms"]')
    const addToListBtn = () => cy.get('button[id=addBtn]')

    it('the proper elements exist',() => {
        nameInput().should('exist')
        emailInput().should('exist')
        roleInput().should('exist')
        passwordInput().should('exist')
        termsCheckBox().should('exist')
        addToListBtn().should('exist')
    })

    describe('Filling out input and cancelling', () => {
        it('submit button is disabled', () => {
            addToListBtn().should('be.disabled')
        })

        it('can type inside the text input',() => {
            nameInput()
                .should('have.value','')
                .type('sihan')
                .should('have.value', 'sihan')

            emailInput()
                .should('have.value','')
                .type('sihan@gmail.com')
                .should('have.value', 'sihan@gmail.com')
            
            roleInput()
                .should('have.value','')
                .type('engineer')
                .should('have.value', 'engineer')
            
            passwordInput()
                .should('have.value','')
                .type('password')
                .should('have.value', 'password')
            
        })

        it('the submit button enables after type', ()=> {
            nameInput().type('sihan')
            emailInput().type('sihan')
            roleInput().type('sihan')
            passwordInput().type('sihan')
            termsCheckBox().click()
            addToListBtn.should('not.be.disabled')
        })

        describe('adding a new team member ', () => {
            it('can add to the list', () => {
                cy.contains(/sihan/).should('not.exist')
                nameInput().type('sihan')
                emailInput().type('sihan')
                roleInput().type('sihan')
                passwordInput().type('sihan')
                termsCheckBox().click()
                addToListBtn().click()
                cy.contains(/sihan/).should('exist')
            })
        })
    })
})
