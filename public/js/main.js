import { data } from './data.js'

document.addEventListener("DOMContentLoaded", () => {
    let counter_p = document.getElementById("total-projects");
    let app = document.getElementById("app");
    let projects = ""
    counter_p.innerHTML = data.length;
    data.forEach(ele => {
        projects += set_template(ele.image, ele.title, ele.description)
    })
    app.innerHTML = projects
})

function set_template(image, title, description) {

    let template = `<article class="project shadow">
                    <div class="image-project">
                        <img src="${image}" alt="recipe">
                    </div>
                    <div class="description-project">
                        <h3>${title}</h3>
                        <p class="desc">${description}</p>

                    </div>
                </article>
              `;
    return template;
}