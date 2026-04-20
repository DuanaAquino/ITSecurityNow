## Avexla Website 

<img width="1889" height="866" alt="print (5)" src="https://github.com/user-attachments/assets/56e2214b-ae01-41aa-9022-8f1e094a0b43" />

This project is a responsive website for the Healthcare Technology Solutions company named AVEXLA.
The Website implements a **Light / Dark Mode toggle**, allowing users to switch themes with a single click. The selected theme is saved using **localStorage**, so the preference persists even after refreshing the page.

The project was built with a strong focus on **clean JavaScript logic**, **CSS variables**, and **good front-end practices**.

---

## 🔗 Live Demo

<img width="400" height="182" alt="demo" src="https://github.com/user-attachments/assets/a6d560a2-78fa-412c-bfce-db73ea39a3ab" />

https://avexla.netlify.app

## ✨ Features

* Light and Dark theme toggle
* Theme preference saved in `localStorage`
* Icon changes dynamically (Sun ☀️ / Moon 🌙)
* Banner with fixed image + gradient (not affected by theme)
* Background colors change correctly without breaking the banner design
* Fully responsive layout

---

## 🛠️ Technologies Used

* HTML5
* CSS3 (CSS Variables & `data-theme`)
* JavaScript (Vanilla JS)
* LocalStorage

---

## 🧠 How It Works

The theme system is controlled by a `data-theme` attribute applied to the `<body>` element:

* `data-theme="light"`
* `data-theme="dark"`

CSS variables handle all color changes, making the theme switch clean and scalable.

JavaScript is responsible for:

* Detecting the saved theme
* Applying the correct theme on page load
* Toggling the theme on button click
* Updating the toggle icon

---

## 📂 Project Structure

```
├── index.html
├── about.html
├── style.css
├── script.js
└── assets/
    └── images
```

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repository-name.git
```

2. Open `index.html` in your browser

No build tools or dependencies required.

---

## 📸 Preview

> You can add screenshots or a GIF here showing the theme toggle in action.

<img width="300" height="auto" alt="print (6)" src="https://github.com/user-attachments/assets/d4996283-52c2-4649-b03f-b6559f79ce12" />
<img width="300" height="auto" alt="print (5)" src="https://github.com/user-attachments/assets/fb5349c7-9fda-4ffe-9b67-e569f9d701a2" />
<img width="300" height="auto" alt="print (4)" src="https://github.com/user-attachments/assets/9835c98d-fe24-40eb-96d0-c735e97d83ad" />
<img width="300" height="auto" alt="print (3)" src="https://github.com/user-attachments/assets/e2a19cad-ee73-493f-8c4c-e7bdbbba411f" />
<img width="300" height="auto" alt="print (2)" src="https://github.com/user-attachments/assets/ac468168-9003-40a6-8656-783ca5f8c407" />
<img width="300" height="auto" alt="print (1)" src="https://github.com/user-attachments/assets/ebd1e96a-018c-4358-8ee9-c48b4b43f0d7" />


## 💡 What I Learned

* How to manage themes using `data-theme` and CSS variables
* How to avoid conflicting JavaScript event listeners
* How to persist UI state using `localStorage`
* How to debug UI issues caused by duplicated logic

---

## 👩‍💻 Author

**Duana Aquino**
Front-End Developer | 3D Artist | Game Dev Student

* GitHub: [https://github.com/DuanaAquino](https://github.com/DuanaAquino)
* LinkedIn: [https://www.linkedin.com/in/duana-aquino/](https://www.linkedin.com/in/duana-aquino/)

---

⭐ If you liked this project, feel free to star the repository!
