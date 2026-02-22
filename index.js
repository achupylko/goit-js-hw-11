import{a as f,S as m,i as y}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="54679723-82f3546e98f06279d87186197";function g(s){return f.get("https://pixabay.com/api/",{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{console.log(r)})}const c=document.querySelector(".gallery"),n=document.querySelector("#loader");function b(s){const r=s.map(({webformatURL:a,largeImageURL:e,tags:t,likes:i,views:d,comments:u,downloads:p})=>`
        <li class="card">
          <a class="card-link" href="${e}">
            <img
              class="card-image"
              src="${a}"
              data-source="${e}"
              alt="${t}"
            />
          </a>
          <ul class="card-body">
            <li class="card-body-item"><p class="card-body-title">likes</p><p class="card-body-text">${i}</p></li>
            <li class="card-body-item"><p class="card-body-title">views</p><p class="card-body-text">${d}</p></li>
            <li class="card-body-item"><p class="card-body-title">comments</p><p class="card-body-text">${u}</p></li>
            <li class="card-body-item"><p class="card-body-title">downloads</p><p class="card-body-text">${p}</p></li>
          </ul>
        </li>
      `).join("");c.innerHTML=r,new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function x(){c.innerHTML=""}function L(){n.classList.remove("hidden")}function O(){n.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",$);function $(s){s.preventDefault();const{"search-text":r}=s.target.elements,o=r.value.trim();if(!o)return;x(),L(),g(o).then(e=>{const t=e.hits;if(t.length===0){y.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#ef4040",position:"topRight",timeout:3e3,closeOnClick:!0,drag:!1,pauseOnHover:!1,close:!1,progressBar:!1,animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",maxWidth:"432px"});return}b(t)}).catch(e=>{console.log(e.message)}).finally(O),l.reset()}
//# sourceMappingURL=index.js.map
