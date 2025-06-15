import{a as L,S as b,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const w="https://pixabay.com/api/",S="50595135-236ed99e353605725b41c38ac";async function f(t,r=1){const e={key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await L.get(w,{params:e})).data}catch{throw new Error("Помилка при отриманні зображень")}}const v=new b(".gallery a",{captions:!0,captionSelector:"self",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionDelay:250}),q=document.querySelector(".gallery");function m(t){const r=t.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}" title="${e.tags}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>
          <div class="gallery-info">
            <p><b>Likes:</b> ${e.likes}</p>
            <p><b>Views:</b> ${e.views}</p>
            <p><b>Comments:</b> ${e.comments}</p>
            <p><b>Downloads:</b> ${e.downloads}</p>
          </div>
        </li>`).join("");q.insertAdjacentHTML("beforeend",r),v.refresh()}function R(){const t=document.querySelector(".gallery");t.innerHTML=""}function y(){document.querySelector(".loader").classList.remove("is-hidden")}function h(){document.querySelector(".loader").classList.add("is-hidden")}const p=document.querySelector(".load-more"),$=document.querySelector(".form"),B=document.querySelector(".search-input");let i=1,l="",d=0;$.addEventListener("submit",async t=>{t.preventDefault();const r=B.value.trim();if(r===""){n.error({message:"Введіть запит для пошуку",position:"topRight"});return}l=r,i=1,R(),u(),y();try{const e=await f(l,i);if(d=e.totalHits,e.hits.length===0){n.error({message:"Нічого не знайдено за запитом",position:"topRight"});return}m(e.hits),d>i*15&&g()}catch{n.error({message:"Сталася помилка при отрманні даних",position:"topRight"})}finally{h()}});p.addEventListener("click",async()=>{i+=1,y(),u();try{const t=await f(l,i);m(t.hits),i*15>=d?(u(),n.info({message:"Ви завантажили всі доступні зображення",position:"topRight"})):g(),E()}catch{n.error({message:"Помилка при завантаженні додаткових зображень",position:"topRight"})}finally{h()}});function E(){const t=document.querySelector(".gallery-item");if(!t)return;const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}function g(){p.classList.remove("is-hidden")}function u(){p.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
