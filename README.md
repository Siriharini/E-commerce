SmartSphere is a modern, responsive, and interactive e-commerce website front-end. Built with a focus on clean code and user experience, it simulates an online shopping platform where users can browse products, add items to a dynamic shopping cart, and navigate between different sections of the site. This project serves as a comprehensive demonstration of front-end development skills using core web technologies.

## ✨ Features

* **Dynamic Product Grid:** Products are loaded dynamically using JavaScript, allowing for easy updates and management.
* **Interactive Shopping Cart:** Users can add and remove items from the cart, with real-time updates to the cart count and total.
* **Responsive Navigation:** A clean header with desktop and mobile-friendly navigation menus.
* **Multi-Section Layout:** Seamless navigation between:
    * **Home/Shop:** Displays the main product grid.
    * **Categories:** Provides information about different product categories.
    * **About Us:** Details the company's story and commitment.
    * **Contact:** A functional form for customer inquiries (frontend-only submission for now).
* **Consistent Branding:** A unified color palette (`#4D1C3E`) applied across key UI elements for a cohesive brand identity.
* **Modern UI/UX:** Utilizes Tailwind CSS for a utility-first approach to styling, ensuring a sleek and modern look with smooth transitions and shadows.

## 🛠️ Technologies Used

* **HTML5:** For the core structure and content of the web pages.
* **Tailwind CSS:** A utility-first CSS framework for rapid and responsive styling.
* **Vanilla JavaScript:** For all dynamic functionalities, including product rendering, cart management, and section navigation.

## 📦 How to Run Locally

To get a copy of this project up and running on your local machine for development and testing, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd SmartSphere
    ```
    *(Replace `<your-repo-url>` with the actual URL of your GitHub repository)*

2.  **Create an `images` folder:**
    In the root directory of the project (where `commerce.html`, `commerce.css`, and `commerce.js` are located), create a new folder named `images`.

3.  **Add your product images:**
    Place your product image files into the newly created `images` folder. Ensure the filenames exactly match those specified in `commerce.js` (e.g., `Premium Wireless Earbuds.jpg`, `Laptop.jpg`, etc.). Pay attention to capitalization and file extensions (`.jpg`, `.png`, `.webp`, etc.).

4.  **Open `commerce.html`:**
    Simply open the `commerce.html` file in your preferred web browser. No local server is required for this front-end only project.

##  Customizing Product Images

The product data, including image paths, is defined in `commerce.js`. To use your own images:

1.  **Open `commerce.js`**.
2.  Locate the `products` array.
3.  For each product object, update the `image` property with the correct path to your image file within the `images` folder.
    Example: `image: "images/your-custom-image-name.jpg"`

 
