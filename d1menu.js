// 원뎁스메뉴
const menulist = ["네이버","다음","구글"]

for(x in menulist){
    console.log(menulist[x])
}

const menulist2 = [
                  ["네이버","http://never.com"],
                  ["다음","http://daum.net"],
                  ["구글","http://google.com"]
]

for(x in menulist2){
    for(j in menulist2[x]){
        console.log(menulist2[x][j])
    }
}  //6번출력

// for(x in menulist2){
//     for(j in menulist2[x]){
//         console.log(menulist2[x][0])
//     }


for(x in menulist2){
    console.log(`<a href=${menulist2[x][1]}> ${menulist2[x][0]} </a>`)
}