async function getData(req, res){
  
  if(InternalError || ReferenceError || SyntaxError){
    throw res.send(error.stack);
  }
  else{
    const a = await functionA();
    const b = await functionB();
    res.send("some result")
  } 
  
}

// async function getData(req, res){
//   try{
//     const a = await functionA();
//     const b = await functionB();
//     res.send("some result")
//     console.log("ola")
//   }catch (error){
//     res.send(error.stack);
//     console.log("error en ola")
//   }
// }