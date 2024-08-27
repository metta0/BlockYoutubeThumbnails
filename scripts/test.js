
const style = document.createElement('style');

//  .yt-core-image, #playlist-thumbnails, yt-avatar-shape, ytd-playlist-video-thumbnail-renderer , .html5-video-container
const css = `
    ytd-thumbnail, #playlist-thumbnails, yt-img-shadow {
    display: none !important;
  }
`;

style.appendChild(document.createTextNode(css));

document.head.appendChild(style);

// 특정 문자를 포함하는 비디오의 썸네일을 다시 보이게 설정
const keyword = "제"; 
const videoTitles = document.querySelectorAll('#video-title');

videoTitles.forEach(title => {
    if (title && title.getAttribute('title')){
        if (title.getAttribute('title').includes(keyword)) {

            const thumbnail = title.closest('#dismissible').querySelector('ytd-thumbnail');
            
            if (thumbnail) {
                thumbnail.style.setProperty('display', 'block', 'important'); // 썸네일을 다시 보이게 함
            }

            const ytImgshadow = thumbnail.querySelector('yt-img-shadow');
            if (ytImgshadow) {
                ytImgshadow.style.setProperty('display', 'block', 'important'); // 썸네일을 다시 보이게 함
            }
        }
    } 
});

// 특정 문자를 포함하는 채널의 비디오 썸네일을 다시 보이게 설정

const keyword = "카더"; 
const channelName = document.querySelectorAll('#channel-name');

channelName.forEach(title => {
    if (title && title.querySelector('#text')&&title.querySelector('#text').getAttribute('title')){
        if (title.querySelector('#text').getAttribute('title').includes(keyword)) {

            const thumbnail = title.closest('#dismissible').querySelector('ytd-thumbnail');
            
            if (thumbnail) {
                thumbnail.style.setProperty('display', 'block', 'important'); // 썸네일을 다시 보이게 함
            }

            const ytImgshadow = thumbnail.querySelector('yt-img-shadow');
            if (ytImgshadow) {
                ytImgshadow.style.setProperty('display', 'block', 'important'); // 썸네일을 다시 보이게 함
            }
        }
    } 
});
