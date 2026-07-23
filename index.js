import{a as g,S as h,i as a}from"./assets/vendor-BvYRDUo2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",b="56829172-09caa9cc3432d5e317574dd6c";function L(i){return g.get(y,{params:{key:b,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw r})}const d=document.querySelector(".gallery"),m=document.querySelector(".loader"),E=new h(".gallery a",{captionsData:"alt",captionDelay:250});function S(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:p,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${s}</p>
          <p><b>Comments:</b> ${p}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>
    `).join("");d.innerHTML=r,E.refresh()}function w(){d.innerHTML=""}function q(){m.classList.remove("is-hidden")}function l(){m.classList.add("is-hidden")}const c=document.querySelector(".form"),u=c.elements["search-text"];c.addEventListener("submit",v);function v(i){i.preventDefault();const r=u.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}q(),w(),L(r).then(o=>{if(l(),!o.hits||o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(o.hits)}).catch(()=>{l(),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}),c.reset(),u.focus()}
//# sourceMappingURL=index.js.map
