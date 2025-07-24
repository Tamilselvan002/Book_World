# 📚 Book World

**Book World** is a full-stack web application where users can explore, manage, and interact with books. Built using **Node.js**, **Express.js**, and **MySQL**, it provides a smooth experience for both users and administrators.

🔗 [Live Site](https://book-world-nrv7.onrender.com)

---

## ✨ Features

- 📘 **Display Books** – Browse the collection of books.
- ➕ **Add Book** – Add new books to the library.
- ✏️ **Edit Book** – Update book details.
- ❌ **Delete Book** – Remove a book from the list.
- 🔒 **Login** – Simple user login for admin access.
- 🧾 **About Page** – Information about the Book World platform.
- 📞 **Contact Page** – Get in touch or send feedback.

---

## 🛠️ Tech Stack

**Frontend:**
- Handlebars (template engine)
- HTML, CSS, JavaScript

**Backend:**
- Node.js
- Express.js

**Database:**
- MySQL (configured through PHPMyAdmin via XAMPP)

**Hosting:**
- Render (Web Services)

---

## 🗂️ Project Structure

Book_World/
├── public/
│ └── css/, js/, images/
├── views/
│ └── home.hbs, login.hbs, about.hbs, contact.hbs, editBook.hbs, addBook.hbs
├── routes/
│ └── bookRoutes.js
├── controllers/
│ └── booksController.js
├── db/
│ └── connection.js
├── server.js
└── .env

markdown
Copy
Edit

---

## 💾 Database

- Managed using **XAMPP's PHPMyAdmin**
- Uses `mysql2` or `mysql` Node.js module
- Database name: `bookworld`
- Tables:
  - `books`
  - `users`
  - `contacts` (optional for storing contact form submissions)

📸 Screenshots (Optional)
You can add screenshots of your project pages here:

Home Page
![image alt](https://github.com/Tamilselvan002/Book_World/blob/2950e216fcd0cba3b7dbfd8f5565709db8ff4cb1/book_1.png)
Add/Edit Book Form
![image alt](https://github.com/Tamilselvan002/Book_World/blob/ccdecb020cdf363eb676288077671181f603c648/book_4.png)
![image alt](https://github.com/Tamilselvan002/Book_World/blob/114adb32507fa54afdaf838ffab6e3de04c29826/book_5.png)
![image alt](https://github.com/Tamilselvan002/Book_World/blob/9049de4e48fa46befa669266e2ecd37b65a30d43/book_6.png)
![image alt](https://github.com/Tamilselvan002/Book_World/blob/7e03d1aaea32063dd82550a532b64a00bf2f9673/book_7.png)

Login Page
![image alt]()
![image alt]()
Contact Page
![image alt](https://github.com/Tamilselvan002/Book_World/blob/8ec6b8f3f7a2bf1a23adfc3a7d03f63e4c01e068/book_9.png)
About
![image alt](https://github.com/Tamilselvan002/Book_World/blob/3f76362e1f8fdbffa2f9ba90ce2f9aae282eea7a/book_8.png)

### Example `.env` file:
```env
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=bookworld
🚀 Running Locally
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/<your-username>/Book_World.git
cd Book_World
Install Dependencies:

bash
Copy
Edit
npm install
Set Up Database:

Start XAMPP and enable Apache and MySQL

Create a database bookworld in PHPMyAdmin

Import the SQL file (if provided) or create tables manually

Configure Environment Variables:

Create a .env file in the root:

env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=bookworld
Start the Server:

bash
Copy
Edit
node server.js
Open in Browser:

Go to http://localhost:10000

🌐 Live Deployment
🖥️ Hosted on Render

🔗 https://book-world-nrv7.onrender.com

🙋‍♂️ Author
Tamilselvan S

GitHub: @Tamilselvan002
