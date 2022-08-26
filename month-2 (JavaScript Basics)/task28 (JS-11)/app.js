const users=[
    {
    
        id:1, 
        username:"Ali",
        img:'./img/ali.jpg',
        job:'developer'
    },
    {
        id:2,
        username:'bedbext_developer',
        img:'./img/bedbext_developer.jpg',
        job:'test2',
    },
    {
        id:3,
        username:'duman',
        img:'./img/duman.jpg',
        job:'test3',
    },
    {
        id:4,
        username:'js_oyrenen_shexs',
        img:'./img/js_oyrenen_shexs.jpg',
        job:'test4',
    },
    {
        id:5,
        username:'qarli_daglar',
        img:'./img/qarli_daglar.jpg',
        job:'test5',
    },
    {
        id:6,
        username:'qoca_cinar',
        img:'./img/qoca_cinar.jpg',
        job:'test6',
    },
    {
        id:7,
        username:'visselka',
        img:'./img/visselka.jpg',
        job:'test7',
    },
    {
        id:8,
        username:'novxani',
        img:'./img/novxani.jpg',
        job:'test8',
    },
]
const root=document.getElementById('root')


for(let i=0; i<=users.length;i++){
    const newContent = document.createElement('div')
    const img = document.createElement('img')
    img.setAttribute('src',users[i].img)
    const h1 = document.createElement('h1')
    h1.textContent=users[i].username
    const p = document.createElement('p')
    p.textContent=users[i].job
    root.append(newContent)
    newContent.append(img,h1,p)
    newContent.classList.add('content')
}





