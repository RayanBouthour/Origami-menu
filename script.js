/* =========================================================
   ORIGAMI SUSHI BAR — MENU QR
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   🟢 1. CATÉGORIES PRINCIPALES
   ========================================================= */

const categoriesOrder = [

    
    {
        id: "entrees",
        fr: "Entrées",
        en: "Appetizers"
    },

    {
        id: "sushi",
        fr: "Sushi",
        en: "Sushi"
    },

    {
        id: "plats-chauds",
        fr: "Plats Chauds",
        en: "Hot Dishes"
    },

    {
        id: "accompagnements",
        fr: "Accompagnements",
        en: "Sides"
    },

    {
        id: "desserts",
        fr: "Desserts",
        en: "Desserts"
    },

    {
        id: "boissons",
        fr: "Boissons",
        en: "Drinks"
    }

];



/* =========================================================
   🟢 2. SOUS-CATÉGORIES
   ========================================================= */

const subcategoriesOrder = {


    "entrees": [
        {
            id: "soupes",
            fr: "Soupes",
            en: "Soups"
        },

        {
            id: "gyozas",
            fr: "Gyozas",
            en: "Potstickers"
        },
       
        {
            id: "salades",
            fr: "Salades",
            en: "Salads"
        },

        {
            id: "tartares",
            fr: "Tartares",
            en: "Tartares"
        }

    ],



    "sushi": [

        {
            id: "plateaux",
            fr: "Plateaux",
            en: "Sets"
        },

        {
            id: "sashimis",
            fr: "Sashimis",
            en: "Sashimis"
        },
       
        {
            id: "nigiris",
            fr: "Nigiris",
            en: "Nigiris",
        },

        {
            id: "gunkan-maki",
            fr: "Gunkan Maki",
            en: "Gunkan Maki",
        },

        {
            id: "gunkan-fusion",
            fr: "Gunkan Fusion",
            en: "Fusion Gunkan",
        },

        {
            id: "hosomaki",
            fr: "Hosomaki",
            en: "Hosomaki",
        },

        {
            id: "california-rolls",
            fr: "California Rolls",
            en: "California Rolls",
        },

        {
            id: "futomaki",
            fr: "Futomaki",
            en: "Futomaki",
        },

        {
            id: "rouleaux-du-chef",
            fr: "Rouleaux Du Chef",
            en: "Chef's Special Rolls",
        },

        {
            id: "green-maki",
            fr: "Green Maki",
            en: "Green Maki",
        },

        {
            id: "sushi-cake",
            fr: "Sushi Cake",
            en: "Sushi Cake",
        },

        {
            id: "sushi-panko",
            fr: "Sushi Panko",
            en: "Sushi Panko",
        },

        {
            id: "crunchy-rolls",
            fr: "Crunchy Rolls",
            en: "Crunchy Rolls",
        },

        {
            id: "bols-de-riz-garnis",
            fr: "Bols de Riz Garnis",
            en: "Rice Bowls",
        },

        {
            id: "tataki",
            fr: "Spécialiés Tataki",
            en: "Tataki Specials",
        },

        {
            id: "Onigarazu",
            fr: "Onigarzu",
            en: "Onigarazu",
        },

    ],


    "plats-chauds": [

        {
            id: "kushikatsu",
            fr: "Kushikatsu",
            en: "Kushikatsu"
        },

        {
            id: "yakitori",
            fr: "Yakitori",
            en: "Yakitori"
        },

        {
            id: "gyoza",
            fr: "Gyoza",
            en: "Gyoza"
        },

        {
            id: "tempura",
            fr: "Tempura",
            en: "Tempura"
        }

    ],



    "menus": [

        {
            id: "menus-sushi",
            fr: "Menus Sushi",
            en: "Sushi Sets"
        },

        {
            id: "menus-maki",
            fr: "Menus Maki",
            en: "Maki Sets"
        },

        {
            id: "menus-famille",
            fr: "Menus Famille",
            en: "Family Sets"
        }

    ],



    "desserts": [

        {
            id: "desserts",
            fr: "Desserts",
            en: "Desserts"
        }

    ],



    "boissons": [

        {
            id: "softs",
            fr: "Softs",
            en: "Soft Drinks"
        },

        {
            id: "eaux",
            fr: "Eaux",
            en: "Water"
        },

        {
            id: "jus",
            fr: "Jus",
            en: "Juices"
        }

    ]

};



/* =========================================================
   🟢 3. PRODUITS
   =========================================================

   POUR AJOUTER UN PRODUIT :

   - reference       = référence du produit
   - nameFR          = nom français
   - nameEN          = nom anglais
   - descriptionFR   = description française
   - descriptionEN   = description anglaise
   - price            = prix
   - image            = chemin vers l'image
   - category         = catégorie principale
   - subcategory      = sous-catégorie

   ========================================================= */

const products = [


    {
        reference: "193",

        nameFR: "Kushikatsu Bœuf Fromage",

        nameEN: "Beef Cheese Kushikatsu",

        descriptionFR:
            "Bœuf pané et fromage fondant, servi avec une sauce maison.",

        descriptionEN:
            "Breaded beef and melted cheese, served with homemade sauce.",

        price: "18 DT",

        image: "images/193.jpg",

        category: "plats-chauds",

        subcategory: "kushikatsu"
    },


    {
        reference: "194",

        nameFR: "Kushikatsu Poulet",

        nameEN: "Chicken Kushikatsu",

        descriptionFR:
            "Morceaux de poulet panés et frits à la perfection.",

        descriptionEN:
            "Breaded chicken pieces, fried to perfection.",

        price: "16 DT",

        image: "images/194.jpg",

        category: "plats-chauds",

        subcategory: "kushikatsu"
    },


    {
        reference: "195",

        nameFR: "Kushikatsu Crevette",

        nameEN: "Shrimp Kushikatsu",

        descriptionFR:
            "Crevettes panées et croustillantes, accompagnées de leur sauce.",

        descriptionEN:
            "Crispy breaded shrimp, served with their sauce.",

        price: "20 DT",

        image: "images/195.jpg",

        category: "plats-chauds",

        subcategory: "kushikatsu"
    },


    {
        reference: "196",

        nameFR: "Yakitori Poulet",

        nameEN: "Chicken Yakitori",

        descriptionFR:
            "Brochettes de poulet grillées et délicatement assaisonnées.",

        descriptionEN:
            "Grilled chicken skewers, delicately seasoned.",

        price: "15 DT",

        image: "images/196.jpg",

        category: "plats-chauds",

        subcategory: "yakitori"
    },


    {
        reference: "197",

        nameFR: "Yakitori Bœuf",

        nameEN: "Beef Yakitori",

        descriptionFR:
            "Brochettes de bœuf grillées et savoureuses.",

        descriptionEN:
            "Flavorful grilled beef skewers.",

        price: "17 DT",

        image: "images/197.jpg",

        category: "plats-chauds",

        subcategory: "yakitori"
    },


    {
        reference: "198",

        nameFR: "Gyoza Poulet",

        nameEN: "Chicken Gyoza",

        descriptionFR:
            "Raviolis japonais au poulet, légèrement croustillants.",

        descriptionEN:
            "Japanese chicken dumplings, lightly crispy.",

        price: "14 DT",

        image: "images/198.jpg",

        category: "plats-chauds",

        subcategory: "gyoza"
    },


    {
        reference: "201",

        nameFR: "Nigiri Saumon",

        nameEN: "Salmon Nigiri",

        descriptionFR:
            "Tranche de saumon frais déposée sur un riz vinaigré japonais.",

        descriptionEN:
            "Fresh salmon served over seasoned Japanese sushi rice.",

        price: "12 DT",

        image: "images/201.jpg",

        category: "sushi",

        subcategory: "nigiri"
    },


    {
        reference: "202",

        nameFR: "Nigiri Thon",

        nameEN: "Tuna Nigiri",

        descriptionFR:
            "Tranche de thon frais déposée sur un riz vinaigré japonais.",

        descriptionEN:
            "Fresh tuna served over seasoned Japanese sushi rice.",

        price: "14 DT",

        image: "images/202.jpg",

        category: "sushi",

        subcategory: "nigiri"
    },


    {
        reference: "203",

        nameFR: "Maki Saumon",

        nameEN: "Salmon Maki",

        descriptionFR:
            "Maki au saumon frais roulé dans une feuille de nori.",

        descriptionEN:
            "Fresh salmon maki rolls wrapped in nori seaweed.",

        price: "15 DT",

        image: "images/203.jpg",

        category: "maki",

        subcategory: "maki-classiques"
    }


];



/* =========================================================
   TRADUCTIONS
   ========================================================= */

const translations = {

    fr: {

        searchPlaceholder:
            "Rechercher un plat...",

        all:
            "Tout",

        noResults:
            "Aucun résultat",

        noResultsDescription:
            "Aucun produit ne correspond à votre recherche."

    },


    en: {

        searchPlaceholder:
            "Search for a dish...",

        all:
            "All",

        noResults:
            "No results",

        noResultsDescription:
            "No product matches your search."

    }

};



/* =========================================================
   VARIABLES
   ========================================================= */

let currentLanguage = "fr";

let currentCategory = "all";

let currentSearch = "";



/* =========================================================
   ÉLÉMENTS HTML
   ========================================================= */

const languageScreen =
    document.getElementById(
        "languageScreen"
    );


const menuApp =
    document.getElementById(
        "menuApp"
    );


const languageSwitcher =
    document.getElementById(
        "languageSwitcher"
    );


const languageChoices =
    document.querySelectorAll(
        ".language-choice"
    );


const categoryNavigation =
    document.getElementById(
        "categoryNavigation"
    );


const subcategoryNavigation =
    document.getElementById(
        "subcategoryNavigation"
    );


const productsContainer =
    document.getElementById(
        "productsContainer"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const clearSearch =
    document.getElementById(
        "clearSearch"
    );


const noResults =
    document.getElementById(
        "noResults"
    );


const menuTitle =
    document.getElementById(
        "menuTitle"
    );


const menuSubtitle =
    document.getElementById(
        "menuSubtitle"
    );


const currentYear =
    document.getElementById(
        "currentYear"
    );



/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        const savedLanguage =
            localStorage.getItem(
                "origamiLanguage"
            );


        if (
            savedLanguage === "fr" ||
            savedLanguage === "en"
        ) {

            currentLanguage =
                savedLanguage;

            showMenu();

        }


        currentYear.textContent =
            new Date().getFullYear();


        setupEventListeners();

    }
);



/* =========================================================
   ÉVÉNEMENTS
   ========================================================= */

function setupEventListeners() {


    languageChoices.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {


                    const selectedLanguage =
                        button.dataset.language;


                    setLanguage(
                        selectedLanguage
                    );


                    showMenu();

                }
            );

        }
    );



    languageSwitcher.addEventListener(
        "click",
        () => {


            const newLanguage =

                currentLanguage === "fr"

                    ? "en"

                    : "fr";


            setLanguage(
                newLanguage
            );

        }
    );



    searchInput.addEventListener(
        "input",
        event => {


            currentSearch =

                event.target.value
                    .toLowerCase()
                    .trim();


            updateClearButton();


            renderProducts();

        }
    );



    clearSearch.addEventListener(
        "click",
        () => {


            searchInput.value =
                "";


            currentSearch =
                "";


            updateClearButton();


            renderProducts();

        }
    );

}



/* =========================================================
   CHANGER LA LANGUE
   ========================================================= */

function setLanguage(
    language
) {


    currentLanguage =
        language;


    localStorage.setItem(
        "origamiLanguage",
        language
    );


    languageSwitcher.textContent =

        language === "fr"

            ? "🇫🇷 FR"

            : "🇬🇧 EN";


    updateInterfaceTexts();


    renderCategories();


    renderSubcategories();


    renderProducts();

}



/* =========================================================
   AFFICHER LE MENU
   ========================================================= */

function showMenu() {


    languageScreen.classList.add(
        "hidden"
    );


    menuApp.classList.remove(
        "hidden"
    );


    setLanguage(
        currentLanguage
    );

}



/* =========================================================
   TEXTES INTERFACE
   ========================================================= */

function updateInterfaceTexts() {


    menuTitle.textContent =

        currentLanguage === "fr"

            ? "Notre Menu"

            : "Our Menu";


    menuSubtitle.textContent =

        currentLanguage === "fr"

            ? "Découvrez notre sélection"

            : "Discover our selection";


    searchInput.placeholder =

        translations[
            currentLanguage
        ].searchPlaceholder;


    const noResultsTitle =
        noResults.querySelector(
            "h2"
        );


    const noResultsText =
        noResults.querySelector(
            "p"
        );


    noResultsTitle.textContent =

        translations[
            currentLanguage
        ].noResults;


    noResultsText.textContent =

        translations[
            currentLanguage
        ].noResultsDescription;

}



/* =========================================================
   TROUVER UNE CATÉGORIE
   ========================================================= */

function getCategory(
    categoryId
) {


    return categoriesOrder.find(
        category =>

            category.id ===
            categoryId
    );

}



/* =========================================================
   AFFICHER CATÉGORIES PRINCIPALES
   ========================================================= */

function renderCategories() {


    categoryNavigation.innerHTML =
        "";


    const allButton =

        createCategoryButton(

            "all",

            translations[
                currentLanguage
            ].all

        );


    categoryNavigation.appendChild(
        allButton
    );



    categoriesOrder.forEach(
        category => {


            const hasProducts =

                products.some(
                    product =>

                        product.category ===
                        category.id
                );


            if (
                !hasProducts
            ) {

                return;

            }


            const button =

                createCategoryButton(

                    category.id,

                    category[
                        currentLanguage
                    ]

                );


            categoryNavigation.appendChild(
                button
            );

        }
    );

}



/* =========================================================
   CRÉER BOUTON CATÉGORIE
   ========================================================= */

function createCategoryButton(
    category,
    label
) {


    const button =
        document.createElement(
            "button"
        );


    button.className =
        "category-button";


    button.textContent =
        label;


    if (
        currentCategory === category
    ) {

        button.classList.add(
            "active"
        );

    }


    button.addEventListener(
        "click",
        () => {


            currentCategory =
                category;


            renderCategories();


            renderSubcategories();


            renderProducts();


            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    return button;

}



/* =========================================================
   AFFICHER LES SOUS-CATÉGORIES
   ========================================================= */

function renderSubcategories() {


    subcategoryNavigation.innerHTML =
        "";


    if (
        currentCategory === "all"
    ) {


        subcategoryNavigation.classList.add(
            "hidden"
        );


        return;

    }



    const subcategories =

        subcategoriesOrder[
            currentCategory
        ] || [];



    if (
        subcategories.length === 0
    ) {


        subcategoryNavigation.classList.add(
            "hidden"
        );


        return;

    }



    subcategoryNavigation.classList.remove(
        "hidden"
    );



    const allButton =
        document.createElement(
            "button"
        );


    allButton.className =
        "subcategory-button active";


    allButton.textContent =

        translations[
            currentLanguage
        ].all;


    allButton.addEventListener(
        "click",
        () => {


            const categoryTitle =

                document.querySelector(
                    `.category-title[data-category="${currentCategory}"]`
                );


            if (
                categoryTitle
            ) {

                scrollToElement(
                    categoryTitle
                );

            }

        }
    );


    subcategoryNavigation.appendChild(
        allButton
    );



    subcategories.forEach(
        subcategory => {


            const hasProducts =

                products.some(
                    product =>

                        product.category ===
                        currentCategory &&

                        product.subcategory ===
                        subcategory.id
                );


            if (
                !hasProducts
            ) {

                return;

            }


            const button =

                document.createElement(
                    "button"
                );


            button.className =
                "subcategory-button";


            button.textContent =

                subcategory[
                    currentLanguage
                ];


            button.dataset.target =

                `${currentCategory}-${subcategory.id}`;


            button.addEventListener(
                "click",
                () => {


                    const target =

                        document.getElementById(

                            `subcategory-${currentCategory}-${subcategory.id}`

                        );


                    if (
                        target
                    ) {


                        scrollToElement(
                            target
                        );


                        setActiveSubcategory(
                            button
                        );

                    }

                }
            );


            subcategoryNavigation.appendChild(
                button
            );

        }
    );

}



/* =========================================================
   SCROLL VERS UNE SOUS-CATÉGORIE
   ========================================================= */

function scrollToElement(
    element
) {


    const offset =
        subcategoryNavigation.offsetHeight;


    const elementPosition =

        element.getBoundingClientRect().top;


    const offsetPosition =

        elementPosition +

        window.pageYOffset -

        offset -

        10;


    window.scrollTo({

        top:
            offsetPosition,

        behavior:
            "smooth"

    });

}



/* =========================================================
   ACTIVER UNE SOUS-CATÉGORIE
   ========================================================= */

function setActiveSubcategory(
    activeButton
) {


    const buttons =

        subcategoryNavigation.querySelectorAll(
            ".subcategory-button"
        );


    buttons.forEach(
        button => {


            button.classList.remove(
                "active"
            );

        }
    );


    activeButton.classList.add(
        "active"
    );


    activeButton.scrollIntoView({

        behavior:
            "smooth",

        block:
            "nearest",

        inline:
            "center"

    });

}



/* =========================================================
   FILTRER LES PRODUITS
   ========================================================= */

function getFilteredProducts() {


    return products.filter(
        product => {


            const matchesCategory =

                currentCategory === "all" ||

                product.category ===
                currentCategory;



            const nameFR =

                product.nameFR
                    .toLowerCase();


            const nameEN =

                product.nameEN
                    .toLowerCase();


            const descriptionFR =

                product.descriptionFR
                    .toLowerCase();


            const descriptionEN =

                product.descriptionEN
                    .toLowerCase();


            const reference =

                product.reference
                    .toLowerCase();



            const matchesSearch =

                nameFR.includes(
                    currentSearch
                ) ||

                nameEN.includes(
                    currentSearch
                ) ||

                descriptionFR.includes(
                    currentSearch
                ) ||

                descriptionEN.includes(
                    currentSearch
                ) ||

                reference.includes(
                    currentSearch
                );


            return (

                matchesCategory &&

                matchesSearch

            );

        }
    );

}



/* =========================================================
   AFFICHER LES PRODUITS
   ========================================================= */

function renderProducts() {


    productsContainer.innerHTML =
        "";


    const filteredProducts =
        getFilteredProducts();


    if (
        filteredProducts.length === 0
    ) {


        noResults.classList.remove(
            "hidden"
        );


        return;

    }


    noResults.classList.add(
        "hidden"
    );



    if (
        currentCategory === "all"
    ) {


        categoriesOrder.forEach(
            category => {


                renderCategory(

                    category.id,

                    filteredProducts

                );

            }
        );


    } else {


        renderCategory(

            currentCategory,

            filteredProducts

        );

    }

}



/* =========================================================
   AFFICHER UNE CATÉGORIE
   ========================================================= */

function renderCategory(
    categoryId,
    productList
) {


    const category =
        getCategory(
            categoryId
        );


    if (
        !category
    ) {

        return;

    }



    const categoryProducts =

        productList.filter(
            product =>

                product.category ===
                categoryId
        );


    if (
        categoryProducts.length === 0
    ) {

        return;

    }



    const categoryTitle =
        document.createElement(
            "h2"
        );


    categoryTitle.className =
        "category-title";


    categoryTitle.dataset.category =
        categoryId;


    categoryTitle.textContent =

        category[
            currentLanguage
        ];


    productsContainer.appendChild(
        categoryTitle
    );



    const orderedSubcategories =

        subcategoriesOrder[
            categoryId
        ] || [];



    orderedSubcategories.forEach(
        subcategory => {


            const subcategoryProducts =

                categoryProducts.filter(
                    product =>

                        product.subcategory ===
                        subcategory.id
                );


            if (
                subcategoryProducts.length === 0
            ) {

                return;

            }



            const subcategoryTitle =
                document.createElement(
                    "h3"
                );


            subcategoryTitle.className =
                "subcategory-title";


            subcategoryTitle.id =

                `subcategory-${categoryId}-${subcategory.id}`;


            subcategoryTitle.textContent =

                subcategory[
                    currentLanguage
                ];


            productsContainer.appendChild(
                subcategoryTitle
            );



            const grid =

                createProductGrid(

                    subcategoryProducts

                );


            productsContainer.appendChild(
                grid
            );

        }
    );

}



/* =========================================================
   CRÉER GRILLE PRODUITS
   ========================================================= */

function createProductGrid(
    productList
) {


    const grid =
        document.createElement(
            "div"
        );


    grid.className =
        "products-grid";


    productList.forEach(
        product => {


            const card =

                createProductCard(
                    product
                );


            grid.appendChild(
                card
            );

        }
    );


    return grid;

}



/* =========================================================
   CRÉER CARTE PRODUIT
   ========================================================= */

function createProductCard(
    product
) {


    const card =
        document.createElement(
            "article"
        );


    card.className =
        "product-card";


    const productName =

        currentLanguage === "fr"

            ? product.nameFR

            : product.nameEN;


    const productDescription =

        currentLanguage === "fr"

            ? product.descriptionFR

            : product.descriptionEN;



    card.innerHTML = `

        <div class="product-image-container">

            <img

                class="product-image"

                src="${product.image}"

                alt="${productName}"

                loading="lazy"

                onerror="this.style.display='none'"

            >


            <span class="product-reference">

                [${product.reference}]

            </span>

        </div>


        <div class="product-info">

            <h3 class="product-name">

                ${productName}

            </h3>


            <p class="product-description">

                ${productDescription}

            </p>


            <div class="product-price">

                ${product.price}

            </div>

        </div>

    `;


    return card;

}



/* =========================================================
   BOUTON EFFACER RECHERCHE
   ========================================================= */

function updateClearButton() {


    if (
        currentSearch.length > 0
    ) {


        clearSearch.style.display =
            "block";


    } else {


        clearSearch.style.display =
            "none";

    }

   }
