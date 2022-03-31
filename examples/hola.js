let a = [1,2,3]

const b = (a,b,c,d) => {
  console.log(`${a} ${b} ${c} ${d}`)
}

b(...a)