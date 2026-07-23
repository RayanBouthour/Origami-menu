/* =========================================================
   ORIGAMI SUSHI BAR — MENU QR
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢

        ⭐⭐⭐  MODIFIE TON MENU ICI  ⭐⭐⭐

   ========================================================= */


/* =========================================================
   🟢 1. ORDRE DES CATÉGORIES PRINCIPALES
   =========================================================

   Ce sont les catégories qui apparaîtront
   dans la barre de navigation en haut.

   Exemple :

   Tout | Entrées | Sushi | Plats chauds | Desserts

   ⚠️ Le texte doit être exactement le même que
   celui utilisé dans "category" dans tes produits.
   ========================================================= */

const categoriesOrder = [

    "Entrées",

    "Sushi",

    "Maki",

    "California",

    "Plats chauds",

    "Menus",

    "Desserts",

    "Boissons"

];



/* =========================================================
   🟢 2. ORDRE DES SOUS-CATÉGORIES
   =========================================================

   Ici tu définis l'ordre des titres à l'intérieur
   de chaque catégorie principale.

   Exemple :

   PLATS CHAUDS

   KUSHIKATSU
   → produits

   YAKITORI
   → produits

   GYOZA
   → produits

   ========================================================= */

const subcategoriesOrder = {

    "Entrées": [

        "Salades",

        "Soupes",

        "Edamame"

    ],


    "Sushi": [

        "Nigiri",

        "Sashimi"

    ],


    "Maki": [

        "Maki classiques",

        "Maki spéciaux"

    ],


    "California": [

        "California classiques",

        "California spéciaux"

    ],


    "Plats chauds": [

        "Kushikatsu",

        "Yakitori",

        "Gyoza",

        "Tempura"

    ],


    "Menus": [

        "Menus Sushi",

        "Menus Maki",

        "Menus Famille"

    ],


    "Desserts": [

        "Desserts"

    ],


    "Boissons": [

        "Softs",

        "Eaux",

        "Jus"

    ]

};



/* =========================================================
   🟢 3. TES PRODUITS
   =========================================================

   Pour chaque produit :

   reference   → Référence du produit
   nameFR      → Nom français
   nameEN      → Nom anglais
   price       → Prix
   image       → Image dans /images
   category    → Catégorie principale
   subcategory → Sous-catégorie

   ========================================================= */

const products = [


    /* =====================================================
       EXEMPLE : PLATS CHAUDS → KUSHIKATSU
       ===================================================== */

    {
        reference: "193",

        nameFR: "Kushikatsu Bœuf Fromage",

        nameEN: "Beef Cheese Kushikatsu",

        price: "18 DT",

        image: "images/193.jpg",

        category: "Plats chauds",

        subcategory: "Kushikatsu"
    },


    {
        reference: "194",

        nameFR: "Kushikatsu Poulet",

        nameEN: "Chicken Kushikatsu",

        price: "16 DT",

        image: "images/194.jpg",

        category: "Plats chauds",

        subcategory: "Kushikatsu"
    },


    {
        reference: "195",

        nameFR: "Kushikatsu Crevette",

        nameEN: "Shrimp Kushikatsu",

        price: "20 DT",

        image: "images/195.jpg",

        category: "Plats chauds",

        subcategory: "Kushikatsu"
    },



    /* =====================================================
       EXEMPLE : PLATS CHAUDS → YAKITORI
       ===================================================== */

    {
        reference: "196",

        nameFR: "Yakitori Poulet",

        nameEN: "Chicken Yakitori",

        price: "15 DT",

        image: "images/196.jpg",

        category: "Plats chauds",

        subcategory: "Yakitori"
    },


    {
        reference: "197",

        nameFR: "Yakitori Bœuf",

        nameEN: "Beef Yakitori",

        price: "17 DT",

        image: "images/197.jpg",

        category: "Plats chauds",

        subcategory: "Yakitori"
    },



    /* =====================================================
       EXEMPLE : PLATS CHAUDS → GYOZA
       ===================================================== */

    {
        reference: "198",

        nameFR: "Gyoza Poulet",

        nameEN: "Chicken Gyoza",

        price: "14 DT",

        image: "images/198.jpg",

        category: "Plats chauds",

        subcategory: "Gyoza"
    },



    /* =====================================================
       EXEMPLE : SUSHI → NIGIRI
       ===================================================== */

    {
        reference: "201",

        nameFR: "Nigiri Saumon",

        nameEN: "Salmon Nigiri",

        price: "12 DT",

        image: "images/201.jpg",

        category: "Sushi",

        subcategory: "Nigiri"
    },


    {
        reference: "202",

        nameFR: "Nigiri Thon",

        nameEN: "Tuna Nigiri",

        price: "14 DT",

        image: "images/202.jpg",

        category: "Sushi",

        subcategory: "Nigiri"
    },



    /* =====================================================
       EXEMPLE : MAKI → MAKI CLASSIQUES
       ===================================================== */

    {
        reference: "203",

        nameFR: "Maki Saumon",

        nameEN: "Salmon Maki",

        price: "15 DT",

        image: "images/203.jpg",

        category: "Maki",

        subcategory: "Maki classiques"
    },


    /*
    =========================================================

    🟢 POUR AJOUTER UN PRODUIT :

    Copie ce modèle :

    {
        reference: "204",

        nameFR: "Nom français",

        nameEN: "English name",

        price: "XX DT",

        image: "images/204.jpg",

        category: "Plats chauds",

        subcategory: "Kushikatsu"
    },

    =========================================================
    */


];


/* =========================================================
   🔴 FIN DE LA ZONE À MODIFIER
   ========================================================= */





/* =========================================================
   TRADUCTIONS DE L'INTERFACE
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
    document.getElementById("languageScreen");

const menuApp =
    document.getElementById("menuApp");

const languageSwitcher =
    document.getElementById("languageSwitcher");

const languageChoices =
    document.querySelectorAll(".language-choice");

const categoryNavigation =
    document.getElementById("categoryNavigation");

const productsContainer =
    document.getElementById("productsContainer");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const noResults =
    document.getElementById("noResults");

const menuTitle =
    document.getElementById("menuTitle");

const menuSubtitle =
    document.getElementById("menuSubtitle");

const currentYear =
    document.getElementById("currentYear");



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
    EFFACER LA RECHERCHE
    ---------------------------------------------------------
    */

    clearSearch.addEventListener(
        "click",
        () => {

            searchInput.value = "";

            currentSearch = "";

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


    if (
        language === "fr"
    ) {

        languageSwitcher.textContent =
            "🇫🇷 FR";

    } else {

        languageSwitcher.textContent =
            "🇬🇧 EN";

    }


    updateInterfaceTexts();

    renderCategories();

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
        noResults.querySelector("h2");


    const noResultsText =
        noResults.querySelector("p");


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
   AFFICHER LES CATÉGORIES PRINCIPALES
   ========================================================= */

function renderCategories() {


    categoryNavigation.innerHTML =
        "";


    /*
    ---------------------------------------------------------
    BOUTON "TOUT"
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
    CATÉGORIES DANS L'ORDRE DÉFINI
    ---------------------------------------------------------
    */

    categoriesOrder.forEach(
        category => {


            /*
            On vérifie que cette catégorie
            contient au moins un produit.
            */

            const hasProducts =
                products.some(
                    product =>
                        product.category ===
                        category
                );


            if (
                !hasProducts
            ) {

                return;

            }


            const button =
                createCategoryButton(
                    category,
                    category
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

            renderProducts();

        }
    );


    return button;

}



/* =========================================================
   FILTRER LES PRODUITS
   ========================================================= */

function getFilteredProducts() {


    return products.filter(
        product => {


            /*
            -------------------------------------------------
            CATÉGORIE PRINCIPALE
            -------------------------------------------------
            */

            const matchesCategory =

                currentCategory === "all" ||

                product.category ===
                    currentCategory;



            /*
            -------------------------------------------------
            RECHERCHE

            Recherche dans :

            - Nom français
            - Nom anglais
            - Référence
            - Catégorie
            - Sous-catégorie
            -------------------------------------------------
            */

            const nameFR =
                product.nameFR
                    .toLowerCase();


            const nameEN =
                product.nameEN
                    .toLowerCase();


            const category =
                product.category
                    .toLowerCase();


            const subcategory =
                product.subcategory
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

                category.includes(
                    currentSearch
                ) ||

                subcategory.includes(
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
    AFFICHAGE PAR CATÉGORIE
    ---------------------------------------------------------
    */

    if (
        currentCategory === "all"
    ) {

        /*
        On affiche toutes les catégories
        dans l'ordre défini.
        */

        categoriesOrder.forEach(
            category => {

                renderCategory(
                    category,
                    filteredProducts
                );

            }
        );

    } else {

        /*
        On affiche uniquement
        la catégorie sélectionnée.
        */

        renderCategory(
            currentCategory,
            filteredProducts
        );

    }

}



/* =========================================================
   AFFICHER UNE CATÉGORIE PRINCIPALE
   ========================================================= */

function renderCategory(
    category,
    productList
) {


    /*
    Récupère les produits
    de cette catégorie.
    */

    const categoryProducts =

        productList.filter(
            product =>
                product.category ===
                category
        );


    /*
    Si aucun produit,
    on ne fait rien.
    */

    if (
        categoryProducts.length === 0
    ) {

        return;

    }



    /*
    ========================================================
    TITRE DE LA CATÉGORIE PRINCIPALE
    ========================================================
    */

    const categoryTitle =
        document.createElement(
            "h2"
        );


    categoryTitle.className =
        "category-title";


    categoryTitle.textContent =
        category;


    productsContainer.appendChild(
        categoryTitle
    );



    /*
    ========================================================
    RÉCUPÉRER L'ORDRE DES SOUS-CATÉGORIES
    ========================================================
    */

    const orderedSubcategories =

        subcategoriesOrder[
            category
        ] || [];



    /*
    ========================================================
    AFFICHER LES SOUS-CATÉGORIES
    ========================================================
    */

    orderedSubcategories.forEach(
        subcategory => {


            const subcategoryProducts =

                categoryProducts.filter(
                    product =>

                        product.subcategory ===
                        subcategory
                );


            /*
            S'il n'y a aucun produit
            dans cette sous-catégorie,
            on ne l'affiche pas.
            */

            if (
                subcategoryProducts.length === 0
            ) {

                return;

            }



            /*
            ------------------------------------------------
            TITRE SOUS-CATÉGORIE
            ------------------------------------------------
            */

            const subcategoryTitle =
                document.createElement(
                    "h3"
                );


            subcategoryTitle.className =
                "subcategory-title";


            subcategoryTitle.textContent =
                subcategory;


            productsContainer.appendChild(
                subcategoryTitle
            );



            /*
            ------------------------------------------------
            GRILLE PRODUITS
            ------------------------------------------------
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



    /*
    ========================================================
    SOUS-CATÉGORIES NON PRÉVUES DANS LA LISTE
    ========================================================

    Si tu oublies d'ajouter une sous-catégorie
    dans "subcategoriesOrder", les produits
    ne disparaissent pas.

    Ils seront affichés à la fin.
    ========================================================
    */

    const displayedSubcategories =

        orderedSubcategories;


    const remainingProducts =

        categoryProducts.filter(
            product =>

                !displayedSubcategories.includes(
                    product.subcategory
                )
        );


    /*
    Si des produits restent,
    on les affiche.
    */

    if (
        remainingProducts.length > 0
    ) {


        /*
        Regroupe les produits
        restants par sous-catégorie.
        */

        const remainingNames =

            [
                ...new Set(
                    remainingProducts.map(
                        product =>
                            product.subcategory
                    )
                )
            ];


        remainingNames.forEach(
            subcategory => {


                const productsInSubcategory =

                    remainingProducts.filter(
                        product =>

                            product.subcategory ===
                            subcategory
                    );


                /*
                Titre
                */

                const title =
                    document.createElement(
                        "h3"
                    );


                title.className =
                    "subcategory-title";


                title.textContent =
                    subcategory;


                productsContainer.appendChild(
                    title
                );


                /*
                Produits
                */

                const grid =
                    createProductGrid(
                        productsInSubcategory
                    );


                productsContainer.appendChild(
                    grid
                );

            }
        );

    }

}



/* =========================================================
   CRÉER UNE GRILLE DE PRODUITS
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
   CRÉER UNE CARTE PRODUIT
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



    /*
    ---------------------------------------------------------
    NOM SELON LA LANGUE
    ---------------------------------------------------------
    */

    const productName =

        currentLanguage === "fr"

            ? product.nameFR

            : product.nameEN;



    /*
    ---------------------------------------------------------
    HTML DE LA CARTE
    ---------------------------------------------------------
    */

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
