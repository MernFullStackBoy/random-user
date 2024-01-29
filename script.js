const api = "https://randomuser.me/api/?results=201"

const cards = document.querySelector(".cards")

const div = document.querySelector("div")

const img = document.querySelector(".image")

const refreshBtn = document.querySelector("button")

const overlay = document.querySelector(".overlay")

const wrong = document.querySelector(".wrong")

function loader(load) {
    if (load) {
        overlay.classList.remove("hide")
    } else {
        overlay.classList.add("hide")
    }
}

refreshBtn.addEventListener("click", () => {
    window.location.reload()
})

loader(true)
fetch(api).then(data => data.json()).then(data => {
    data?.results.forEach((item) => {
        const { name, phone, email, picture } = item

        cards.innerHTML += `
        
        <aside class="card">
        <div class="images">
            <img src="${picture.large}" alt="User">
        </div>
        <h3>Hello. My name is</h3>
        <h1>${name.first} ${name.last}</h1>
        <h2>${email}</h2>
        <h4>${phone}</h4>
    </aside>

        `
        loader(false)

    })
    
})

    .catch(() => {
        wrong.style.display = "flex"
        loader(false)
    })