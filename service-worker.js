"use strict";var precacheConfig=[["/nba-game-excitement/index.html","5fe40474cf594e71fe669ebe8a666eca"],["/nba-game-excitement/static/css/main.718abab2.css","062fcc2382735e629430ce9a564ec404"],["/nba-game-excitement/static/js/main.936c53b2.js","9e4df195771eee98bc740e8e18c99bc9"],["/nba-game-excitement/static/media/ATL_logo.c82adca5.svg","c82adca5341e456e7cbc8fac827ac0a6"],["/nba-game-excitement/static/media/BKN_logo.ae41dbf4.svg","ae41dbf47537a7764fe19669235e97e5"],["/nba-game-excitement/static/media/BOS_logo.d1bb25d3.svg","d1bb25d3795ebaa99512f8a1f538a65d"],["/nba-game-excitement/static/media/CHA_logo.3d4651a1.svg","3d4651a1a07a93e132a70d30ffa8f49f"],["/nba-game-excitement/static/media/CHI_logo.59115b4e.svg","59115b4e776877a9557a2126a78a1fca"],["/nba-game-excitement/static/media/CLE_logo.420882b4.svg","420882b43d5db710bea4b70020f8f35d"],["/nba-game-excitement/static/media/DAL_logo.d5f1cc70.svg","d5f1cc70826d9e420849e341c5724bc5"],["/nba-game-excitement/static/media/DEN_logo.9b5d2bd7.svg","9b5d2bd73e239f637125394ee430c9da"],["/nba-game-excitement/static/media/DET_logo.8782fe91.svg","8782fe91be897dd94b4fc9776281bb3b"],["/nba-game-excitement/static/media/GSW_logo.f48e8cee.svg","f48e8cee4eb5884a86835c916a741655"],["/nba-game-excitement/static/media/HOU_logo.82237524.svg","82237524f51a3ca92d60d638337a3f34"],["/nba-game-excitement/static/media/IND_logo.c93344f8.svg","c93344f80f2258799ce8a8f09a033d6d"],["/nba-game-excitement/static/media/LAC_logo.0a4c0ac1.svg","0a4c0ac14c556c7642f5d1fca7f6aa2f"],["/nba-game-excitement/static/media/LAL_logo.a5f2ab12.svg","a5f2ab1202c7e1470d68d35ba5b83255"],["/nba-game-excitement/static/media/MEM_logo.024dd1ec.svg","024dd1ec8dc71b94e73095e25bf14215"],["/nba-game-excitement/static/media/MIA_logo.ab1a9a53.svg","ab1a9a53dc1cdd53294876deea76c4eb"],["/nba-game-excitement/static/media/MIL_logo.d7ca6153.svg","d7ca61532d6a6eb1469aa425a5234686"],["/nba-game-excitement/static/media/MIN_logo.d050d0b5.svg","d050d0b5ec98320c8e3aa217b294d65c"],["/nba-game-excitement/static/media/NBA_logo.55c0f977.svg","55c0f977f58b22210fa1dc4b1e198329"],["/nba-game-excitement/static/media/NOP_logo.840cf799.svg","840cf799a3c57be8fdf1e10e213fa347"],["/nba-game-excitement/static/media/NYK_logo.530a0f04.svg","530a0f044d7048b6adb744ecb3c3057a"],["/nba-game-excitement/static/media/OKC_logo.3639f258.svg","3639f258f077c511bdf491428c5b0671"],["/nba-game-excitement/static/media/ORL_logo.c4fdb54b.svg","c4fdb54be919080749dfb0220d3a2b86"],["/nba-game-excitement/static/media/PHI_logo.53718eeb.svg","53718eeb41b40f14913f2a3420e7d5c6"],["/nba-game-excitement/static/media/PHX_logo.882efa62.svg","882efa626154883d6d029dd075244ac1"],["/nba-game-excitement/static/media/POR_logo.3eab190e.svg","3eab190e6cfe75e35693bae09758615f"],["/nba-game-excitement/static/media/SAC_logo.2ad59a5c.svg","2ad59a5c43454f08c20f2d92c6582d44"],["/nba-game-excitement/static/media/SAS_logo.1eab7512.svg","1eab7512b07b6ac8da7584673cad1d38"],["/nba-game-excitement/static/media/TOR_logo.e307cbe8.svg","e307cbe80e223c498ff28a5b57987428"],["/nba-game-excitement/static/media/UTA_logo.f51f5614.svg","f51f5614b08dae2a73741602f5dbd7c3"],["/nba-game-excitement/static/media/WAS_logo.073ad0cb.svg","073ad0cbae047457d3879fa1f177d726"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/nba-game-excitement/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});