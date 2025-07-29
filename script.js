// Sample product data with Indian Rupee prices and your specified image names
const products = [
    {
        id: 1,
        name: "Premium Wireless Earbuds",
        price: 7999.00, // INR
        // IMPORTANT: Replace "images/" with your actual image folder path if different.
        // Ensure "Premium Wireless Earbuds.jpg" is the exact filename.
        image: "images/premium wireless earbuds.jpg",
        description: "Immersive audio experience with active noise cancellation and long battery life."
    },
    {
        id: 2,
        name: "Ultra-Thin Laptop",
        price: 65999.00, // INR
        // IMPORTANT: Replace "images/" with your actual image folder path if different.
        // Ensure "Laptop.jpg" is the exact filename.
        image: "images/latop.jpg",
        description: "Powerful performance in a sleek, lightweight design for professionals on the go."
    },
    {
        id: 3,
        name: "Smart Home Assistant",
        price: 3499.00, // INR
        // IMPORTANT: Replace "images/" with your actual image folder path if different.
        // Ensure "Smart Home Assistant.jpg" is the exact filename.
        image: "images/smart home assistant.jpg",
        description: "Control your home with voice commands, play music, and get instant answers."
    },
    {
        id: 4,
        name: "Professional DSLR Camera",
        price: 49999.00, // INR
        // IMPORTANT: Replace "images/" with your actual image folder path if different.
        // Ensure "Professional DSLR Camera.jpg" is the exact filename.
        image: "images/professional-dslr-camera.jpg",
        description: "Capture breathtaking photos and videos with advanced features and stunning clarity."
    },
    {
        id: 5,
        name: "Ergonomic Office Chair",
        price: 12500.00, // INR
        // IMPORTANT: Replace "images/" with your actual image folder path if different.
        // Ensure "Ergonomic Office Chair.jpg" is the exact filename.
        image: "images/Ergonomic Office Chair.jpg",
        description: "Designed for ultimate comfort and support during long working hours."
    },
    {
        id: 6,
        name: "High-Performance Gaming PC",
        price: 120000.00, // INR
        // IMPORTANT: Replace "images/" with your actual image folder path if different.
        // Ensure "High-Performance Gaming PC.jpg" is the exact filename.
        image: "images/High-Performance Gaming PC.webp",
        description: "Experience gaming at its peak with cutting-edge components and stunning graphics."
    },
    {
        id: 7,
        name: "Portable Espresso Maker",
        price: 5800.00, // INR
        // IMPORTANT: Replace "images/" with your actual image folder path if different.
        // Ensure "Portable Espresso Maker.jpg" is the exact filename.
        image: "images/Portable Espresso Maker.webp",
        description: "Enjoy rich, fresh espresso anywhere, anytime with this compact device."
    },
    {
        id: 8,
        name: "Noise-Cancelling Over-Ear Headphones",
        price: 18999.00, // INR
        // IMPORTANT: Replace "images/" with your actual image folder path if different.
        // Ensure "Noise-Cancelling Over-Ear Headphones.jpg" is the exact filename.
        image: "images/Noise-Cancelling Over-Ear Headphones.webp",
        description: "Immerse yourself in pure sound with industry-leading noise cancellation."
    },
    {
        id: 9,
        name: "Smart LED Desk Lamp",
        price: 2899.00, // INR
        // IMPORTANT: Replace "images/" with your actual image folder path if different.
        // Ensure "Smart LED Desk Lamp.jpg" is the exact filename.
        image: "images/Smart LED Desk Lamp.webp",
        description: "Adjust brightness and color temperature with smart controls for optimal lighting."
    },
    {
        id: 10,
        name: "Fitness Tracker Band",
        price: 3999.00, // INR
        // IMPORTANT: Replace "images/" with your actual image folder path if different.
        // Ensure "Fitness Tracker Band.jpg" is the exact filename.
        image: "images/Fitness Tracker Band.jpg",
        description: "Monitor your health, track workouts, and stay motivated with this sleek band."
    }
];

let cart = []; // Array to store cart items

// Get DOM elements for sections and navigation
const productGridSection = document.getElementById('product-grid-section');
const aboutUsSection = document.getElementById('about-us-section');
const contactUsSection = document.getElementById('contact-us-section');
const categoriesSection = document.getElementById('categories-section'); // New: Categories section

const homeNavLink = document.getElementById('home-nav-link');
const shopNavLink = document.getElementById('shop-nav-link');
const categoriesNavLink = document.getElementById('categories-nav-link'); // New: Categories nav link
const aboutUsNavLink = document.getElementById('about-us-nav-link');
const contactNavLink = document.getElementById('contact-nav-link');

const mobileHomeNavLink = document.getElementById('mobile-home-nav-link');
const mobileShopNavLink = document.getElementById('mobile-shop-nav-link');
const mobileCategoriesNavLink = document.getElementById('mobile-categories-nav-link'); // New: Mobile Categories nav link
const mobileAboutUsNavLink = document.getElementById('mobile-about-us-nav-link');
const mobileContactNavLink = document.getElementById('mobile-contact-nav-link');

// Other existing DOM elements
const productGrid = document.getElementById('product-grid');
const cartButton = document.getElementById('cart-button');
const cartCount = document.getElementById('cart-count');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartButton = document.getElementById('close-cart-button');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalDisplay = document.getElementById('cart-total');
const emptyCartMessage = document.getElementById('empty-cart-message');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Contact form specific elements
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');


// Function to show a specific section and hide others
function showSection(sectionToShow) {
    // Hide all main content sections first
    document.querySelectorAll('.main-content-section').forEach(section => {
        section.classList.add('hidden');
    });
    // Then show the desired section
    sectionToShow.classList.remove('hidden');
}


// Function to render products dynamically
function renderProducts() {
    productGrid.innerHTML = ''; // Clear existing products
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
            <div class="p-5 flex-grow flex flex-col justify-between">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">${product.name}</h3>
                    <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                </div>
                <div class="flex justify-between items-center mt-auto">
                    <span class="price text-2xl font-bold text-indigo-600">₹${product.price.toFixed(2)}</span>
                    <button data-id="${product.id}" class="add-to-cart-btn bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.id);
            addToCart(productId);
        });
    });
}

// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartUI();
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Function to update cart UI (sidebar, count, total)
function updateCartUI() {
    cartItemsContainer.innerHTML = ''; // Clear existing cart items
    let total = 0;

    if (cart.length === 0) {
        emptyCartMessage.classList.remove('hidden');
    } else {
        emptyCartMessage.classList.add('hidden');
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm';
            cartItem.innerHTML = `
                <div class="flex items-center space-x-3">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md">
                    <div>
                        <h4 class="font-medium text-gray-800">${item.name}</h4>
                        <p class="text-sm text-gray-600">₹${item.price.toFixed(2)} x ${item.quantity}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <span class="font-semibold text-gray-800">₹${(item.price * item.quantity).toFixed(2)}</span>
                    <button data-id="${item.id}" class="remove-from-cart-btn text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.quantity;
        });
    }

    cartTotalDisplay.textContent = `₹${total.toFixed(2)}`;
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Add event listeners to "Remove" buttons in cart
    document.querySelectorAll('.remove-from-cart-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.dataset.id);
            removeFromCart(productId);
        });
    });
}

// Event listeners for cart sidebar
cartButton.addEventListener('click', () => {
    cartSidebar.classList.remove('translate-x-full');
});

closeCartButton.addEventListener('click', () => {
    cartSidebar.classList.add('translate-x-full');
});

// Event listener for mobile menu
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Navigation link event listeners for desktop
homeNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(productGridSection);
});

shopNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(productGridSection);
});

categoriesNavLink.addEventListener('click', (e) => { // New: Desktop Categories link
    e.preventDefault();
    showSection(categoriesSection);
});

aboutUsNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(aboutUsSection);
});

contactNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(contactUsSection);
});

// Navigation link event listeners for mobile
mobileHomeNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(productGridSection);
    mobileMenu.classList.add('hidden'); // Hide mobile menu after selection
});

mobileShopNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(productGridSection);
    mobileMenu.classList.add('hidden'); // Hide mobile menu after selection
});

mobileCategoriesNavLink.addEventListener('click', (e) => { // New: Mobile Categories link
    e.preventDefault();
    showSection(categoriesSection);
    mobileMenu.classList.add('hidden'); // Hide mobile menu after selection
});

mobileAboutUsNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(aboutUsSection);
    mobileMenu.classList.add('hidden'); // Hide mobile menu after selection
});

mobileContactNavLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(contactUsSection);
    mobileMenu.classList.add('hidden'); // Hide mobile menu after selection
});

// Contact Form Submission Handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // In a real application, you would send this data to a server
    // For this frontend-only example, we'll just log it and show a success message.
    console.log('Contact Form Submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Show success message
    formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
    formMessage.classList.remove('hidden');
    formMessage.classList.add('text-green-600'); // Ensure it's green for success

    // Optionally clear the form
    contactForm.reset();

    // Hide message after a few seconds
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000); // Message disappears after 5 seconds
});


// Initial render when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI(); // Initialize cart UI on load
    showSection(productGridSection); // Ensure product grid is visible on initial load
});
