chrome.storage.onChanged.addListener(() => {
    chrome.storage.sync.get(['thumbnailMode', 'exceptCharacter', 'exceptChannel'], function (items) {
        console.log(items.thumbnailMode)
        if (items.thumbnailMode) {
            // 'hidden' 모드가 선택된 경우 썸네일을 숨김
            if (items.thumbnailMode === 'hidden') {
                hideThumbnail();
                hideSpecificThumbnail();
                // exceptCharacter 옵션이 설정된 경우 특정 키워드가 포함된 썸네일을 다시 표시
                if (items.exceptCharacter) {
                    console.log(items.exceptCharacter)
                    showSpecificThumbnail(items.exceptCharacter, "videoTitle");
                }
                // exceptChannel 옵션이 설정된 경우 특정 채널의 썸네일을 다시 표시
                if (items.exceptChannel) {
                    console.log(items.exceptChannel)
                    showSpecificThumbnail(items.exceptChannel, "channelName");
                }
            }
            else if (items.thumbnailMode === 'normal') {
                showAllThumbnail();
            }
        }
    });
});

function hideThumbnail() {
    const style = document.createElement('style');
    //  .yt-core-image, #playlist-thumbnails, yt-avatar-shape, ytd-playlist-video-thumbnail-renderer , .html5-video-container
    const css = `
    ytd-thumbnail, #playlist-thumbnails, yt-img-shadow {
    display: none !important;
  }
`;
    style.setAttribute('blokc-thumbnail-style', 'true');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}

function showAllThumbnail() {
    console.log("showAllThumbnail");
    const styles = document.querySelectorAll('style[blokc-thumbnail-style="true"]');
    styles.forEach(style => {
        document.head.removeChild(style);
    });
}

//검색어로 예외처리된 썸네일들 다시 숨기기. -display속성
function hideSpecificThumbnail(){
    const thumbnails = document.querySelectorAll('[thumbnail-block="true"]');
    console.log("del");
    thumbnails.forEach(thumbnail => {
        thumbnail.style.removeProperty('display');
        thumbnail.removeAttribute('thumbnail-block');
        console.log("deleted");
    });
}


function showSpecificThumbnail(keyword, option) {
    
    hideSpecificThumbnail();

    let elements = ''
    if (option == 'channelName') {
        elements = document.querySelectorAll('#channel-name');
    }
    else if (option == 'videoTitle') {
        elements = document.querySelectorAll('#video-title');
    }


    elements.forEach(element => {
        if (option == 'channelName') {
            if (element.querySelector('#text')) {
                element = element.querySelector('#text')
            }
        }
        else if (option == 'videoTitle') {
        }

        //공통영역
        if (element.getAttribute('title') && element.getAttribute('title').includes(keyword)) {
            const thumbnail = element.closest('#dismissible').querySelector('ytd-thumbnail');

            if (thumbnail) {
                thumbnail.style.setProperty('display', 'block', 'important'); // 썸네일을 다시 보이게 함
                thumbnail.setAttribute('thumbnail-block', 'true');
            }

            const ytImgshadow = thumbnail.querySelector('yt-img-shadow');
            if (ytImgshadow) {
                ytImgshadow.style.setProperty('display', 'block', 'important'); // 썸네일을 다시 보이게 함
                ytImgshadow.setAttribute('thumbnail-block', 'true');
            }
        }
    }
    );
}


