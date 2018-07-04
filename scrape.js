// Your custom scraping script.

// Look at https://github.com/HackYourFutureBelgium/JavaScript2/tree/master/Projects/web-scraper
// for the version we showed in class.

document.addEventListener("keypress", function () {
    const rows = document.querySelectorAll('table')[2].querySelectorAll("tr.odd, tr.even");

    console.clear();

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];

        const actor = row.querySelector("[itemprop=name]").innerHTML.trim();

        const characterTag = row.querySelector("td.character");
        const characterAnchor = characterTag.querySelector("a");
        let character;

        if (characterAnchor != null) {
            character = characterAnchor.innerHTML;
        } else {
            character = characterTag.innerHTML;
        }
        console.log("Actor: " + actor + ", Character: " + character.replace(/\s+|\s+$/g, ' ').trim());
    }
});
document.addEventListener("dblclick", function () {
    console.clear();
    console.log("%c             There is no spoon!                   ", "background: black; color: #00E700;");
    console.log("%c              ```:sddmdy+/-`                      ", "background: black; color: #00E700");
    console.log("%c            `/mNNNMNMMMMMMMNo`                    ", "background: black; color: #00E700");
    console.log("%c           `oMMMmysyho+sdNMMMy`                   ", "background: black; color: #00E700");
    console.log("%c           .dMNh/-.``` ``.omMM+`                  ", "background: black; color: #00E700");
    console.log("%c           .mMmho/...`````.oNMh-                  ", "background: black; color: #00E700");
    console.log("%c           /NNms+/-..````..+NMN:                  ", "background: black; color: #00E700");
    console.log("%c           .dMMMMNdo+hdNNNdymMM/                  ", "background: black; color: #00E700");
    console.log("%c           .mNMMMMM+-NMMMMMyyNs.                  ", "background: black; color: #00E700");
    console.log("%c           -mmmhyod/`-+o++:.o+:.                  ", "background: black; color: #00E700");
    console.log("%c           :mdds/oho/:.``.-::`-`                  ", "background: black; color: #00E700");
    console.log("%c           `/ymdodmy/:`..:/:/-`                   ", "background: black; color: #00E700");
    console.log("%c             :mdddhso+++-////.                    ", "background: black; color: #00E700");
    console.log("%c             `/hdhyso/:/+oyo:`                    ", "background: black; color: #00E700");
    console.log("%c              .+ydo/::/odmmdy-                    ", "background: black; color: #00E700");
    console.log("%c              .smddmNNMMNmmdhs.                   ", "background: black; color: #00E700");
    console.log("%c              .hMNNMMMNNNmmddhs-`                 ", "background: black; color: #00E700");
    console.log("%c              -NMMMMNNNmmmmmddhysoo/:-.`          ", "background: black; color: #00E700");
    console.log("%c              :MMMNNmmmmmmddddddddhhhhhys+/:.`    ", "background: black; color: #00E700");
    console.log("%c            `/dMMMNNmmmmmmddddddddddddhhhhyyys+`  ", "background: black; color: #00E700");
    console.log("%c          -omMMMMNNNNNmmmmmmmdmddddddddddhhhhyy+. ", "background: black; color: #00E700");
    console.log("%c       `/hNMNNNNNmNNmNmmmmmmmmmmmmmmmmmmdddhhhys/`", "background: black; color: #00E700");
    console.log("%c     .omNNNNNNNMNNNNNNNNNmmmmmmmmmmmmmmmmddddhhys.", "background: black; color: #00E700");
    console.log("%c   .smNNNNNNNNNNNNNNNmNNNNNmmmmmmmmmmNmmdddddhhys+", "background: black; color: #00E700");
    console.log("%c `sNNMMNNNNNNNNNNNNNNNNNNNNmmmmmmmmmNMNmmddddhhyys", "background: black; color: #00E700");
});
// End of File