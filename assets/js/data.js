const url = `https://breakout-api.herokuapp.com/`;

async function fetchData(){
  try{
    const resFetch = await fetch(url);
    const resJson = await resFetch.json();
    return resJson;
  }
  catch{ return null }
}


async function postMethod(played = {}){
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(played)
  });
  return response.json();
}