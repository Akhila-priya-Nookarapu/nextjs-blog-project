# Next.js Blog Application with Docker and SSG

This project is a blog application built using Next.js.  
It uses Static Site Generation (SSG), MDX for content management, and Docker for containerized deployment.

The application automatically generates sitemap and RSS feed files during the build process.

---

## 🚀 Features

- Static Site Generation (SSG) using `getStaticProps` and `getStaticPaths`
- Blog posts written in MDX format
- Reading time calculation for each post
- Automatic sitemap.xml generation
- Automatic RSS feed generation
- Custom 404 page
- SEO support using next-seo
- Dockerized deployment using Docker and Docker Compose
- Production-ready build

---

## 📁 Project Structure

Sure bro 👍 — here is the exact code you need to paste into your README.md file.

👉 Just copy everything below and paste it in README.md.

✅ COPY THIS CODE
# Next.js Blog Application with Docker and SSG

This project is a blog application built using Next.js.  
It uses Static Site Generation (SSG), MDX for content management, and Docker for containerized deployment.

The application automatically generates sitemap and RSS feed files during the build process.

---

## 🚀 Features

- Static Site Generation (SSG) using getStaticProps and getStaticPaths
- Blog posts written in MDX format
- Reading time calculation for each post
- Automatic sitemap.xml generation
- Automatic RSS feed generation
- Custom 404 page
- SEO support using next-seo
- Dockerized deployment using Docker and Docker Compose
- Production-ready build

---

## 📁 Project Structure



nextjs-blog-project/
│
├── posts/ # Blog content in MDX format
├── src/
│ ├── pages/ # Next.js pages
│ └── utils/ # Utility functions
├── scripts/ # Sitemap and RSS generator
├── public/ # Generated files (sitemap, rss)
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .env.example
└── README.md


---

## ⚙️ Requirements

- Docker Desktop
- Git
- Web Browser (Chrome/Edge/Firefox)

---

## ▶️ How to Run the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/Akhila-priya-Nookarapu/nextjs-blog-project.git
cd nextjs-blog-project

Step 2: Build and Run Using Docker
docker-compose up --build

Step 3: Open in Browser

Open:

http://localhost:3000

🧪 Testing the Application
Home Page
http://localhost:3000


Displays all blog posts.

Blog Post Page
http://localhost:3000/posts/post1


Displays post content with reading time.

Sitemap
http://localhost:3000/sitemap.xml


Shows all blog URLs.

RSS Feed
http://localhost:3000/rss.xml


Shows blog feed.

404 Page
http://localhost:3000/random-page


Displays "Not Found" page.

📦 Build for Production

The project uses production build inside Docker.

docker-compose up --build


This command builds optimized static pages.

📝 Environment Variables

Example environment file:

.env.example


Copy and modify if needed.

👩‍💻 Technologies Used

Next.js

React

Node.js

MDX

Docker

Docker Compose

📌 Author

Akhila Priya Nookarapu

GitHub: https://github.com/Akhila-priya-Nookarapu