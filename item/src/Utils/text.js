// // var arr = [];
// // var news = document.querySelector(".index-news");
// // var o = {};
// // var newss = news.querySelectorAll('span');
// // o.title=[];
// // newss.forEach(item=>o.title.push(item.innerText));
// // o.newss2=[];
// // var city=news.querySelectorAll("ul li");
// // city.forEach(item=>{
// //     var o2 = {};
// //     o2.title1 = item.querySelector('dt').innerText;
// //     o2.title2 = item.querySelector("dd").innerText;
// //     o2.img = item.querySelector('img').src;
// //     o.newss2.push(o2);
// // })
// // arr.push(o)
// 获取列表
// var arr = [];
// var house = document.querySelector(".index-houses")
// // house.forEach(item=>{
//     var o = {};
//     o.bigTitle=house.querySelector(".big-title").innerText;
//     o.shop=[];
//     var li = house.querySelectorAll(".item");
//     li.forEach(item2=>{
//         var o2={};
//         o2.img  = item2.querySelector("img").src;
//         // console.log(item2.querySelector(".title"))
//         o2.title  = item2.querySelector(".title")?item2.querySelector(".title").innerText:"";
//          var index = item2.querySelector("a").href.indexOf("#");

//         o2.id = item2.querySelector("a").href.slice(index+2)
//         var area = item2.querySelectorAll(".area span");
//          o2.name = []
//         area.forEach(item3=>{
//          o2.name.push(item3.innerText);
//         })
//         var tag = item2.querySelectorAll(".tags span");
//          o2.tag = []
//         tag.forEach(item4=>{
//          o2.tag.push(item4.innerText)
//         })
//         o2.price=item2.querySelector('.no')?item2.querySelector('.no').innerText:"";
//       o.shop.push(o2);
//     })
//     arr.push(o)
// // })




// var arr = [];
// var house = document.querySelectorAll(".index-houses")[1]
// // house.forEach(item=>{
//     var o = {};
//     o.bigTitle=house.querySelector(".big-title").innerText;
//     o.shop=[];
//     var li = house.querySelectorAll(".item");
//     li.forEach(item2=>{
//         var o2={};
//         //获取图片
//         o2.img  = item2.querySelector("img").src;
//         // console.log(item2.querySelector(".title"))
//         //获取标题
//         o2.title  = item2.querySelector(".r-title")?item2.querySelector(".r-title").innerText:"";
//          var index = item2.querySelector("a").href.indexOf("#");
//         //获取id
//         o2.id = item2.querySelector("a").href.slice(index+2);
//          //获取中间的标题
//         var area = item2.querySelectorAll(".r-type span");
//          o2.name = []
//         area.forEach(item3=>{
//          o2.name.push(item3.innerText);
//         })

//        console.log(item2)
//         var tag = item2.querySelector(".r-condition");
//         console.log(tag)
//         var tags2 = tag.querySelectorAll('.house-tags span')
//          o2.tag = []
//          tags2.forEach(item4=>{
//             var o3 = {};
//             o3.title2 = item4.innerText;
//             o3.clssName= item4.className;
//          o2.tag.push(o3)
//         })
//         o2.pf = tag.querySelector(".avg")?tag.querySelector(".avg").innerText:"";
//         // o2.price=item2.querySelectorAll('.r-price em').innerText;
//       o.shop.push(o2);
//     })
//     arr.push(o)
// // })
// var aa = document.querySelectorAll(".m1 li");
// var arr = [];
// aa.forEach(item=>{
//     var o={};
//     var index = item.querySelector("a").href.indexOf("#");
//     o.path = item.querySelector("a").href.slice(index+2);
//     o.img = '';
//     o.title = item.querySelector(".title").innerText;
//     arr.push(o);
// })
// var oDiv = document.querySelectorAll(".fabu_column");
// var arr = [];
// oDiv.forEach(item=>{
//     var o={};
//     o.title = item.querySelector(".fabu_column_title").innerText;
//     o.data = [];
//     var li = item.querySelectorAll("li");
//     li.forEach(item2=>{
//         var o2 = {};
//         o2.title1 = item2.querySelector("dt").innerText;
//         o2.title2 = item2.querySelector("dd").innerText;
//         o2.img="";
//         o.data.push(o2);
//     })
//     arr.push(o);
// })
// 新房列表(排序)


var arr = [];
var li = document.querySelectorAll(".xf-list-component li");
// house.forEach(item=>{
    // var o = {};
    // o.bigTitle=house.querySelector(".big-title").innerText;
    // o.shop=[];
    // var li = house.querySelectorAll(".item");
    li.forEach((item2,i)=>{
        var o2={};
        //获取图片
        // o2.img  = item2.querySelector("img").src;
        o2.img  = `./img/New/menu1000000${i<10?'0'+`${i+1}`:`${i+1}`}.jpg`
        // console.log(item2.querySelector(".title"))
        //获取标题
        o2.title  = item2.querySelector(".title")?item2.querySelector(".title").innerText:"";
         var index = item2.querySelector("a").href.lastIndexOf("/");
        //获取id
        o2.id = item2.querySelector("a").href.slice(index+1);
         //获取中间的标题
        var area = item2.querySelectorAll(".area span");
         o2.name = []
        area.forEach(item3=>{
         o2.name.push(item3.innerText);
        })

       console.log(item2)
        // var tag = item2.querySelector(".r-condition");
        // console.log(tag)
        var tags2 = item2.querySelectorAll('.tags span')
         o2.tag = []
         tags2.forEach(item4=>{
            // var o3 = {};
            // o3.title2 = item4.innerText;
            // o3.clssName= item4.className;
        //  o2.tag.push(o3)
         o2.tag.push(item4.innerText)
        })
        // o2.pf = item2.querySelector(".avg")?tag.querySelector(".avg").innerText:"";
        o2.pf = item2.querySelector(".no").innerText=='价格待定'?0:item2.querySelector(".no").innerText
        // o2.price=item2.querySelectorAll('.r-price em').innerText;
      arr.push(o2);
    })
    // arr.push(o)
// })