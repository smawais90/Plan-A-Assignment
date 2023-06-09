export const evaluateNumber = (value) => {
    expect(Number.isNaN(+value), 'input should be a number').to.eq(false)       
}