/* =========================================================
   ORIGAMI SUSHI BAR — MENU QR
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢
   
        ⭐⭐⭐  MODIFIE TES PRODUITS ICI  ⭐⭐⭐
   
   =========================================================
   
   Pour chaque produit, tu dois remplir :

   1. reference
   2. nameFR
   3. nameEN
   4. price
   5. image
   6. category

   ========================================================= */


const products = [

    /* =====================================================
       🟢 PRODUIT EXEMPLE — [193]
       ===================================================== */

    {
        reference: "193",

        // 🇫🇷 NOM FRANÇAIS
        nameFR: "Kushikatsu Bœuf Fromage",

        // 🇬🇧 NOM ANGLAIS
        // 👉 REMPLACE CE TEXTE PAR TON NOM ANGLAIS
        nameEN: "Beef Cheese Kushikatsu",

        // 💰 PRIX
        price: "18 DT",

        // 📸 IMAGE
        // Ton image doit être placée dans :
        // images/193.jpg
        image: "images/193.jpg",

        // 📂 CATÉGORIE
        category: "Kushikatsu"
    },


    /* =====================================================
       🟢 PRODUIT EXEMPLE — [194]
       ===================================================== */

    {
        reference: "194",

        nameFR: "Nom du produit",

        // 👉 À REMPLACER
        nameEN: "English Product Name",

        price: "XX DT",

        image: "images/194.jpg",

        category: "Maki"
    },


    /* =====================================================
       🟢 PRODUIT EXEMPLE — [195]
       ===================================================== */

    {
        reference: "195",

        nameFR: "Nom du produit",

        nameEN: "English Product Name",

        price: "XX DT",

        image: "images/195.jpg",

        category: "Sushi"
    },


    /*
    =========================================================

    🟢 POUR AJOUTER UN NOUVEAU PRODUIT :

    Copie simplement ce bloc :

    {
        reference: "196",
        nameFR: "Nom français",
        nameEN: "English name",
        price: "XX DT",
        image: "images/196.jpg",
        category: "Sushi"
    },

    Puis change les informations.

    =========================================================
    */


];


/* =========================================================
   🔴 FIN DE LA ZONE PRODUITS
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

        /*
        Vérifie si le client a déjà choisi
        une langue auparavant.
        */

        const savedLanguage =
            localStorage.getItem(
                "origamiLanguage"
            );


        if (savedLanguage === "fr" ||
            savedLanguage === "en") {

            currentLanguage =
                savedLanguage;

            showMenu();

        }


        /*
        Année actuelle dans le footer
        */

        currentYear.textContent =
            new Date().getFullYear();


        /*
        Prépare les événements
        */

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
    BOUTON CHANGEMENT DE LANGUE
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


    /*
    Sauvegarde la langue
    dans le navigateur.
    */

    localStorage.setItem(
        "origamiLanguage",
        language
    );


    /*
    Met à jour le bouton
    */

    if (language === "fr") {

        languageSwitcher.textContent =
            "🇫🇷 FR";

    } else {

        languageSwitcher.textContent =
            "🇬🇧 EN";

    }


    /*
    Met à jour les textes
    */

    updateInterfaceTexts();


    /*
    Regénère les catégories
    */

    renderCategories();


    /*
    Regénère les produits
    */

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
   TEXTES DE L'INTERFACE
   ========================================================= */

function updateInterfaceTexts() {


    /*
    Titre
    */

    menuTitle.textContent =
        currentLanguage === "fr"
            ? "Notre Menu"
            : "Our Menu";


    /*
    Sous-titre
    */

    menuSubtitle.textContent =
        currentLanguage === "fr"
            ? "Découvrez notre sélection"
            : "Discover our selection";


    /*
    Barre de recherche
    */

    searchInput.placeholder =
        translations[
            currentLanguage
        ].searchPlaceholder;


    /*
    Aucun résultat
    */

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
   RÉCUPÉRER LES CATÉGORIES
   ========================================================= */

function getCategories() {


    /*
    Récupère toutes les catégories
    présentes dans les produits.
    */

    const categories =
        products.map(
            product =>
                product.category
        );


    /*
    Supprime les doublons
    */

    return [
        ...new Set(
            categories
        )
    ];

}



/* =========================================================
   AFFICHER LES CATÉGORIES
   ========================================================= */

function renderCategories() {


    categoryNavigation.innerHTML =
        "";


    /*
    Bouton "Tout"
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
    Toutes les autres catégories
    */

    const categories =
        getCategories();


    categories.forEach(
        category => {

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
   CRÉER UN BOUTON CATÉGORIE
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


    /*
    Catégorie actuellement active
    */

    if (
        currentCategory === category
    ) {

        button.classList.add(
            "active"
        );

    }


    /*
    Lorsqu'on clique
    */

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
            -----------------------------------------------
            FILTRE CATÉGORIE
            -----------------------------------------------
            */

            const matchesCategory =

                currentCategory === "all" ||

                product.category ===
                    currentCategory;



            /*
            -----------------------------------------------
            FILTRE RECHERCHE
            -----------------------------------------------
            */

            const productName =

                currentLanguage === "fr"

                    ? product.nameFR

                    : product.nameEN;


            const matchesSearch =

                productName
                    .toLowerCase()
                    .includes(
                        currentSearch
                    ) ||

                product.reference
                    .toLowerCase()
                    .includes(
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
    Si aucun résultat
    */

    if (
        filteredProducts.length === 0
    ) {

        noResults.classList.remove(
            "hidden"
        );

        return;

    }


    /*
    Il y a des résultats
    */

    noResults.classList.add(
        "hidden"
    );


    /*
    -----------------------------------------------
    SI "TOUT" EST SÉLECTIONNÉ
    -----------------------------------------------

    On organise les produits
    par catégorie.
    */

    if (
        currentCategory === "all" &&
        currentSearch === ""
    ) {

        renderProductsByCategory(
            filteredProducts
        );

    } else {

        /*
        Sinon on affiche
        directement les produits.
        */

        const grid =
            createProductGrid(
                filteredProducts
            );


        productsContainer.appendChild(
            grid
        );

    }

}



/* =========================================================
   AFFICHER PAR CATÉGORIE
   ========================================================= */

function renderProductsByCategory(
    productList
) {


    const categories =
        getCategories();


    categories.forEach(
        category => {


            const categoryProducts =
                productList.filter(
                    product =>
                        product.category ===
                        category
                );


            /*
            S'il n'y a aucun produit
            dans cette catégorie,
            on ne l'affiche pas.
            */

            if (
                categoryProducts.length === 0
            ) {

                return;

            }


            /*
            Titre catégorie
            */

            const title =
                document.createElement(
                    "h2"
                );


            title.className =
                "category-title";


            title.textContent =
                category;


            productsContainer.appendChild(
                title
            );


            /*
            Grille
            */

            const grid =
                createProductGrid(
                    categoryProducts
                );


            productsContainer.appendChild(
                grid
            );

        }
    );

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


    /*
    Créer la carte
    */

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "product-card";



    /*
    -----------------------------------------------
    NOM DU PRODUIT SELON LA LANGUE
    -----------------------------------------------
    */

    const productName =

        currentLanguage === "fr"

            ? product.nameFR

            : product.nameEN;



    /*
    -----------------------------------------------
    CARTE HTML
    -----------------------------------------------
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
   BOUTON EFFACER LA RECHERCHE
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
