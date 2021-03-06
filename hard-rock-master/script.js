document.querySelector(".search").addEventListener("click", () => {
    getdata(0, '.lyrics-nameOne', '.nameOne');
    getdata(1, '.lyrics-nameTwo', '.nameTwo');
    getdata(2, '.lyrics-namethree', '.namethree');
    getdata(3, '.lyrics-nameFour', '.nameFour');
    getdata(4, '.lyrics-nameFive', '.nameFive');
    getdata(5, '.lyrics-nameSix', '.nameSix');
    getdata(6, '.lyrics-nameSeven', '.nameSeven');
    getdata(7, '.lyrics-nameEight', '.nameEight');
    getdata(8, '.lyrics-nameNine', '.nameNine');
    getdata(9, '.lyrics-nameTen', '.nameTen');
})
document.querySelector(".getOne").addEventListener("click", () => {
    getlyrics('.lyrics-nameOne', '.nameOne');
})
document.querySelector(".getTwo").addEventListener("click", () => {
    getlyrics('.lyrics-nameTwo', '.nameTwo');
})
document.querySelector(".getthree").addEventListener("click", () => {
    getlyrics('.lyrics-namethree', '.namethree');
})
document.querySelector(".getFour").addEventListener("click", () => {
    getlyrics('.lyrics-nameFour', '.nameFour');
})
document.querySelector(".getFive").addEventListener("click", () => {
    getlyrics('.lyrics-nameFive', '.nameFive');
})
document.querySelector('.getSix').addEventListener("click", () => {
    getlyrics('.lyrics-nameSix', '.nameSix');
})
document.querySelector(".getSeven").addEventListener("click", () => {
    getlyrics('.lyrics-nameSeven', '.nameSeven');
})
document.querySelector(".getEight").addEventListener("click", () => {
    getlyrics('.lyrics-nameEight', '.nameEight');
})
document.querySelector(".getNine").addEventListener("click", () => {
    getlyrics('.lyrics-nameNine', '.nameNine');
})
document.querySelector(".getTen").addEventListener("click", () => {
    getlyrics('.lyrics-nameTen', '.nameTen');
})
function showdata(id, data){
    document.querySelector(id).innerText = data;
}
function getdata(id, name, singer , imgbox){
    const keyword = document.querySelector('.keyword').value;
    const api = `https://api.lyrics.ovh/suggest/${keyword}`
    fetch (api)
    .then(res => res.json())
    .then( data => {
        let songName = data.data[id].title;
        let artist = data.data[id].artist.name;
        let imgLink = data.data[id].artist.picture;
        showdata(name, songName);
        showdata(singer, artist);
        addimg( imgbox, imgLink);
        document.querySelector('.single-result').style.visibility = 'visible';
        console.log(songName, artist, img);
    })
}
function getlyrics(singer, name){
    const artist = document.querySelector(singer).innerText;
    const song = document.querySelector(name).innerText;
    let api = `https://api.lyrics.ovh/v1/${artist}/${song}`
    fetch (api)
    .then(res => res.json())
    .then( data => {
        if (data.lyrics){
            const lyrics = data.lyrics;
        showdata('.lyric', lyrics)
        console.log(song);
        }
        else{
            alert('not found')
        }
    })
}
function addimg(place, link) {
    let artistImage = document.querySelector(place);
    artistImage.innerHTML = '';
    let img = document.createElement('img');
    img.src = link;
    artistImage.appendChild(img);
}