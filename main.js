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

const xhr = new XMLHttpRequest();
xhr.open("GET", 'http://localhost:3050/start');
xhr.send();
// let res = xhr.response;
xhr.addEventListener('load', function() {
  console.log(xhr.response);
})

// let dateString = `
//       ${nowYear}년 ${nowMonth}월 ${nowDay}일 ${nowHours}시 ${nowMinutes}분 ${nowSeconds}초 ${weekDay}
//     `;

function main() {

  

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

}
main();