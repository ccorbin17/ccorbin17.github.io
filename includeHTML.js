function includeHTML() {
    const z = document.getElementsByTagName("*");
    for (let i = 0; i < z.length; i++) {
        const elmnt = z[i];
        const file = elmnt.getAttribute("include-html");
        if (file) {
            fetch(file)
            .then(response => response.text())
            .then(data => {
                elmnt.innerHTML = data;
                   setTimeout(() => {
                    document.body.style.display = 'block'; // Add refresh for css
                }, 100);
            })
            .catch(error => console.log('Error:', error));
        return;
        }
    }
}

function includeHeadElements() {
    const headContent = `
        <title>Carina's Corner</title>
        <link rel="shortcut icon" type="image/x-icon" href="me.jpg" />
        <link rel="stylesheet" type="text/css" href="mystyle.css">
    `;
    document.head.insertAdjacentHTML('beforeend', headContent);
}

document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
    includeHeadElements();
});
