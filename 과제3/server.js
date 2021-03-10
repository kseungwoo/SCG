const express = require('express');

let article_titles=[];
let article_contents=[];
const app = express();
const port = 3000;

app.use(express.static('./'));

app.use(express.urlencoded({extended:true}));

app.post('/article', (req,res)=> {
    const data = req.body;
    article_titles.push(data.title);
    article_contents.push(data.content);
})

app.get('/article', (req,res) => {
    const data =req.query;
    res.send(`<div style="text-align: center; margin-top: 30px; justify-content: center;"><h1 style="font-size: 40pt; font-weight: bold;">SCG Forum Site</h1><br><br><br><p style="font-size: 24pt;">글 제목 : ${article_titles[data.index-1]}</p><br><p style="font-size: 14pt;">글 내용 : ${article_contents[data.index-1]}</p></div>`)
})

app.listen(port, () => {
    console.log('http://localhost:3000/로 서버가 열렸습니다.');
});