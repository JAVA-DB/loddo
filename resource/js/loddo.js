

//   fetch('https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=938')
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(res) {
//     // data를 응답 받은 후의 로직
//   });

// function getloddo_num(){
//     console.log("실행")
// $.ajax({
//     type:'get',
//     url: 'https://www.bitpointplus.com/api/ticker',
//     dataType: "jsonp",
//     responsedataType: "jsonp",
//     success:function(data){
//         console.log("성공")
//     },
//     error:function(){
//         console.log("실패")
//      }
//     })
// }



// function getloddo_num(){
// const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === xhr.DONE) {
//             if (xhr.status === 200 || xhr.status === 201) {
//                 console.log(xhr.responseText+"되는거래ㅋㅋㅋ");
//             } else {
//                 console.error(xhr.responseText+"안되는거래ㅋㅋㅋ");
//             }
//         }
//     };
//     xhr.open('get', 'https://www.bitpointplus.com/api/ticker');
//     xhr.send();
// }