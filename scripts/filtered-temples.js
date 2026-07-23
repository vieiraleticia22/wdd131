const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Novos templos
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-54142.jpg"
    },
    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-1818.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-1029.jpg"
    }
];

const gallery = document.querySelector(".gallery");
function displayTemples(temples) {
    gallery.innerHTML = "";

    temples.forEach((temple) => {
        const card = document.createElement("figure");

        const title = document.createElement("h2");
        title.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName
        img.loading = "lazy";
        
        card.appendChild(title);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);
        

        gallery.appendChild(card);
            
    });
}

displayTemples(temples);

const pageTitle = document.querySelector("main h1");

document.querySelector("#home").addEventListener("click", () => {
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    pageTitle.textContent = "Old Temples";

    const oldTemples = temples.filter(temple => {
        return new Date(temple.dedicated).getFullYear() < 1900;
    });
    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
    pageTitle.textContent = "New Temples";

    const newTemples = temples.filter(temple => {
        return new Date(temple.dedicated).getFullYear() > 2000;
    });
    displayTemples(newTemples)
});

document.querySelector("#large").addEventListener("click", () => {
    pageTitle.textContent = "Large Temples";

    const largeTemples = temples.filter(temple => temple.area > 90000);

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
    pageTitle.textContent = "Small Temples";
    const smallTemples = temples.filter(temple => temple.area < 10000);

    displayTemples(smallTemples);
});



const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;