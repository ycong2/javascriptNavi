const gnb=[

]
const util =[
    {
        text :"Git",
        href : "http://gitthub.com",
        cls : "",
        target : "_blank",
        d2:[]
    }
    {
        text :"Notion",
        href : "http://notion.io",
        cls : "",
        target : "_blank",
        d2:[]
    }
    {
        text :"Youtube",
        href : "http://youtube.com",
        cls : "",
        target : "_blank",
        d2:[]
    }
    {
        text :"language",
        href : "#none",
        cls : "",
        target : "",
        d2:[
            {
                text:"EN",
                href:"en.com"
            },
            {
                text:"JP",
                href:"jp.com"
            }
        ]

    }
]
console.log{util[4].d2[1].href}
console.log{util[4].text}

var litages = "";

// for(var i=0; i<4; i++){
//     litages += `<li>${util[i].text}</i>`;
// }

for(var i in util){
    litages += `<li>${util[i].text}</i>`;
}
ultag.innerHTML = litages;