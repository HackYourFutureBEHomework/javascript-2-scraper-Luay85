// Your custom scraping script.

// Look at https://github.com/HackYourFutureBelgium/JavaScript2/tree/master/Projects/web-scraper
// for the version we showed in class.

document.addEventListener("keypress", function () {
    let rows = document.querySelectorAll('table')[2].querySelectorAll("tr.odd, tr.even");
    
    console.clear();

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        let actor = row.querySelector("[itemprop=name]").innerHTML.trim();

        let characterTag = row.querySelector("td.character");
        let characterAnchor = characterTag.querySelector("a");
        let character;

        if (characterAnchor != null) {
            character = characterAnchor.innerHTML;
        } else {
            character = characterTag.innerHTML;
        }
        console.log("Actor: " + actor + ", Character: " + character.replace(/\s+|\s+$/g, ' ').trim());
    }
});