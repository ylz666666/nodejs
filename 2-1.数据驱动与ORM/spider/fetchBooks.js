//抓取豆瓣读书中的数据信息
const cheerio = require('cheerio');
const Book = require('../models/Book');
const axios = require('axios').default;//node中axios被放在默认导入里面
async function getBooksHtml() {
    const result = await axios.get('https://book.douban.com/');
    return result.data;
}
//从豆瓣书中得到一个完整的网页,并从网页中分析出书籍的基本信息，得到一个书籍的详情页链接数组
async function getBookLinks() {
    const html = await getBooksHtml();
    const $ = cheerio.load(html);//返回一个全局函数
    const aElement = $("#content .grid-16-8 .article li div.cover a");
    const links = aElement.map((i, ele) => {
        return ele.attribs['href'];

    }).get();//得到一个数组
    links.splice(50, 54);
    return links;
    // console.log(aElement.length);
}
//根据书籍详情页的地址，得到该书籍的详细信息
async function getBookDetail(detailUrl) {
    const res = await axios.get(detailUrl);
    const $ = cheerio.load(res.data);
    const name = $("h1 span[property]").text();
    const imgurl = $(".nbg img").attr('src');
    const spans = $("#info span span.pl");
    let author = null; //作者
    spans.each((i, ele) => {
        if ($(ele).text().includes("作者")) {
            author = $(ele).siblings().text();
        };
    })
    let publishDate = null;
    $("#info span.pl").each((i, ele) => {
        if ($(ele).text().includes("出版年")) {
            publishDate = $(ele)[0].nextSibling.nodeValue;
        }
    })
     console.log(name,imgurl,publishDate,author);
    return {
        name,
        imgurl,
        publishDate,
        author
    }

}
 async function fetchAll() {//获取所有的书籍信息
    const links = await getBookLinks();//得到书籍所有详情页地址
    const proms = links.map((link) => {
        return getBookDetail(link)//得到每本书籍详情页书籍详细信息
    });
    return Promise.all(proms);
}
 fetchAll().then((books) =>{
    saveToDb(books);
})
async function saveToDb(datas){
    await Book.bulkCreate(datas);
    console.log('抓取数据并保存到数据库')
}
// async function saveToDb() {//得到书籍信息 保存到数据库
//     const books = await fetchAll();
//     await Book.bulkCreate(books);
//     console.log('抓取数据并保存到数据库')
// }
//  saveToDb();
getBookDetail('https://book.douban.com/subject/35314181/?icn=index-latestbook-subject');
//  getBookLinks().then(res =>{
//      console.log(res);
// })