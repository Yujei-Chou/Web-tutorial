const sayHello = require('../sayHello')

/* Step 1:
 * 每個 `it` 中的函式皆視為一個測資
 * 需要測試的函式作為 `expect` 的參數傳入，而測試函式的結果預期要為 `toEqual` 中的值
 */

describe("sayHello function", () => {
  it("should return the proper greeting when a user doesn't pass a name", () => {
    expect(sayHello()).toEqual("Hello human!")
    })
    
    it("should return the proper greeting with the name passed", () => {
    expect(sayHello("Evgeny")).toEqual("Hello Evgeny!")
    })

})
