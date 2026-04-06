const blogs = [
    {
    id: 1,
    title: "My First Semester Journey – Learning & Growth",
    date: "January 15, 2026",
    category: "Education",
    tags: ["semester-1", "learning"],
    excerpt: "A reflection on my first semester at university, challenges, and initial steps into programming.",
    content: `
        <h1>My First Semester Journey – Learning & Growth</h1>
        <p class="date">January 15, 2026 • Education</p>

        <h3>Beginning of University Life</h3>
        <p>My first semester was a completely new experience for me. I entered university with excitement and curiosity to learn.</p>

        <h3>Introduction to Programming</h3>
        <p>I studied Programming Fundamentals, where we worked with Python. It was my first proper introduction to coding.</p>

        <h3>Initial Difficulties</h3>
        <p>At the beginning, I faced many problems in understanding programming. The logic and syntax were confusing and difficult.</p>

        <h3>Struggle with Logic Building</h3>
        <p>Problem-solving and building logic were the hardest parts. I often got errors and struggled to fix them.</p>

        <h3>Consistent Effort</h3>
        <p>With time, I kept practicing and did not give up. My consistency helped me improve step by step.</p>

        <h3>Understanding Python</h3>
        <p>Gradually, I started understanding Python concepts better. Programming became more interesting and manageable.</p>

        <h3>Machine Learning Project</h3>
        <p>Our semester project was based on Machine Learning. It was a new and exciting field for me.</p>

        <h3>Car Price Prediction Model</h3>
        <p>We trained a model to predict car prices based on different factors. This project gave me practical exposure to real-world applications.</p>

        <h3>Project Exhibition</h3>
        <p>We presented our project in the exhibition. It boosted my confidence and communication skills.</p>

        <h3>Academic Achievement</h3>
        <p>I achieved a 3.1 GPA and secured a B+ grade in Programming Fundamentals. This result made me satisfied and motivated for the future.</p>
    `
},
    {
    id: 2,
    title: "My Second Semester Journey – Growth, Leadership & Experiences",
    date: "April 1, 2026",
    category: "Education",
    tags: ["semester-2", "growth"],
    excerpt: "How I improved from the first semester, learned MySQL, gained leadership experience, and balanced studies with extracurriculars.",
    content: `
        <h1>My Second Semester Journey – Growth, Leadership & Experiences</h1>
        <p class="date">April 1, 2026 • Education</p>

        <blockquote>
            "Success is not final, failure is not fatal: it is the courage to continue that counts."
        </blockquote>

        <h3>Motivation from First Semester</h3>
        <p>After achieving a 3.1 GPA, I felt motivated to perform even better. This result gave me confidence to move forward with a positive mindset.</p>

        <h3>A Fresh Start</h3>
        <p>I started my second semester with determination and clear goals. I wanted to improve my academic performance and skills.</p>

        <h3>Academic Load</h3>
        <p>This semester included 6 theory subjects and 3 lab courses. Managing all subjects required proper time management and focus.</p>

        <h3>Core Subjects</h3>
        <p>The main subjects were DBMS, OOP, Calculus, and DLD. These subjects were more challenging and concept-based.</p>

        <h3>Learning MySQL</h3>
        <p>In Database Management Systems, we worked with MySQL. It helped me understand how to store and manage data efficiently.</p>

        <h3>Importance of Databases</h3>
        <p>Databases are essential in modern applications like websites and software. Learning MySQL gave me insight into real-world data handling.</p>

        <h3>University Fiesta & Cricket</h3>
        <p>During the University Fiesta, our department participated in cricket. It was the first time our Computer Engineering team joined the event.</p>

        <h3>Leadership Experience</h3>
        <p>I got the opportunity to lead my cricket team. This experience improved my leadership and teamwork skills.</p>

        <h3>Marathon Achievement</h3>
        <p>I participated in a 3km Marathon and secured 3rd position. It was a proud moment and boosted my confidence.</p>

        <h3>Ramadan & Challenges</h3>
        <p>My first Ramadan in hostel was challenging due to Sehri and Iftari issues. Later, classes shifted online due to rising oil prices in Pakistan.</p>
    `
},
    {
    id: 3,
    title: "Why Every Student Should Learn AI Basics in 2026",
    date: "April 5, 2026",
    category: "Technology",
    tags: ["ai"],
    excerpt: "AI is no longer a buzzword. It's the new electricity — students must start now.",
    content: `
        <h1>Why Every Student Should Learn AI Basics in 2026</h1>
        <p class="date">April 5, 2026 • Technology</p>

        <p>We are living in an era where AI is no longer a "future" concept—it's the foundation of modern infrastructure. Just as previous generations had to learn how to use a computer, our generation must learn how to collaborate with AI agents to stay relevant.</p>

        <h3>Beyond the Chatbot</h3>
        <p>Many students make the mistake of thinking AI is just ChatGPT. In 2026, the landscape has shifted toward <strong>AI Agents</strong>—programs that don't just talk, but actually perform tasks like booking appointments, writing tests, or analyzing large datasets automatically.</p>

        <blockquote>
            "AI won't replace you, but a person using AI will."
        </blockquote>

        <h3>Where to Start?</h3>
        <p>You don't need a PhD in Mathematics to start. Here is my recommended roadmap for any student in Faisalabad or beyond:</p>
        <ul>
            <li><strong>Master Prompt Engineering:</strong> Learn how to give precise instructions to get high-quality outputs.</li>
            <li><strong>Understand the Ethics:</strong> Learn about bias and data privacy so you can use these tools responsibly.</li>
            <li><strong>Build a 'Wrapper':</strong> Try using APIs to connect an AI model to a simple website (like this blog!).</li>
        </ul>

        <h3>The "New Electricity"</h3>
        <p>Think of AI as the new electricity. It will power every industry, from the textile mills here in Faisalabad to the global tech hubs in Silicon Valley. If you can understand the basics now, you'll be the one building the systems of tomorrow.</p>

        <h3>My Personal AI Workflow</h3>
        <p>I use AI every day to help me debug my JavaScript code and summarize long academic papers. It saves me roughly 10 hours a week—time I can spend on cricket or working on my next side project!</p>

        <p>The tools are free, and the tutorials are everywhere. Don't wait for your university to add it to the curriculum—start building today.</p>
    `
},
];
// Render blogs function
function renderBlogs(blogsToShow, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    if (blogsToShow.length === 0) {
        container.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:3rem;color:#94a3b8;">No blogs found. Try different keywords.</p>`;
        return;
    }

    blogsToShow.forEach(blog => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.innerHTML = `
            <div class="blog-content">
                <p style="color:#64748b;font-size:0.9rem;">${blog.date} • ${blog.category}</p>
                <h3>${blog.title}</h3>
                <p class="excerpt">${blog.excerpt}</p>
                <div class="tags">
                    ${blog.tags.map(tag => `<span class="tag">#${tag}</span>`).join("")}
                </div>
                 <div class="see-full"  onclick="event.stopImmediatePropagation(); openBlogModal(${blog.id})">
                    See Full Story →
                </div>
            </div>
        `;
        card.onclick = () => openBlogModal(blog.id);
        container.appendChild(card);
    });
}

window.openBlogModal = function(id) {
    const blog = blogs.find(b => b.id === id);
    if (!blog) return;
    const modal = document.getElementById("blog-modal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = blog.content;
    modal.style.display = "flex";
};

function setupModal() {
    const modal = document.getElementById("blog-modal");
    const closeBtn = document.getElementById("modal-close");
    if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
    modal.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };
}

function setupSearch() {
    const globalSearch = document.getElementById("global-search");
    const categorySearch = document.getElementById("category-search");
    const dropdown = document.getElementById("search-results");

    function handleSearch(input, isGlobal = false) {
        input.addEventListener("input", () => {
            const term = input.value.toLowerCase().trim();
            if (term.length < 1) {
                if (dropdown) dropdown.style.display = "none";
                return;
            }

            const filtered = blogs.filter(b =>
                b.title.toLowerCase().includes(term) ||
                b.excerpt.toLowerCase().includes(term) ||
                b.tags.some(t => t.toLowerCase().includes(term))
            );

            if (isGlobal && dropdown) {
                let html = "";
                filtered.forEach(b => html += `<div onclick="openBlogModal(${b.id}); document.getElementById('global-search').value='';">${b.title}</div>`);
                dropdown.innerHTML = html || `<div style="padding:16px;opacity:0.6;">No results found</div>`;
                dropdown.style.display = "block";
            } else if (!isGlobal) {
                renderBlogs(filtered, "categories-grid");
            }
        });
    }

    if (globalSearch) handleSearch(globalSearch, true);
    if (categorySearch) handleSearch(categorySearch, false);
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = "Message Sent ✓";
        submitBtn.style.background = "#22c55e";
        submitBtn.disabled = true;

        setTimeout(() => {
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = "";
            submitBtn.disabled = false;
        }, 2000);
    });
}

function loadTagsPage() {
    const cloud = document.getElementById("tags-cloud");
    if (!cloud) return;

    const allTags = [...new Set(blogs.flatMap(b => b.tags))];
    cloud.innerHTML = allTags.map(tag => `
        <span class="tag-chip" onclick="filterByTag('${tag}')">#${tag}</span>
    `).join("");
}

window.filterByTag = function(tag) {
    const filtered = blogs.filter(b => b.tags.includes(tag));
    renderBlogs(filtered, "tags-grid");
};

function init() {
    setupModal();
    setupSearch();
    setupContactForm();

    // Home page
    if (document.getElementById("featured-grid")) {
        renderBlogs(blogs, "featured-grid");
    }

    // Categories page - Show ALL blogs by default
    if (document.getElementById("categories-grid")) {
        renderBlogs(blogs, "categories-grid");   // This ensures all blogs appear immediately
    }

    // Tags page
   // Tags page
if (document.getElementById("tags-cloud")) {
    loadTagsPage();
}

    // Burger menu
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (burger && mobileMenu) {
        burger.addEventListener("click", () => mobileMenu.classList.toggle("active"));
    }
}

window.onload = init;

