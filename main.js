function styleSet(target, width, height, bgcolor, border, borderR, fontsize, fontcolor) {
  target.style.width = width;
  target.style.height = height;
  target.style.backgroundColor = bgcolor;
  target.style.border = border;
  target.style.borderRadius = borderR;
  target.style.fontSize = fontsize;
  target.style.color = fontcolor;
}
function flexSet(target, direc, justy, align) {
  target.style.display = 'flex';
  target.style.flexDirection = direc;
  target.style.justifyContent = justy;
  target.style.alignItems = align;
}

function main() {

  let nowDate = new Date();

  let nowYear = nowDate.getFullYear();
  let nowMonth = ('0' + (nowDate.getMonth() + 1)).slice(-2);
  let nowDay = ('0' + nowDate.getDate()).slice(-2);
  let week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  let weekDay = week[nowDate.getDay()];
  
  let nowHours = ('0' + nowDate.getHours()).slice(-2); 
  let nowMinutes = ('0' + nowDate.getMinutes()).slice(-2);
  let nowSeconds = ('0' + nowDate.getSeconds()).slice(-2); 
  
  let dateString = `
    ${nowYear}년 ${nowMonth}월 ${nowDay}일 ${nowHours}시 ${nowMinutes}분 ${nowSeconds}초 ${weekDay}
  `;

  let root = document.createElement('div');
  document.body.appendChild(root);
  root.id = "root";

  let timeBox = document.createElement('div');
  root.appendChild(timeBox);
  root.id = "timeBox";

  styleSet(root, '100vw', '100vh', '#DAF5FF', '','','','');
  flexSet(root,'row','center','center');
  styleSet(timeBox, '100vw', '30vh', '#B0DAFF', '','20px', '60px','white');
  flexSet(timeBox,'row','center','center');

  timeBox.innerHTML = dateString;

  setTimeout(function() {
    location.reload();
  }, 1000);
}

main();