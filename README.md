Flow-Reproduce-Issue
---------------------

Repo to reproduce Flow issue.


The following program:

```JS
type obj = {
  a : number,
  b : number
}
type ty = {
  c : ?obj
}

function test(x : ty){
  if(x.c == null){
    throw new Error('Erorr!')
  }
  var temp = x.c.a;
  console.log('test')
  return x.c.b;
}
```

produces the following errors:

```
index.js:17
 17:   return x.c.b;
                  ^ property `b`. Property cannot be accessed on possibly null value
 17:   return x.c.b;
              ^^^ null

index.js:17
 17:   return x.c.b;
                  ^ property `b`. Property cannot be accessed on possibly undefined value
 17:   return x.c.b;
              ^^^ undefined
```

Removing the `console.log` eliminates the error.  Also, `x.c` will definitely not be `null` given the thrown exception is in the then branch of the `if` statement.