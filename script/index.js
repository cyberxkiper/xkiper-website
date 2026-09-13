let htmlCode = ''

contentData.forEach(function(content) {
   const codeContent= `<div class="main-container">
        <div class="content-container">            
            <div class="vertical">    
                <h2>${content.headerName}</h2>
                <div class="information">
                    <p>${content.info}</p>
                </div>
                <div class="button-container">
                    <a href="${content.linkToSite}">
                    <button class="buttons">${content.buttonContent}</button></a>
                </div>
            </div>
            <div class="image-section">
                <img class="${content.imageClass}" src="${content.linkToImage}" alt="" >
            </div>
        </div>
    </div>`  
    htmlCode+=codeContent
    document.querySelector('main').innerHTML = htmlCode;
})