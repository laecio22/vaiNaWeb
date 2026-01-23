const  isEven = require('../isEven')

test('Deve retornar  true  se  número  é  par', () => {
   expect(isEven(6)).toBe(true)
})

test('Deve retornar  false  se  número  é  impar', () => {
   expect(isEven(3)).toBe(false)
})