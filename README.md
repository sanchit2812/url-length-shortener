# URL - Shortener

## Demo link: <a target="_blank" href='https://tinyurl.netlify.app/index.html'> Url Shortener</a>

## This web-app has the following features:

<ol>
	<li>URL shortener Home Page: It provides you an input field in which you can enter your long Url which you want to shorten </li>
  <li>Recently Shortened URLs list page: It shows all the recently shortened Urls in a table. </li>
  <li> Error Page: It will show you an error page in case you entered a wrong Url.
</ol>

## API Specs:

### Get all Urls:

```js
GET /urls/
Sample Response Body:
{
    "zmdKXWB8F": "https://github.com/sanchit2812/url-length-shortener",
    "7xTC-U_ky": "https://github.com/sanchit2812/url-length-shortener/blob/master/app.js"
}
Status: 200, 404 ("No urls present");
```
### Shorten a URL:

```js
POST /urls
Sample Request Body:
{
    "longUrl" : "https://github.com/sanchit2812/url-length-shortener/blob/master/app.js"
}

```

### Get a particular Url:

```js
GET /url/:shortUrlId
Sample Response Body:
{
  "longUrl" : "https://github.com/sanchit2812/url-length-shortener/blob/master/app.js"	
}
(It redirects to the Url's link)
Status: 200, 404 ("This URL is not shortened by our service")
```
