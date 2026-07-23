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
        en: "Starters"
    },

    {
        id: "sushi",
        fr: "Sushi",
        en: "Sushi"
    },

    {
        id: "plats-chauds",
        fr: "Plats chauds",
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
            id: "salades",
            fr: "Salades",
            en: "Salads"
        },

        {
            id: "soupes",
            fr: "Soupes",
            en: "Soups"
        },

        {
            id: "edamame",
            fr: "Edamame",
            en: "Edamame"
        }

    ],



    "sushi": [

        {
            id: "nigiri",
            fr: "Nigiri",
            en: "Nigiri"
        },

        {
            id: "sashimi",
            fr: "Sashimi",
            en: "Sashimi"
        }

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



    "accompagnements": [

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

   Pour ajouter tes produits,
   tu copies simplement un bloc.

   ========================================================= */

const products = [


    {
        reference: "193",

        nameFR: "Kushikatsu Bœuf Fromage",

        nameEN: "Beef Cheese Kushikatsu",

        price: "18 DT",

        image: "images/193.jpg",

        category: "plats-chauds",

        subcategory: "kushikatsu"
    },


    {
        reference: "194",

        nameFR: "Kushikatsu Poulet",

        nameEN: "Chicken Kushikatsu",

        price: "16 DT",

        image: "images/194.jpg",

        category: "plats-chauds",

        subcategory: "kushikatsu"
    },


    {
        reference: "195",

        nameFR: "Kushikatsu Crevette",

        nameEN: "Shrimp Kushikatsu",

        price: "20 DT",

        image: "images/195.jpg",

        category: "plats-chauds",

        subcategory: "kushikatsu"
    },


    {
        reference: "196",

        nameFR: "Yakitori Poulet",

        nameEN: "Chicken Yakitori",

        price: "15 DT",

        image: "images/196.jpg",

        category: "plats-chauds",

        subcategory: "yakitori"
    },


    {
        reference: "197",

        nameFR: "Yakitori Bœuf",

        nameEN: "Beef Yakitori",

        price: "17 DT",

        image: "images/197.jpg",

        category: "plats-chauds",

        subcategory: "yakitori"
    },


    {
        reference: "198",

        nameFR: "Gyoza Poulet",

        nameEN: "Chicken Gyoza",

        price: "14 DT",

        image: "images/198.jpg",

        category: "plats-chauds",

        subcategory: "gyoza"
    },


    {
        reference: "201",

        nameFR: "Nigiri Saumon",

        nameEN: "Salmon Nigiri",

        price: "12 DT",

        image: "images/201.jpg",

        category: "sushi",

        subcategory: "nigiri"
    },


    {
        reference: "202",

        nameFR: "Nigiri Thon",

        nameEN: "Tuna Nigiri",

        price: "14 DT",

        image: "images/202.jpg",

        category: "sushi",

        subcategory: "nigiri"
    },


    {
        reference: "203",

        nameFR: "Maki Saumon",

        nameEN: "Salmon Maki",

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


    /*
    ---------------------------------------------------------
    CHOIX INITIAL DE LA LANGUE
    ---------------------------------------------------------
    */

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



    /*
    ---------------------------------------------------------
    CHANGEMENT DE LANGUE
    ---------------------------------------------------------
    */

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



    /*
    ---------------------------------------------------------
    RECHERCHE
    ---------------------------------------------------------
    */

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



    /*
    ---------------------------------------------------------
    EFFACER RECHERCHE
    ---------------------------------------------------------
    */

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
   TROUVER UNE SOUS-CATÉGORIE
   ========================================================= */

function getSubcategory(
    categoryId,
    subcategoryId
) {


    const subcategories =

        subcategoriesOrder[
            categoryId
        ] || [];


    return subcategories.find(
        subcategory =>

            subcategory.id ===
            subcategoryId
    );

}



/* =========================================================
   AFFICHER CATÉGORIES PRINCIPALES
   ========================================================= */

function renderCategories() {


    categoryNavigation.innerHTML =
        "";


    /*
    ---------------------------------------------------------
    BOUTON TOUT
    ---------------------------------------------------------
    */

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



    /*
    ---------------------------------------------------------
    CATÉGORIES
    ---------------------------------------------------------
    */

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


            /*
            Retour en haut du menu
            */

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


    /*
    ---------------------------------------------------------
    SI "TOUT" EST SÉLECTIONNÉ
    ---------------------------------------------------------

    On cache la navigation des
    sous-catégories.
    */

    if (
        currentCategory === "all"
    ) {


        subcategoryNavigation.classList.add(
            "hidden"
        );


        return;

    }



    /*
    ---------------------------------------------------------
    TROUVER LES SOUS-CATÉGORIES
    ---------------------------------------------------------
    */

    const subcategories =

        subcategoriesOrder[
            currentCategory
        ] || [];



    /*
    ---------------------------------------------------------
    SI AUCUNE SOUS-CATÉGORIE
    ---------------------------------------------------------
    */

    if (
        subcategories.length === 0
    ) {


        subcategoryNavigation.classList.add(
            "hidden"
        );


        return;

    }



    /*
    ---------------------------------------------------------
    AFFICHER LA BARRE
    ---------------------------------------------------------
    */

    subcategoryNavigation.classList.remove(
        "hidden"
    );



    /*
    ---------------------------------------------------------
    BOUTON "TOUT"
    ---------------------------------------------------------

    Permet de revenir au début
    de la catégorie principale.
    */

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



    /*
    ---------------------------------------------------------
    CRÉER LES BOUTONS
    ---------------------------------------------------------
    */

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


    /*
    Hauteur approximative de la barre
    de sous-catégories.

    On place le titre juste en dessous.
    */

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



    /*
    Fait défiler horizontalement
    la barre pour garder le bouton
    visible.
    */

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
   FILTRER LES PRODUITS POUR LA RECHERCHE
   ========================================================= */

function getFilteredProducts() {


    return products.filter(
        product => {


            /*
            -------------------------------------------------
            CATÉGORIE
            -------------------------------------------------
            */

            const matchesCategory =

                currentCategory === "all" ||

                product.category ===
                currentCategory;



            /*
            -------------------------------------------------
            RECHERCHE
            -------------------------------------------------
            */

            const nameFR =

                product.nameFR
                    .toLowerCase();


            const nameEN =

                product.nameEN
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


    /*
    ---------------------------------------------------------
    AUCUN RÉSULTAT
    ---------------------------------------------------------
    */

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



    /*
    ---------------------------------------------------------
    TOUT
    ---------------------------------------------------------
    */

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


        /*
        -----------------------------------------------------
        CATÉGORIE SÉLECTIONNÉE
        -----------------------------------------------------
        */

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



    /*
    ---------------------------------------------------------
    TITRE CATÉGORIE
    ---------------------------------------------------------
    */

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



    /*
    ---------------------------------------------------------
    SOUS-CATÉGORIES
    ---------------------------------------------------------
    */

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



            /*
            -------------------------------------------------
            TITRE SOUS-CATÉGORIE
            -------------------------------------------------
            */

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



            /*
            -------------------------------------------------
            GRILLE PRODUITS
            -------------------------------------------------
            */

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
