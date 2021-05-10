async function control(){
  let played = {
    name: localStorage.getItem('name'),
    total: localStorage.getItem('total'),
  }
  localStorage.setItem('total', null);
  if(!played.name || !played.total) return;
  let returnPost = await postMethod(played);
}