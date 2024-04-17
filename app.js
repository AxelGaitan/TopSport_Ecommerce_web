const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        // Cambio al producto seleccionado
        choosenProduct = products[index];
        // Cambio el texto del producto
        currentProductTitle.textContent = choosenProduct.tittle;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        // Asigno los colores
        currentColors.forEach((color, index) => {
            // Verificar si el producto tiene más de un color
            if (choosenProduct.colors.length > 1) {
                color.style.backgroundColor = choosenProduct.colors[index].code;
            } else {
                // Si solo tiene un color, asignar ese color a todos los elementos .color
                color.style.backgroundColor = choosenProduct.colors[0].code;

                
            }
        });
    });
});


//mi base da datos.
const products = [
    {
        id: 1,
        tittle: "ADIDAS 4D",
        price: 35000,
        colors: [
            {
                code: "black",
                img: "./img/ADIDAS 4D NEGRASS-Photoroom.png-Photoroom.png",
            },
            {
                code: "gray",
                img: "./img/adidas4dgrisfrontal.png",
            },
        ],
    },
    {
        id: 2,
        tittle: "NIKE PEGASUS",
        price: 38000,
        colors: [
            {
                code: "black",
                img: "./img/Nike Pegasus Negra Gamusa-SIN FONDO.png",
            },
        ],
    },
    {
        id: 3,
        tittle: "VANS",
        price: 25000,
        colors: [
            {
                code: "black",
                img: "./img/vans.png",
            },
        ],
    },
    {
        id: 4,
        tittle: "AIR JORDAN",
        price: 38000,
        colors: [
            {
                code: "pink",
                img: "./img/Nike Air Jordan 1 Mid Rosado y Negro-Photoroom.png",
            },
            {
                code: "blackwhite",
                img: "./img/Nike Air Jordan 1 Mid Blanco y Negro-Photoroom.png",
            },
            {
                code: "yellow",
                img: "./img/Nike Air Jordan 1 Mid Amarillo y Negro-Photoroom.png",
            },
        ],
    },
];

//modelo que muestra al clickear el color.
let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitles");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSizes = document.querySelectorAll(".size");
const currentColors = document.querySelectorAll(".color");

currentColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

//color de los size al clickearlos.
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color ="black";
        });
        size.style.backgroundColor= "black";
        size.style.color ="white";
    });
});