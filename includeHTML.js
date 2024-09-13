function includeHTML() {
    const z = document.getElementsByTagName("*");
    for (let i = 0; i < z.length; i++) {
        const elmnt = z[i];
        const file = elmnt.getAttribute("include-html");
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => elmnt.innerHTML = data)
                .catch(error => console.log('Error:', error));
            return;
        }
    }
}

document.addEventListener("DOMContentLoaded", includeHTML);
