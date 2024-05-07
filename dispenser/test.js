let user = {
  name : "john",
  age: "30"
}
user.sayHi = function(){
  alert("안녕하세요");
}

console.log(user)

function attributer(){
  alert('할당 완료!');
}
user.attributer = attributer

console.log(user)
user.attributer()
// ! 메서드 실습


// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };

// let user = makeUser();

// // alert( user.ref.name );

// // alert(makeUser().this.john)
// alert(makeUser(this.name))