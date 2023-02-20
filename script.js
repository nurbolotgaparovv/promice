
const div = document.querySelector('.about')
 const btn=document.querySelector(".btn")
 const modal=document.querySelector("#modal")
btn.addEventListener('click', () => {
    if (!btn.classList.contains('active')) {
        btn.classList.add('active')
        modal.style.transform = 'scale(1)'
        btn.innerHTML = 'close modal'
    } else {
        btn.classList.remove('active')
        modal.style.transform = 'scale(0)'
        btn.innerHTML = 'open modal'
    }
})

    fetch(`https://restcountries.com/v3.1/all`)
        .then(data => data.json())
        .then( res=> {
            console.log(res)
            res.map(el=> {
                div.innerHTML +=`<div class="divCountry">
<span class="spanA">
<img src="${el.flags.png}" alt="">
   <h1> <span>name:</span>  ${el.name.common}</h1>
   <h1> <span>people</span> : ${el.population}</h1>
   <h1> <span>country</span>: ${el.region}</h1>
   <h1> <span>area</span>: ${el.area}km2</h1>
   <h1> <span>capital</span>: ${el.capital}</h1>
</span>
  
</div>`
            })
        })
function search() {
    let input = document.getElementById("inputSearch");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("list");
    let li = ul.getElementsByClassName("divCountry");
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByClassName("spanA")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
document.addEventListener('keyup', search);