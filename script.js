// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS animations
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  // Hide preloader when page loads
  setTimeout(function () {
    document
      .getElementById("preloader")
      .classList.add("opacity-0", "invisible");
    setTimeout(function () {
      document.getElementById("preloader").style.display = "none";
    }, 500);
  }, 1000);

  // Set current year in footer
  document.getElementById("current-year").textContent =
    new Date().getFullYear();

  // Initialize typed.js for hero section
  var typed = new Typed("#typed", {
    strings: [
      "Certified Workflow Specialist",
      "Project Manager",
      "Virtual Assistant",
      "Technical Professional",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: true,
    cursorChar: "|",
  });

  // Dark mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");

  if (
    localStorage.getItem("dark-mode") === "true" ||
    (!localStorage.getItem("dark-mode") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    themeToggle.innerHTML = '<i class="fas fa-sun text-yellow-300"></i>';
  } else {
    document.documentElement.classList.remove("dark");
    themeToggle.innerHTML = '<i class="fas fa-moon text-slate-700"></i>';
  }

  themeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
      themeToggle.innerHTML = '<i class="fas fa-sun text-yellow-300"></i>';
    } else {
      localStorage.setItem("dark-mode", "false");
      themeToggle.innerHTML = '<i class="fas fa-moon text-slate-700"></i>';
    }
  });

  mobileThemeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
      themeToggle.innerHTML = '<i class="fas fa-sun text-yellow-300"></i>';
    } else {
      localStorage.setItem("dark-mode", "false");
      themeToggle.innerHTML = '<i class="fas fa-moon text-slate-700"></i>';
    }
  });

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });
  });

  // Back to top button
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove("opacity-0", "invisible");
    } else {
      backToTopButton.classList.add("opacity-0", "invisible");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Active navigation link highlighting
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("text-blue-500", "dark:text-blue-400");
      link.classList.add("text-slate-700", "dark:text-slate-300");

      if (link.getAttribute("href") === `#${current}`) {
        link.classList.remove("text-slate-700", "dark:text-slate-300");
        link.classList.add("text-blue-500", "dark:text-blue-400");
      }
    });
  });

  // Cursor follower effect
  const cursorFollower = document.querySelector(".cursor-follower");

  if (window.innerWidth > 768) {
    cursorFollower.classList.remove("hidden");

    document.addEventListener("mousemove", function (e) {
      cursorFollower.style.left = e.clientX + "px";
      cursorFollower.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button, .project-card").forEach((element) => {
      element.addEventListener("mouseenter", function () {
        cursorFollower.style.transform = "translate(-50%, -50%) scale(2)";
        cursorFollower.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
      });

      element.addEventListener("mouseleave", function () {
        cursorFollower.style.transform = "translate(-50%, -50%) scale(1)";
        cursorFollower.style.backgroundColor = "rgba(59, 130, 246, 0.3)";
      });
    });
  }

  // Create particles for hero section
  function createParticles() {
    const particlesContainer = document.querySelector(".hero-gradient");
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random size between 2px and 5px
      const size = Math.random() * 3 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Random color (blue or emerald)
      const colors = ["rgba(59, 130, 246, 0.5)", "rgba(16, 185, 129, 0.5)"];
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

      // Random animation
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

      particlesContainer.appendChild(particle);
    }
  }

  createParticles();

  // Skills data
  const skillsData = [
    // Project Management
    { name: "Project Planning", category: "project", level: 95 },
    { name: "Stakeholder Management", category: "project", level: 90 },
    { name: "Asana/Trello", category: "project", level: 92 },
    { name: "Cost Analysis", category: "project", level: 88 },
    { name: "Compliance Monitoring", category: "project", level: 85 },

    // Administrative
    { name: "Calendar Management", category: "admin", level: 97 },
    { name: "Interview Coordination", category: "admin", level: 90 },
    { name: "Onboarding", category: "admin", level: 88 },
    { name: "Conflict Resolution", category: "admin", level: 85 },

    // Technical
    { name: "Zoom/Slack", category: "tech", level: 95 },
    { name: "Google Workspace", category: "tech", level: 93 },
    { name: "CRM Software", category: "tech", level: 85 },
    { name: "Microsoft Office", category: "tech", level: 90 },

    // Soft Skills
    { name: "Leadership", category: "soft", level: 92 },
    { name: "Problem Solving", category: "soft", level: 94 },
    { name: "Communication", category: "soft", level: 96 },
    { name: "Multi-tasking", category: "soft", level: 90 },
  ];

  // Render skills
  function renderSkills(category = "all") {
    const skillsContainer = document.getElementById("skills-container");
    skillsContainer.innerHTML = "";

    const filteredSkills =
      category === "all"
        ? skillsData
        : skillsData.filter((skill) => skill.category === category);

    filteredSkills.forEach((skill) => {
      const skillElement = document.createElement("div");
      skillElement.className =
        "bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg";
      skillElement.innerHTML = `
                      <div class="flex justify-between items-center mb-2">
                          <h3 class="font-medium text-slate-800 dark:text-white">${skill.name}</h3>
                          <span class="text-sm font-medium text-blue-500">${skill.level}%</span>
                      </div>
                      <div class="skill-bar">
                          <div class="skill-progress" data-level="${skill.level}"></div>
                      </div>
                  `;
      skillsContainer.appendChild(skillElement);
    });

    // Animate skill bars when they come into view
    const skillProgressBars = document.querySelectorAll(".skill-progress");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const level = entry.target.getAttribute("data-level");
            entry.target.style.width = `${level}%`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillProgressBars.forEach((bar) => {
      observer.observe(bar);
    });
  }

  // Initialize skills
  renderSkills();

  // Skill category tabs
  const skillTabs = document.querySelectorAll(".skill-tab");
  skillTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      skillTabs.forEach((t) =>
        t.classList.remove("active", "bg-blue-500", "text-white")
      );
      this.classList.add("active", "bg-blue-500", "text-white");

      const category = this.getAttribute("data-category");
      renderSkills(category);
    });
  });

  // Skills radar chart
  const skillsChartCtx = document
    .getElementById("skillsChart")
    .getContext("2d");
  const skillsChart = new Chart(skillsChartCtx, {
    type: "radar",
    data: {
      labels: [
        "Project Planning",
        "Stakeholder Mgmt",
        "Calendar Mgmt",
        "CRM Software",
        "Leadership",
        "Problem Solving",
      ],
      datasets: [
        {
          label: "Skill Proficiency",
          data: [95, 90, 97, 85, 92, 94],
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          borderColor: "rgba(59, 130, 246, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(59, 130, 246, 1)",
          pointRadius: 4,
        },
      ],
    },
    options: {
      scales: {
        r: {
          angleLines: {
            color: "rgba(203, 213, 225, 0.5)",
          },
          grid: {
            color: "rgba(203, 213, 225, 0.5)",
          },
          suggestedMin: 50,
          suggestedMax: 100,
          ticks: {
            backdropColor: "transparent",
            color: "rgba(100, 116, 139, 1)",
          },
          pointLabels: {
            color: "rgba(100, 116, 139, 1)",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      elements: {
        line: {
          tension: 0.1,
        },
      },
    },
  });

  // Contact form validation
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Reset errors
    document.querySelectorAll('[id$="-error"]').forEach((el) => {
      el.classList.add("hidden");
    });

    // Validate form
    let isValid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name) {
      document.getElementById("name-error").classList.remove("hidden");
      isValid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("email-error").classList.remove("hidden");
      isValid = false;
    }

    if (!subject) {
      document.getElementById("subject-error").classList.remove("hidden");
      isValid = false;
    }

    if (!message) {
      document.getElementById("message-error").classList.remove("hidden");
      isValid = false;
    }

    if (isValid) {
      // Simulate form submission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const submitText = document.getElementById("submit-text");

      submitButton.disabled = true;
      submitText.textContent = "Sending...";

      setTimeout(function () {
        submitText.textContent = "Message Sent!";
        document.getElementById("form-success").classList.remove("hidden");

        // Reset form after 3 seconds
        setTimeout(function () {
          contactForm.reset();
          submitText.textContent = "Send Message";
          submitButton.disabled = false;
          document.getElementById("form-success").classList.add("hidden");
        }, 3000);
      }, 1500);
    }
  });

  // Copy email to clipboard
  document.querySelectorAll("[data-clipboard-text]").forEach((element) => {
    element.addEventListener("click", function () {
      const text = this.getAttribute("data-clipboard-text");
      navigator.clipboard.writeText(text).then(() => {
        const tooltip = this.querySelector(".tooltip");
        tooltip.classList.remove("hidden");
        setTimeout(() => {
          tooltip.classList.add("hidden");
        }, 2000);
      });
    });
  });
});
