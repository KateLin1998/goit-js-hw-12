import{a as g,S as L,i}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const b="https://pixabay.com/api/",w="50595135-236ed99e353605725b41c38ac";async function p(e,r=1){const t={key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15};try{return(await g.get(b,{params:t})).data}catch{throw new Error("Помилка при отриманні зображень")}}const S=new L(".gallery a",{captions:!0,captionSelector:"self",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionDelay:250}),q=document.querySelector(".gallery");function m(e){const r=e.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}" title="${t.tags}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>
          <div class="gallery-info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </li>`).join("");q.insertAdjacentHTML("beforeend",r),S.refresh()}function v(){const e=document.querySelector(".gallery");e.innerHTML=""}function f(){document.querySelector(".loader").classList.remove("is-hidden")}function y(){document.querySelector(".loader").classList.add("is-hidden")}function h(){document.querySelector(".load-more").classList.remove("is-hidden")}function l(){document.querySelector(".load-more").classList.add("is-hidden")}const R=document.querySelector(".load-more"),$=document.querySelector(".form"),B=document.querySelector(".search-input");let s=1,d="",u=0;$.addEventListener("submit",async e=>{e.preventDefault();const r=B.value.trim();if(r===""){i.error({message:"Введіть запит для пошуку",position:"topRight"});return}d=r,s=1,v(),l(),f();try{const t=await p(d,s);if(u=t.totalHits,t.hits.length===0){i.error({message:"Нічого не знайдено за запитом",position:"topRight"});return}m(t.hits),u>s*15&&h()}catch{i.error({message:"Сталася помилка при отрманні даних",position:"topRight"})}finally{y()}});R.addEventListener("click",async()=>{s+=1,f(),l();try{const e=await p(d,s);m(e.hits),s*15>=u?(l(),i.info({message:"Ви завантажили всі доступні зображення",position:"topRight"})):h(),E()}catch{i.error({message:"Помилка при завантаженні додаткових зображень",position:"topRight"})}finally{y()}});function E(){const e=document.querySelector(".gallery-item");if(!e)return;const r=e.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
