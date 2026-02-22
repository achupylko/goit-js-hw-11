import{a as p,S as m,i as n}from"./assets/vendor-DQiTczw4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="54679723-82f3546e98f06279d87186197";function g(r){return p.get("https://pixabay.com/api/",{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data).catch(s=>{throw new Error(s.message)})}const c=document.querySelector(".gallery"),l=document.querySelector("#loader"),h=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function b(r){const s=r.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:i,comments:u,downloads:f})=>`
        <li class="card">
          <a class="card-link" href="${o}">
            <img
              class="card-image"
              src="${a}"
              data-source="${o}"
              alt="${e}"
            />
          </a>
          <ul class="card-body">
            <li class="card-body-item"><p class="card-body-title">likes</p><p class="card-body-text">${t}</p></li>
            <li class="card-body-item"><p class="card-body-title">views</p><p class="card-body-text">${i}</p></li>
            <li class="card-body-item"><p class="card-body-title">comments</p><p class="card-body-text">${u}</p></li>
            <li class="card-body-item"><p class="card-body-title">downloads</p><p class="card-body-text">${f}</p></li>
          </ul>
        </li>
      `).join("");c.innerHTML=s,h.refresh()}function O(){c.innerHTML=""}function x(){l.classList.remove("hidden")}function F(){l.classList.add("hidden")}const d=document.querySelector(".form");d.addEventListener("submit",L);function L(r){r.preventDefault();const{"search-text":s}=r.target.elements,a=s.value.trim();if(!a)return;O(),x(),g(a).then(e=>{const t=e.hits;if(t.length===0){n.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#ef4040",position:"topRight",timeout:3e3,closeOnClick:!0,drag:!1,pauseOnHover:!1,close:!1,progressBar:!1,animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",maxWidth:"432px"});return}b(t)}).catch(e=>{console.log(e.message),n.show({message:`${e.message}`,messageColor:"#FFFFFF",backgroundColor:"#ef4040",position:"topRight",timeout:3e3,closeOnClick:!0,drag:!1,pauseOnHover:!1,close:!1,progressBar:!1,animateInside:!1,transitionIn:"fadeIn",transitionOut:"fadeOut",maxWidth:"432px"})}).finally(F),d.reset()}
//# sourceMappingURL=index.js.map
