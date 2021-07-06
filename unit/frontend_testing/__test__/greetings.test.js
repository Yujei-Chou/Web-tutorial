/**
 * @jest-environment jsdom
 */

const fs = require("fs")
const html = fs.readFileSync(`${__dirname}/../dist/index.html`)

describe('<Greeting />', () => {
  it('shows correct greeting', () => {
    document.documentElement.innerHTML = html
    require('../dist/app.js')

    const greeting = document.getElementById('greeting-text')
    const button = document.getElementById('greetings-show-button')

    /* Step 2 
     * 測試當輸入為空時點擊後會產生的值
    */
    expect(greeting.textContent).toBe('')
    button.click()
    expect(greeting.textContent).toBe('Hello human!')
  })
})
