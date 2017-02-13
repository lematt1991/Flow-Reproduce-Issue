//@flow

type obj = {
  a : number,
  b : number
}
type ty = {
  c : ?obj
}

function test(x : ty){
  if(x.c == null){
    throw new Error('Error!')
  }
  var temp = x.c.a;
  console.log('test')
  return x.c.b;
}