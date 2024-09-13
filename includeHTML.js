function includeHTML() {
    const elements = document.querySelectorAll("[include-html]");
    elements.forEach(elmnt => {
        const file = elmnt.getAttribute("include-html");
        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    elmnt.innerHTML = data;
                    document.dispatchEvent(new Event('injectionComplete'));
                })
                .catch(error => console.log('Error loading HTML:', error));
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    includeHTML();
    
    document.addEventListener("injectionComplete", () => {
        console.log("HTML content injected and layout adjustments triggered.");
    });
});
