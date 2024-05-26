const CARDS = document.querySelector('.main-cards');
const FIRST_CARD = document.querySelector('.card');

const cards = [
    {
        imageSrc: 'img/jordan-green.png',
        name: 'Reverse Grinch',
        category: 'Tênis Nike Zoom Kobe 6',
        price: 1399.99
    },
    {
        imageSrc: 'img/jordan-tropical.png',
        name: 'Lakers Home',
        category: 'Tênis Nike Zoom Kobe 7',
        price: 1099.99
    },
    {
        imageSrc: 'img/jordan-purple.png',
        name: 'Grinch',
        category: 'Tênis Nike Zoom Kobe 6',
        price: 1299.99
    },
    {
        imageSrc: 'img/jordan-gray.png',
        name: 'Venice Beach',
        category: 'Tênis Nike Kobe 8 Protro',
        price: 1499.99
    },
    {
        imageSrc: 'img/jordan-citrus.png',
        name: 'Mambacita',
        category: 'Tênis Nike Kobe 4 Protro',
        price: 1299.99
    },
    {
        imageSrc: 'img/jordan-gray-camo.png',
        name: 'Bruce Lee',
        category: 'Tênis Nike Kobe 5 Protro',
        price: 1099.99
    }
]

cards.map(card => {
    const CARD_CLONE = FIRST_CARD.cloneNode(true);
    CARD_CLONE.querySelector(".card img").src = card.imageSrc;
    CARD_CLONE.querySelector(".card-info h4").innerHTML = card.name;
    CARD_CLONE.querySelector(".card-category").innerHTML = card.category;

    const PRICE = CARD_CLONE.querySelector(".card-price");
    PRICE.innerHTML = 'R$ ' +card.price.toFixed(2).replace('.', ',');
    
    CARDS.appendChild(CARD_CLONE);
})

FIRST_CARD.remove();