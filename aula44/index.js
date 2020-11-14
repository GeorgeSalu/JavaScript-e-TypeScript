function somar(x, y) {
  if(
    typeof x !== 'number' ||
    typeof y !== 'number'
  ) {
    throw new ReferenceError('x e y tem que ser numericos')
  }

  return x * y
}

try {
  console.log(somar(1,2))
  console.log(somar('1',2))
} catch (error) {
  console.log(error)
}