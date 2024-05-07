import { item } from "./data.js"
import { styles } from "./style.js"

let entity = Object.entries(item)
let root = document.querySelector('#root');


for(let i = 0; i < entity.length; i++){

  let makeDiv = document.createElement('div');
  root.appendChild(makeDiv);
  root.children[i].innerHTML = `${entity[i][0]}\n${entity[i][1]}`; // ? 이거 정수 값 어떻게 뻄
  
// * Style Sector
  
  let childrenStyle = Object.entries(styles.root.children);

    for(let j = 0; j < childrenStyle.length; j++){
      root.children[i].style[childrenStyle[j][0]] = childrenStyle[j][1];       // ! 점 표기법이 아니라 대괄호 표기법
    };
  }

  let rootStyle = Object.entries(styles.root)
  
  for(let i = 0; i < rootStyle.length; i++){
    root.style[rootStyle[i][0]] = rootStyle[i][1]
  };

  // * 이벤트 위임 동작부

  // root.addEventListener('click', (e)=>{
  //   let a = e.target
  //   if(a.id !== 'root'){
  //     a.classList.add("red");
  //     a.style.backgroundColor = 'red'
  //     console.log(a)
  //   }
  // })

  root.addEventListener('click', (e)=>{
    let target = e.target
    if(target !== root){
      target.classList.add('red')
      target.style.backgroundColor = 'red'
      console.log(target)
    }else{
     if(target.classList == 'red')
    target.classList.remove(`red`)
    }
  })



//* 05.07 문혜림
  // let aiai = true;
  // if(aiai === false){
  //   let button = document.sdlfkj
  //   button.style.backgroundColor=red;
  //   aiai = ture;
  // } else {
  //   button.style.backgroundColor = none;
  // }




  // let table = document.getElementById('bagua-table');

  // let selectedTd; 

  // table.onclick = function(event) {
  //   let target = event.target;

  //   while (target != this) {
  //     if (target.tagName == 'TD') {
  //       highlight(target);
  //       return;
  //     }
  //     target = target.parentNode;
  //   }
  // }

  // function highlight(node) {
  //   if (selectedTd) {
  //     selectedTd.classList.remove('highlight');
  //   }
  //   selectedTd = node;
  //   selectedTd.classList.add('highlight');
  // }


  // let styleroot = Object.entries(styles.root);                      // styles의 root를 배열로 변환
  //   for (let i = 0; i < styleroot.length - 2; i++) {          // styles의 root스타일을 적용
  //     root.style[styleroot[i][0]] = styleroot[i][1];
  //   }
    // console.log(styleroot);
