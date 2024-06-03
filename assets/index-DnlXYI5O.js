(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function c(){return(await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=1302")).json()).results.map(e=>e.name)}async function a(s){return await(await fetch(`https://pokeapi.co/api/v2/pokemon/${s}`)).json()}function p(s){const o=document.querySelector("#app"),r=s.map(n=>`<option value="${n}">${n}</option>`).join("");o.innerHTML=`
    <div class="flex flex-col items-center">
      <select id="pokemon-dropdown" class="mt-4 p-2 border border-gray-300 rounded">
        <option value="">Select a Pokémon</option>
        ${r}
      </select>
      <div id="pokemon-details" class="mt-4 w-full max-w-md"></div>
    </div>
  `,document.querySelector("#pokemon-dropdown").addEventListener("change",n=>{const e=n.target.value;e?l(e):document.querySelector("#pokemon-details").innerHTML=""})}async function l(s){const o=await a(s),r=document.querySelector("#pokemon-details");r.innerHTML=`
    <div class="pokemon-card bg-white p-4 rounded shadow-md text-center">
      <h2 class="text-2xl font-bold capitalize">${o.name}</h2>
      <img class="mx-auto my-4" src="${o.sprites.front_default}" alt="${o.name}" />
      <p><strong>Height:</strong> ${o.height}</p>
      <p><strong>Weight:</strong> ${o.weight}</p>
      <p><strong>Type:</strong> ${o.types.map(n=>n.type.name).join(", ")}</p>
    </div>
  `}c().then(s=>{p(s)});
