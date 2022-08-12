// 轮播图
let sliderWrap = document.querySelector('.sliderWrap');
let pic = document.querySelector('.pic');
let slider = document.querySelectorAll('.pic li img');

function lbt(){
    axios({
        method: 'GET',
        url: 'https://netease-cloud-music-api-zeta-bice.vercel.app/banner',
        params: {
            limit:50
        }
    }).then(res => {
        // console.log(slider);
        for (let i = 0; i < 6; i++) {
            slider[i].src = res.data.banners[i].imageUrl;
        }
    })
}
lbt();
// // 搜索
let input = document.querySelector('.parent input')
input.addEventListener('click', function() {
    axios({
        method: 'GET',
        url: 'https://netease-cloud-music-api-zeta-bice.vercel.app/cloudsearch',
        params: {
            keywords: input.value,
            limit:50
        }
    }).then((res) => {
        // console.log(res.data)
         console.log(res.status);
        
    })
})


// 热门推荐
let hotImg = document.querySelectorAll('.cover img')

function rmtj(){
    axios({
        method: 'GET',
        url: 'https://netease-cloud-music-api-zeta-bice.vercel.app/top/playlist',
        params: {
            limit:50
        }

    }).then((res) => {
        for (let i = 0; i < 8; i++) {
            hotImg[i].src = res.data.playlists[i].coverImgUrl;
            // hotText[i].innerHTML = res.data.playlists[i].name
        }
    })
}
rmtj();

// 新碟上架
let cover_img = document.querySelector('.cover_img');
let newImage = document.querySelectorAll('.cover_img img')
let song_name = document.querySelectorAll('.song_name');
let singer_name =document.querySelectorAll('.singer_name');

function xdsj(){
    axios({
        method:'GET',
        url:'https://netease-cloud-music-api-zeta-bice.vercel.app/album/newest',
        params:{
            limit:50
        }
    }).then(res=>{
        for(let i = 0; i < 5; i++){
            // 图片
            newImage[i].src = res.data.albums[i].picUrl;
            // 歌名
            song_name[i].innerHTML = res.data.albums[i].name;
            // 歌手名
            singer_name[i].innerHTML = res.data.albums[i].artists[0].name;
        } 
    })
}
xdsj();
   
// // 榜单 飙升榜
// // 飙升榜
// let bsb_li = document.querySelectorAll('.blk .bsb li')


// for (let i = 0; i < 5; i++) {
//         axios({
//             method: 'GET',
//             url: 'https://netease-cloud-music-api-zeta-bice.vercel.app/toplist/detail',
//             params: {
//                 limit: 50
//             }
//         }).then((res) => {
//             // console.log(res.data.list[0].tracks[0].first)
//             bsb_li[i].innerHTML = res.data.list[0].tracks[i].first
//         })
//     }

// // 新歌榜
// let xgb_li = document.querySelectorAll('.blk .xgb li')


// for (let i = 0; i < 5; i++) {
//         axios({
//             method: 'GET',
//             url: 'https://netease-cloud-music-api-zeta-bice.vercel.app/toplist/detail',
//             params: {
//                 limit: 50
//             }
//         }).then((res) => {
//             xgb_li[i].innerHTML = res.data.list[1].tracks[i]
//         })
//     }

// // 原创榜
//     let ycb_li = document.querySelectorAll('.blk .ycb li')
// for (let i = 0; i < 5; i++) {
//         axios({
//             method: 'GET',
//             url: 'https://netease-cloud-music-api-zeta-bice.vercel.app/toplist/detail',
//             params: {
//                 limit: 50
//             }
//         }).then((res) => {
//             // console.log(res.data.list[0].tracks[0].first)
//             ycb_li[i].innerHTML = res.data.list[2].tracks[i].first
//         })
//     }
