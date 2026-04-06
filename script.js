<script>
// =============================================
// script.js - Complete & Updated Blog System
// =============================================

const blogs = [
    {
        id: 1,
        title: "My First Semester Journey – Learning & Growth",
        date: "April 05, 2026",
        category: "First Semester",
        tags: ["Programming Fundamentals", "Machine Learning"],
        excerpt: "How I built my very first Machine Learning project in first semester.",
        content: `
            <h1>My First Semester Journey – Learning & Growth</h1>
            <p class="date">April 05, 2026 • First Semester</p>
            
            <h3>1. Beginning of University Life</h3>
            <p>My first semester was a completely new experience for me. I entered university with excitement and curiosity to learn.</p>
            
            <h3>2. Introduction to Programming</h3>
            <p>I studied Programming Fundamentals, where we worked with Python. It was my first proper introduction to coding.</p>
            
            <h3>3. Initial Difficulties</h3>
            <p>At the beginning, I faced many problems in understanding programming. The logic and syntax were confusing and difficult.</p>
            
            <h3>4. Struggle with Logic Building</h3>
            <p>Problem-solving and building logic were the hardest parts. I often got errors and struggled to fix them.</p>
            
            <h3>5. Consistent Effort</h3>
            <p>With time, I kept practicing and did not give up. My consistency helped me improve step by step.</p>
            
            <h3>6. Understanding Python</h3>
            <p>Gradually, I started understanding Python concepts better. Programming became more interesting and manageable.</p>
            
            <h3>7. Machine Learning Project</h3>
            <p>Our semester project was based on Machine Learning. It was a new and exciting field for me.</p>
            
            <h3>8. Car Price Prediction Model</h3>
            <p>We trained a model to predict car prices based on different factors. This project gave me practical exposure to real-world applications.</p>
            
            <h3>9. Project Exhibition</h3>
            <p>We presented our project in the exhibition. It boosted my confidence and communication skills.</p>
            
            <h3>10. Academic Achievement</h3>
            <p>I achieved a 3.1 GPA and secured a B+ grade in Programming Fundamentals. This result made me satisfied and motivated for the future.</p>
        `
    },
    {
        id: 2,
        title: "My Second Semester Journey – Growth, Leadership & Experiences",
        date: "April 05, 2026",
        category: "Second Semester",
        tags: ["DataBase Management", "Mysql", "Github-Project"],
        excerpt: "How I managed 18 credit hours, cricket, and practical skills in labs.",
        content: `
            <h1>My Second Semester Journey – Growth, Leadership & Experiences</h1>
            <p class="date">April 05, 2026 • Second Semester</p>
            
            <blockquote class="motivational-quote">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
            </blockquote>
            
            <h3>1. Motivation from First Semester</h3>
            <p>After achieving a 3.1 GPA, I felt motivated to perform even better. This result gave me confidence to move forward with a positive mindset.</p>
            
            <h3>2. A Fresh Start</h3>
            <p>I started my second semester with determination and clear goals. I wanted to improve my academic performance and skills.</p>
            
            <h3>3. Academic Load</h3>
            <p>This semester included 6 theory subjects and 3 lab courses. Managing all subjects required proper time management and focus.</p>
            
            <h3>4. Core Subjects</h3>
            <p>The main subjects were DBMS, OOP, Calculus, and DLD. These subjects were more challenging and concept-based.</p>
            
            <h3>5. Learning MySQL</h3>
            <p>In Database Management Systems, we worked with MySQL. It helped me understand how to store and manage data efficiently.</p>
            
            <h3>6. Importance of Databases</h3>
            <p>Databases are essential in modern applications like websites and software. Learning MySQL gave me insight into real-world data handling.</p>
            
            <h3>7. University Fiesta & Cricket</h3>
            <p>During the University Fiesta, our department participated in cricket. It was the first time our Computer Engineering team joined the event.</p>
            
            <h3>8. Leadership Experience</h3>
            <p>I got the opportunity to lead my cricket team. This experience improved my leadership and teamwork skills.</p>
            
            <h3>9. Marathon Achievement</h3>
            <p>I participated in a 3km Marathon and secured 3rd position. It was a proud moment and boosted my confidence.</p>
            
            <h3>10. Ramadan & Challenges</h3>
            <p>My first Ramadan in hostel was challenging due to Sehri and Iftari issues. Later, classes shifted online due to rising oil prices in Pakistan.</p>
        `
    },
    {
        id: 3,
        title: "Second Semester Mid-Exams: Struggles, Hard Work",
        date: "April 05, 2026",
        category: "Exam-Preparation",
        tags: ["Late-Night Study", "Understanding Concepts", "Stress about Exams"],
        excerpt: "The stressful yet rewarding preparation days before second semester mid-exams.",
        content: `
            <h1>Second Semester Mid-Exams: Struggles, Hard Work</h1>
            <p class="date">April 05, 2026 • Exam Preparation</p>
            
            <h3>1. Return to Campus</h3>
            <p>After Eid and the long break, we returned to physical classes on 1st April. Being back in hostels and campus was refreshing.</p>
            
            <h3>2. Realizing Learning Gaps</h3>
            <p>Online classes left some gaps in concepts, especially in OOP and C#, so we needed to catch up quickly.</p>
            
            <h3>3. Mid-Exams Announcement</h3>
            <p>With exams starting 7th April, we had limited time to revise. Focus and planning became urgent.</p>
            
            <h3>4. Daily Study Routine</h3>
            <p>We followed a strict routine: theory in mornings, coding practice in afternoons, and self-tests at night.</p>
            
            <h3>5. Focus on OOP</h3>
            <p>OOP in C# was challenging. We practiced coding exercises daily and reviewed key concepts like classes and inheritance.</p>
            
            <h3>6. Group Study Sessions</h3>
            <p>Studying with friends helped clarify doubts, discuss coding problems, and strengthen understanding.</p>
            
            <h3>7. Managing Stress</h3>
            <p>Short breaks, light exercise, and motivational quotes helped us stay calm and focused during exam prep.</p>
            
            <h3>8. Revision Strategies</h3>
            <p>We summarized notes, solved past papers, and practiced coding repeatedly for better retention.</p>
            
            <h3>9. Looking Forward to Success</h3>
            <p>After mid-exams, In Sha Allah, we plan to go home. The hard work now motivates us for the rest of the semester.</p>
            
            <h3>10. Lessons Learned</h3>
            <p>Discipline, consistent practice, and teamwork proved essential. Focused effort can overcome gaps and lead to success.</p>
        `
    }
];

// =============================================
// Render Blogs Function
// =============================================
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
                <div class="see-full" onclick="event.stopImmediatePropagation(); openBlogModal(${blog.id})">
                    See Full Story →
                </div>
            </div>
        `;
        card.onclick = () => openBlogModal(blog.id);
        container.appendChild(card);
    });
}

// =============================================
// Open Blog Modal
// =============================================
window.openBlogModal = function(id) {
    const blog = blogs.find(b => b.id === id);
    if (!blog) return;

    const modal = document.getElementById("blog-modal");
    const modalBody = document.getElementById("modal-body");
    
    modalBody.innerHTML = blog.content;
    modal.style.display = "flex";
};

// =============================================
// Setup Modal
// =============================================
function setupModal() {
    const modal = document.getElementById("blog-modal");
    const closeBtn = document.getElementById("modal-close");
    
    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = "none";
    }
    
    modal.onclick = (e) => {
        if (e.target === modal) modal.style.display = "none";
    };
}

// =============================================
// Search Functionality
// =============================================
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
                filtered.forEach(b => {
                    html += `<div onclick="openBlogModal(${b.id}); document.getElementById('global-search').value='';">${b.title}</div>`;
                });
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

// =============================================
// Contact Form
// =============================================
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

// =============================================
// Tags Page
// =============================================
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

// =============================================
// Initialize Everything
// =============================================
function init() {
    setupModal();
    setupSearch();
    setupContactForm();

    // Home page - Featured blogs
    if (document.getElementById("featured-grid")) {
        renderBlogs(blogs, "featured-grid");
    }

    // Categories page - Show ALL blogs by default
    if (document.getElementById("categories-grid")) {
        renderBlogs(blogs, "categories-grid");
    }

    // Tags page
    if (document.getElementById("tags-cloud")) {
        loadTagsPage();
    }

    // Mobile burger menu
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (burger && mobileMenu) {
        burger.addEventListener("click", () => mobileMenu.classList.toggle("active"));
    }
}

window.onload = init;
</script>
