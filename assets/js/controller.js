async function control(){
  let played = {
    name: localStorage.getItem('name'),
    total: localStorage.getItem('total'),
  }

  let returnPost = await postMethod(played);
  console.log(returnPost);
}

// control();