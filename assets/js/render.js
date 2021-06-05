const renderTime = times => {
  let time = new Date(times);
  let date = `0${time.getDate()}`.slice(-2);
  let month = `0${time.getMonth()}`.slice(-2);
  let year = `0${time.getYear()}`.slice(-2);
  let hour = `0${time.getHours()}`.slice(-2);
  let minute = `0${time.getMinutes()}`.slice(-2);
  let second = `0${time.getSeconds()}`.slice(-2);
  let timeZone = `0${time.getTimezoneOffset() / -60}`.slice(-2);
  if(timeZone > 0) timeZone = '+' + timeZone;
  return `${date}-${month}-${year} / ${hour}:${minute}:${second} / GMT: ${timeZone}`;
}

function lstTotal(props){
  let li = props.reduce((box, item, index) => 
    box + ` <li class="player__item au${index}">
      <div class="time">${renderTime(item.createdAt)}</div>
      <span class="achi${index}">${index + 1}. ${item.name}</span>
      <span>${item.total}</span>
    </li>
  `, '');

  player__list.innerHTML = li
}