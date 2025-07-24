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

📸 Screenshots (Optional)
You can add screenshots of your project pages here:

Home Page
![image alt]()
Add/Edit Book Form
![image alt]()
![image alt]()
![image alt]()
![image alt]()

Login Page
![image alt]()
![image alt]()
Contact Page
![image alt]()
About
![image alt]()
