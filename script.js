// Add any interactive JavaScript here if needed
// For a simple coloring page, this might remain empty or contain basic functionalities
console.log("Coloring page scripts loaded!");

function searchPages() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let coloringPageLinks = document.getElementById('coloringPageLinks');
    let links = coloringPageLinks.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        let p = links[i].getElementsByTagName('p')[0];
        if (p) {
            let textValue = p.textContent || p.innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                links[i].style.display = "";
            } else {
                links[i].style.display = "none";
            }
        }
    }
}
