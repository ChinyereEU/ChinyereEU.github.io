/**
 * main.js
 * -------
 * Entry point. Mounts rendered HTML into the DOM
 * and handles any interactivity (nav highlight, etc.).
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Mount dynamic sections ──
    document.getElementById('exp-list').innerHTML      = renderExperience(DATA.experience);
    document.getElementById('projects-grid').innerHTML = renderProjects(DATA.projects);
    document.getElementById('pres-list').innerHTML     = renderPresentations(DATA.presentations);
    document.getElementById('edu-row').innerHTML       = renderEducation(DATA.education);

  // ── Copy email to clipboard ──
    const copyBtn = document.getElementById('copy-email');

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('chinyere.ugwuanyie@gmail.com').then(() => {
            copyBtn.textContent = 'Email copied ✓';
            setTimeout(() => {
                copyBtn.textContent = 'Get in touch';
            }, 2000);
        });
    });

    // ── Copy email footer ──
    const copyFooterBtn = document.getElementById('copy-email-footer');

    copyFooterBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('chinyere.ugwuanyie@gmail.com').then(() => {
            copyFooterBtn.textContent = 'Copied ✓';
            setTimeout(() => {
                copyFooterBtn.textContent = 'chinyere.ugwuanyie@gmail.com';
            }, 2000);
        });
    });

    // ── Active nav link on scroll ──
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (active) active.classList.add('active');
        }
        });
    },
    { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(s => observer.observe(s));

    });