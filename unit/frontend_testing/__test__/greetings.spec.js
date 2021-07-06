describe('Greetings functionality', () => {
  it('should navigate to greetings page and confirm it works', () => {
    /* Step 3.2:
    * 將 [port] 和 [name] 修改成合適的值
    * Cypress 訪問剛剛架設的網站，並提交一個輸入
    * `should` 中是預期要得到的結果
    */
    cy.visit("http://luffy.ee.ncku.edu.tw:8217")
    cy.get('#greetings-input').type('Jenny', { delay: 400 })
    cy.get('#greetings-show-button').click()
    cy.get('#greeting-text').should('include.text', 'Hello Jenny!')
  })
})

//yarn cypress open

