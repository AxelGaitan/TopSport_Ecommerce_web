This project is an ecommerce website developed for the brand Kai, focused on selling sports tops. It started from a basic HTML and CSS layout and was improved into a professional, dynamic, responsive site connected to a local database. The main idea was for the client to receive online orders, store them locally, and manage the store from a single place.

The frontend uses HTML, CSS, and JavaScript. The structure includes sections for showcasing products, placing orders, contact info, and smooth navigation. Space was also reserved for the brand logo, product images, and social media links, which can be loaded manually from /public/img or edited directly in the HTML.

The backend is built with Node.js and Express, and the database used is SQLite. A file called server.js was created to handle form submissions and store them in a "pedidos" table inside a local pedidos.db file. Body-parser was used to receive JSON data, and everything is set up so any visitor can submit an order and have it saved in the database.

To install the required dependencies, Node.js was downloaded and installed from its official site, and then verified using the commands node -v and npm -v. Inside the root folder, the following was run:

npm install express body-parser sqlite3

Once installed, the project runs locally using:

node server.js

The site is then accessible at http://localhost:3000 from any browser.

The code is already structured for deployment to GitHub and from there, it can be launched online via platforms like Render or Railway. Just upload the repo, link an external database if you want persistent storage, and launch it as a Web Service.

All the design, structure, and connections are set up so the client can manage, modify, add products, images, or texts, and keep their store updated without starting from scratch.
