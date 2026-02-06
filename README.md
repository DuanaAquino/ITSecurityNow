# Avexla Website (Light & Dark Mode)

This project is a responsive website for the Healthcare Technology Solutions company named AVEXLA.
The Website implements a **Light / Dark Mode toggle**, allowing users to switch themes with a single click. The selected theme is saved using **localStorage**, so the preference persists even after refreshing the page.

The project was built with a strong focus on **clean JavaScript logic**, **CSS variables**, and **good front-end practices**.

---

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

---

## 💡 What I Learned

* How to manage themes using `data-theme` and CSS variables
* How to avoid conflicting JavaScript event listeners
* How to persist UI state using `localStorage`
* How to debug UI issues caused by duplicated logic

---

## 📌 Future Improvements

* Add smooth transition animations between themes
* Improve accessibility (ARIA labels for toggle button)
* Add system theme detection (`prefers-color-scheme`)

---

## 👩‍💻 Author

**Duana Aquino**
Front-End Developer | 3D Artist | Game Dev Student

* GitHub: [https://github.com/DuanaAquino](https://github.com/DuanaAquino)
* LinkedIn: [https://www.linkedin.com/in/duana-aquino/](https://www.linkedin.com/in/duana-aquino/)

---

⭐ If you liked this project, feel free to star the repository!
