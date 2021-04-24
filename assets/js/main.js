async function main(){
  const getData = await fetchData();

  loaded(true);
  
  if(isData(getData)) return;
  lstTotal(getData);
}

main();