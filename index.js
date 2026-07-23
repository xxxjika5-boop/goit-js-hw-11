import{a as p,S as g,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="56829172-09caa9cc3432d5e317574dd6c";function b(i){return p.get(h,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw r})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function E(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${f}</p>
          <p><b>Downloads:</b> ${m}</p>
        </div>
      </li>
    `).join("");u.innerHTML=r,L.refresh()}function S(){u.innerHTML=""}function w(){d.classList.remove("is-hidden")}function q(){d.classList.add("is-hidden")}const l=document.querySelector(".form"),c=l.elements["search-text"];l.addEventListener("submit",v);function v(i){i.preventDefault();const r=c.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}w(),S(),b(r).then(o=>{if(!o.hits||o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}E(o.hits)}).catch(()=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{q()}),l.reset(),c.focus()}
//# sourceMappingURL=index.js.map
