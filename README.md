# Personal Portfolio Website - Njoku Nicholas C.

<img width="2880" height="1554" alt="image" src="https://github.com/user-attachments/assets/8e715b10-94ec-4432-9260-d12f1db1ae26" />

This is the official repository for the personal portfolio website of Njoku Nicholas C., a certified Workflow Specialist and Project Manager. The site is designed to showcase my skills, professional experience, and notable projects in a clean, modern, and interactive way.

**Visit the live site:** https://cute-otter-fd33fa.netlify.app/

---

## 🌟 Features

*   **Modern & Responsive Design**: Fully responsive layout that looks great on all devices, from mobile phones to desktops.
*   **Dark/Light Mode Toggle**: User-friendly theme switcher that respects the user's system preference on first visit and saves their choice for future visits.
*   **Interactive Animations**: Smooth, subtle animations on scroll (using AOS), floating elements, and interactive hover effects to enhance user experience.
*   **Typed.js Welcome Text**: An animated typing effect in the hero section that cycles through my professional titles.
*   **Custom Cursor Follower**: A stylish cursor follower for a unique browsing experience on desktop devices.
*   **Dynamic Skills Section**:
    *   Filterable skills to view by category (Project Management, Technical, etc.).
    *   Animated skill bars that fill up when they enter the viewport.
    *   A radar chart (using Chart.js) to visually represent key skill proficiency levels.
*   **Professional Experience Timeline**: A clean, vertical timeline to chronologically display my career journey.
*   **Functional Contact Form**: A secure, functional "Get in Touch" form that sends messages directly to my email using **EmailJS**, without needing a backend server.
*   **Built with Modern Tools**: Styled with Tailwind CSS for a utility-first workflow and written with clean, organized HTML, CSS, and JavaScript.

---

## 🛠️ Tech Stack & Libraries

This project was built using a variety of modern web technologies and libraries:

*   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)
*   **Interactivity**:
    *   [Typed.js](https://github.com/mattboldt/typed.js) - for the hero section typing animation.
    *   [Chart.js](https://www.chartjs.org/) - for the skills radar chart.
*   **Contact Form**: [EmailJS](https://www.emailjs.com/) - for client-side email sending.
*   **Icons**: [Font Awesome](https://fontawesome.com/)

---

## 🚀 Setup and Local Installation

Want to run this project on your local machine? Follow these simple steps.

### Prerequisites

You just need a modern web browser. No complex dependencies are required to view the site.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Open `index.html` in your browser:**
    Simply drag the `index.html` file into your browser window or use a live server extension (like "Live Server" in VS Code) for a better development experience with hot-reloading.

---

### Setting Up the Contact Form

The contact form uses **Formspree** to function. It will not work out-of-the-box after cloning. To get it working, you need to:

1.  **Create a free Formspree account** at [https://formspree.io/](https://formspree.io/).
2.  Create a new form and you will be given a unique URL endpoint.
3.  Open the `index.html` file and find the `<form>` element in the "Contact Section".
4.  Replace the `action` attribute's placeholder value with your unique Formspree URL:

    ```html
    <!-- In index.html, find the contact form -->
    <form id="contact-form"
          action="https://formspree.io/f/YOUR_UNIQUE_CODE" <!-- 👈 Replace this URL -->
          method="POST"
          class="space-y-6">

        <!-- ... all your form inputs are here ... -->

    </form>
    ```
5. Make sure your input fields have a `name` attribute (e.g., `<input type="email" name="email">`), as Formspree uses these names to structure the submitted data.

---

## 📬 Contact

*   **Email**: `nicholascents77@gmail.com`
*   **LinkedIn**: https://www.linkedin.com/in/nicholas-njoku-897054223/

---

## License

This project is open source and available under the [MIT License](LICENSE).
