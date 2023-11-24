addToCartButton.addEventListener('click', () => addToCart(book));
function addToCart(book) {
    // Retrieve existing cart data from local storage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected book to the cart
    cartItems.push(book);

    // Store the updated cart data in local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Optionally, provide feedback to the user (e.g., show a confirmation message)
    alert('Item added to the cart!');
}
viewCartButton.addEventListener('click', () => viewCart());
function viewCart() {
    // Redirect the user to the cart page
    window.location.href = 'cart.html';
}

fetch('books.json')
        .then(response => response.json())
        .then(data => displayBooks(data));

    function displayBooks(books) {
        const bookContainer = document.getElementById('bookContainer');
        bookContainer.style.display = 'flex';
        bookContainer.style.flexDirection = 'row';
        bookContainer.style.justifyContent = 'space-evenly';

        bookContainer.style.flexWrap = 'wrap';  


        books.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('card', 'mb-3');
            card.style.backgroundColor = '#6FA3EF';
            card.style.width = 'fit-content';

            const img = document.createElement('img');
            img.classList.add('card-img-top');
            img.src = book.cover_image;
            
            img.alt = `${book.title} Cover`;
            img.style.height = 'auto';
            img.style.width = '18rem';
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            cardBody.id = 'bookbodycard';
            cardBody.style.backgroundColor = '#004080';


            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = book.title;
            title.style.color = 'white';
            title.style.textAlign = 'center';
            title.style.backgroundColor = '#6FA3EF';
            title.style.padding = '5px';



            const author = document.createElement('p');
            author.classList.add('card-text');
            author.textContent = `Author: ${book.author}`;
            author.style.color = 'white';

            const desc = document.createElement('p');
            desc.classList.add('card-text');
            desc.textContent = `Description: ${book.description}`;
            desc.style.color = 'white';
            desc.style.fontSize = '6px';
            desc.style.fontWeight = 'bold';
            desc.style.whiteSpace = 'initial';

            const price = document.createElement('p');
            price.classList.add('card-text');
            price.textContent = `Price: $${book.price.toFixed(2)}`;
            price.style.color = 'white';

            const addToCartButton = document.createElement('button');
            addToCartButton.classList.add('btn', 'mr-2');
            addToCartButton.setAttribute('style', 'background-color: #FFD700');
        

            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.style.color = 'white';
            addToCartButton.style.margin = '10px';


            const viewCartButton = document.createElement('button');
            viewCartButton.classList.add('btn', 'btn-secondary');
            viewCartButton.textContent = 'View Cart';

            addToCartButton.addEventListener('click', () => addToCart(book));
            viewCartButton.addEventListener('click', () => viewCart());
            addToCartButton.addEventListener('click', function () {
            changeColorAndRevert(addToCartButton);
        });
            
            
            cardBody.appendChild(title);
            cardBody.appendChild(author);
            cardBody.appendChild(desc);
            cardBody.appendChild(price);
            cardBody.appendChild(addToCartButton);
            cardBody.appendChild(viewCartButton);

            card.appendChild(img);
            card.appendChild(cardBody);
            bookContainer.appendChild(card);
        });
        function changeColorAndRevert(button) {
        button.style.backgroundColor = '#001F3F';
        setTimeout(function () {
            button.style.backgroundColor = '#FFD700';
        }, 1000);
    }

    }