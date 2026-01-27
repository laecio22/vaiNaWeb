const objectPerson =  require('../objectPerson')

test('Verificar  se  o me  nome  está  correto', ()=>{
    expect(objectPerson().nome).toEqual('Laecio')
})

test('Verificar  se já  é  maior  de  idade', () => {
    const idade = 22

    expect(idade).toBeGreaterThanOrEqual(18)
})


test('Verificar  se  possui  banana  na lista  de compras', () => {
    const listaCompras = [
        'café',
        'arroz',
        'feijão',
        'leite',
        'banana'
    ]

    expect(listaCompras).toContain('banana')
})