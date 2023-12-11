window.addEventListener("load", () => {
    document.querySelector("body > div").classList.add("row");
  
    let respondent_type = Number(response.answers.find(answer => answer.questionCode == "RESPONDENT").code);
    let country = Number(response.answers.find(answer => answer.questionCode == "COUNTRY").code);

    let team = document.querySelector("#team");
    let team_logo = document.querySelector("#team_logo");
    let team_banner = document.querySelector("#team_banner");
    let team_logo_container = document.querySelector("#team_logo_container");

    let banner_header = document.querySelector("#banner_header");
    let banner_title_1 = document.querySelector("#banner_text_1");
    let banner_title_2 = document.querySelector("#banner_text_2");
    let banner_title_3 = document.querySelector("#banner_text_3");
    let banner_title_4 = document.querySelector("#banner_text_4");
    let banner_title_5 = document.querySelector("#banner_text_5");

    if (respondent_type == 1 && country == 1) {
        // Panelist and English
        team.innerText = "The Wahsel team";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/579025/9b933618b063daeba4afec00fdc564e5.png";
        team_logo.style.width = "200px";
        team_logo_container.classList.add("bg-light", "py-3");
        team_banner.src = "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=996&t=st=1688141021~exp=1688141621~hmac=c1e134e78869d65b8ad85b9a6e943073830d213df0285feb8c7a09f49ba34349";

    } else if (respondent_type == 2 && country == 1) {
        // XXL Member and English 
        team.innerText = "The XXL team";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/29ab0ea8a857c844b091bc31fbcaec54.png";
        team_banner.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/6dc679766b8bf177c5fcaba261e22ef2.png";
        team_logo_container.classList.add("py-3");
        team_logo_container.style.background = "#000";

    } else if (respondent_type == 1 && country == 2) {
        // Panelist and Norwegian 
        team.innerText = "Wahsel-teamet";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/579025/9b933618b063daeba4afec00fdc564e5.png";
        team_logo.style.width = "200px";
        team_logo_container.classList.add("bg-light", "py-3");
        team_banner.src = "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=996&t=st=1688141021~exp=1688141621~hmac=c1e134e78869d65b8ad85b9a6e943073830d213df0285feb8c7a09f49ba34349";

    } else if (respondent_type == 2 && country == 2) {
        // XXL Member and Norwegian 
        team.innerText = "XXL Sport & Villmark";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/29ab0ea8a857c844b091bc31fbcaec54.png";
        team_banner.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/6dc679766b8bf177c5fcaba261e22ef2.png";
        team_logo_container.classList.add("py-3");
        team_logo_container.style.background = "#000";

        // Norwegian translation
        banner_header.innerText = "Hjelp XXL til å bli bedre!";
        banner_title_1.innerText = "Delta i kundeundersøkelsen og bli med i trekning av ett gavekort på 5000,-";
        banner_title_2.innerText = "Kjære kunde,";
        banner_title_3.innerText = "Vi trenger din hjelp for å bli bedre. Ved å svare på denne undersøkelsen er du med på å legge grunnlaget for våre prioriteringer fremover. Her er det viktig at svarene reflekterer hva som er viktig for deg som kunde og hva du mener er riktig for oss å bli bedre på.";
        banner_title_4.innerText = "Denne undersøkelsen sendes ut til et tilfeldig utvalg av våre medlemmer. Undersøkelsen tar ca. 10 minutter å gjennomføre, og alle som svarer er med i trekning av ett gavekort på 5000kr hos XXL. Vinnerne trekkes 1. september og vil kontaktes på e-post. For å være med i trekningen må du derfor registrere din e-postadresse i undersøkelsen. E-postadresser registrert i forbindelse med undersøkelsen vil bli slettet når vinnerne er kontaktet.";
        banner_title_5.innerHTML = "Vi håper du deltar for å hjelpe oss til å bli bedre.</br>Vennlig hilsen";

    } else if (respondent_type == 1 && country == 3) {
        // Panelist and Swedish 
        team.innerText = "Wahsel-teamet";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/579025/9b933618b063daeba4afec00fdc564e5.png";
        team_logo.style.width = "200px";
        team_logo_container.classList.add("bg-light", "py-3");
        team_banner.src = "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=996&t=st=1688141021~exp=1688141621~hmac=c1e134e78869d65b8ad85b9a6e943073830d213df0285feb8c7a09f49ba34349";

    } else if (respondent_type == 2 && country == 3) {
        // XXL Member and Swedish 
        team.innerText = "XXL Sport & Villmark";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/29ab0ea8a857c844b091bc31fbcaec54.png";
        team_banner.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/6dc679766b8bf177c5fcaba261e22ef2.png";
        team_logo_container.classList.add("py-3");
        team_logo_container.style.background = "#000";

        // Swedish translation
        banner_header.innerText = "Hjälp XXL att bli bättre!";
        banner_title_1.innerText = "Delta i vår kundundersökning och var med i utlottningen av ett presentkort värt 5000 SEK";
        banner_title_2.innerText = "Kära kund,";
        banner_title_3.innerText = "Vi behöver din hjälp för att bli bättre. Genom att svara på denna undersökning hjälper du oss att lägga grunden för våra framtida prioriteringar. Det är viktigt att dina svar speglar vad som är viktigt för dig som kund och vad du anser att vi kan förbättra.";
        banner_title_4.innerText = "Denna undersökning skickas till ett slumpmässigt urval av våra medlemmar. Undersökningen tar cirka 10 minuter att genomföra, och alla som svarar är med i utlottningen av ett presentkort värt 5000 SEK hos XXL. Vinnaren dras den 1 september och kommer att bli kontaktad via e-post. För att delta i utlottningen måste du därför registrera din e-postadress i undersökningen. E-postadresser som registreras i samband med undersökningen kommer att raderas när vinnaren har kontaktats.";
        banner_title_5.innerHTML = "Vi hoppas att du deltar för att hjälpa oss att bli bättre.</br>Vänliga hälsningar";

    } else if (respondent_type == 1 && country == 4) {
        // Panelist and Finnish 
        team.innerText = "Wahsel-tiimi";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/579025/9b933618b063daeba4afec00fdc564e5.png";
        team_logo.style.width = "200px";
        team_logo_container.classList.add("bg-light", "py-3");
        team_banner.src = "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=996&t=st=1688141021~exp=1688141621~hmac=c1e134e78869d65b8ad85b9a6e943073830d213df0285feb8c7a09f49ba34349";

    } else if (respondent_type == 2 && country == 4) {
        // XXL Member and Finnish 
        team.innerText = "XXL Sport & Villmark";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/29ab0ea8a857c844b091bc31fbcaec54.png";
        team_banner.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/6dc679766b8bf177c5fcaba261e22ef2.png";
        team_logo_container.classList.add("py-3");
        team_logo_container.style.background = "#000";

        // Finland translation
        banner_header.innerText = "Auta XXL:ää paranemaan!";
        banner_title_1.innerText = "Vastaa asiakaskyselyyn, arvomme kaikkien osallistuneiden kesken 500 euron arvoisen lahjakortin!";
        banner_title_2.innerText = "Arvoisa asiakas,";
        banner_title_3.innerText = "Tarvitsemme apuasi toimintamme kehittämiseksi! Vastaamalla tähän kyselyyn edesautat meitä kehitysosa-alueiden priorisoimisessa. On tärkeää, että vastauksesi kuvastavat sitä, mikä on tärkeää sinulle asiakkaana ja mitä osa-alueita meidän tulisi yrityksenä mielestäsi kehittää.";
        banner_title_4.innerText = "Tämä kysely lähetetään osalle jäsenistämme. Kyselyyn vastaaminen kestää noin 10 minuuttia, ja kaikkien osallistuneiden kesken arvotaan 500 euron arvoinen XXL-lahjakortti. Voittaja arvotaan 1. syyskuuta, minkä jälkeen häneen ollaan yhteydessä sähköpostitse. Jotta voit osallistua arvotaan, tulee sinun rekisteröidä sähköpostiosoitteesi – kaikki arvontaa varten rekisteröidyt sähköpostiosoitteet poistetaan, kun arvonnan voittaja on tavoitettu.";
        banner_title_5.innerHTML = "Toivomme, että osallistut kyselyyn ja autat meitä kehittämään toimintaamme.</br>Ystävällisin terveisin";

    } else if (respondent_type == 1 && country == 5) {
        // Panelist and Danish 
        team.innerText = "Wahsel-holdet";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/579025/9b933618b063daeba4afec00fdc564e5.png";
        team_logo.style.width = "200px";
        team_logo_container.classList.add("bg-light", "py-3");
        team_banner.src = "https://img.freepik.com/free-photo/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display_482257-2443.jpg?w=996&t=st=1688141021~exp=1688141621~hmac=c1e134e78869d65b8ad85b9a6e943073830d213df0285feb8c7a09f49ba34349";

    } else if (respondent_type == 2 && country == 5) {
        // XXL Member and Danish 
        team.innerText = "XXL-holdet";
        team_logo.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/29ab0ea8a857c844b091bc31fbcaec54.png";
        team_banner.src = "https://syno-media-input.s3.eu-west-1.amazonaws.com/998230/6dc679766b8bf177c5fcaba261e22ef2.png";
        team_logo_container.classList.add("py-3");
        team_logo_container.style.background = "#000";
    }
});