window.onload = ()=>{

    const longUrlInput = document.getElementById('longUrl-input-id');
    const longToShortUrlButton = document.getElementById('longUrl-button-id');
    const shortURLOutput = document.getElementById('shortUrl-input-id');   
    const recentShortUrlsButton = document.getElementById('recent-shorturls-button-id');   

    let key= 0;        
    function isValidURL(urlValue) {
        var res = urlValue.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null);
    };

    longToShortUrlButton.onclick = event =>{      
        const errorURLFlag = isValidURL(longUrlInput.value);
        if(errorURLFlag == false && key == 0){
            document.location.href = "pageFail.html";
            return;
        }
        if(key == 0){
            const request = new Request('http://localhost:3000/urls', {
                method: 'POST',
                headers: new Headers({
                'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    longUrl: longUrlInput.value,
                }),
            });
                
            fetch(request)
                .then(res => res.json())
                .then(json => {
                    longUrlInput.value = json.shortUrl,
                    longToShortUrlButton.value = "Copy",
                    key = 1;
            });
        }
        else{
            const textarea = longUrlInput;
            textarea.select();
            document.execCommand('copy');
        }
    };
        
    recentShortUrlsButton.onclick = event =>{
        document.location.href = "recentUrls.html";
    };
};
