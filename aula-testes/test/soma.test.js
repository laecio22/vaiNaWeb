const  soma  =  require("../soma")

test("Deve  somar   dois  valores  corretamente", () => {
    expect(soma(3,7)).toBe(10)
})