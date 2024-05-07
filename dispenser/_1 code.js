// import * as test fr om "./data.js"
import { item } from "./data.js"
import { styles } from "./style.js"
// console.log(item)
console.log(styles)
let entity = Object.entries(item)
// let rootStyle = Object.entries(styles)
// let rootStyle = Obj1ect.entries(styles["*"])
let test = styles["*"]

let body = document.getElementsByTagName('body');
console.log(styles['*']);
let root = document.querySelector('#root');

let childrenStyle= Object.entries(styles.root.children);
console.log(childrenStyle);
console.log(childrenStyle[0]);
console.log(childrenStyle[0][1]);

console.dir(test);

console.log(entity[0][1]);

/**
 * 
for(let i = 0; i < entity.length; i++){
  let makeDiv = document.createElement('div');
  // makeDiv.innerHTML = entity[i]
  root.appendChild(makeDiv);
    // console.log(i);
    for(let j = 0; j<childrenStyle.length; j++){
      console.log(j)}



      
    function eleInner(a, b) {
      root.children[i].innerHTML = `${entity[i][a]} \n ${entity[i][b]}`;
    }
    eleInner(0,1);
  }
 * 
*/





for(let i = 0; i < entity.length; i++){
  let makeDiv = document.createElement('div');
  // makeDiv.innerHTML = entity[i]
  root.appendChild(makeDiv);
  // console.log(i);

console.log(root.children[i].style)
  // for(let j = 0; j<childrenStyle.length; i++){
  //   let idx = childrenStyle[j][0]
  //   console.log(idx);
  //   root.children[i].style[childrenStyle[j][0]] = childrenStyle[j][1];  // ! 점 표기법이 아니라 대괄호 표기법
  // }


  function eleInner(a, b) {
    root.children[i].innerHTML = `${entity[i][a]} \n ${entity[i][b]}`;
  }
  eleInner(0,1); // ? 이거 정수 값 어떻게 뺌?
}



// console.log(childrenStyle[0][0])

// for(let i = 0; i<childrenStyle.length; i++){
  //     // let style = root.children[i].style
  //     // console.log(style)
  //     // console.log(childrenStyle[i])
  //     //  root.children[i].style.childrenStyle[i] = children[i][i]
  //     // console.log(root.children[i].style)
  //     // root.children[i].style.childrenStyle[i][0] = childrenStyle[i][1] 
  //     // console.log(childrenStyle[i][0])
  //     let idx = childrenStyle[i][0]
  //     console.log(idx)
  
  //     root.children[i].style = childrenStyle[i][1] 
  //     // console.log(root.children[i].style.idx)
  //   }
  
  
  
  
  // console.log(root.children);
  
  // root.children[0].style.backgroundColor = "red"
  // // console.log(childrenStyle[0][0] = childrenStyle[0][1])
  
  let styleroot = Object.entries(styles.root);                      // styles의 root를 배열로 변환
      for (let i = 0; i < styleroot.length - 2; i++) {          // styles의 root스타일을 적용
        root.style[styleroot[i][0]] = styleroot[i][1];
      }
      console.log(styleroot);

      
      console.log(root.children);

    




root.children[0].style.backgroundColor = "red"
// console.log(childrenStyle[0][0] = childrenStyle[0][1])











/**
 * ? 외부 파일에서 style 값 이관시켜서 적용하는 법
 */

// * ==========ROOT STYLE===========
// let body = document.querySelector('body')
// let root = document.getElementById('root')
// let childrenDiv = document.querySelector('#root.div')
// body.style.margin = "0px"
// body.style.padding = "0px"

// root.style.display = "grid"
// root.style.gridTemplateColumns = "repeat(5 , 1fr)"
// root.style.gridTemplateRows =  "repeat(4, 1fr)"
// root.style.backgroundColor = "#b0e0e6"
// root.style.gap = "10px"

// root.style.justifyContent = "center"
// root.style.alignItems = "center"
// console.log(root.children)
// // ========================
// console.log(entity)
// for (let i = 0; i<entity.length; i++){
//   let div = document.createElement(`div`)
//   div.innerHTML = [i]
  

//   root.appendChild(div)
// }












// console.log(entity)


// console.log(entity.length)
// console.log(entity[0][1])