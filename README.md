# Anish Rajesh — Personal Website

Personal portfolio site for writing, projects, and contact. Audience: technical recruiters at chip companies and people in the VC/research/analyst world.

Built with plain HTML, CSS, and JavaScript. Hosted on GitHub Pages.

## Structure

```
index.html      — all four tab views (Home, Writing, Projects, About)
styles.css      — design system, layout, responsive breakpoints
script.js       — tab switching with URL hash routing
assets/         — place resume PDF and any images here
CNAME           — custom domain (fill in before enabling GitHub Pages)
```

## Deployment

1. Push this repository to GitHub.
2. Go to **Settings → Pages**, set source to the `main` branch root.
3. Fill in your custom domain in `CNAME` (e.g. `anishrajesh.com`), then set it in Pages settings.
4. GitHub Pages will serve `index.html` automatically.

## Updating content

**Add an article** — copy the template comment in the `.article-list` block inside `index.html` and paste a new `<article class="article-card">` block below it.

**Add a project** — copy the template comment in the `.projects-grid` block and paste a new `<article class="project-card">` block.

**Fill in placeholders** — search for `USERNAME`, `EMAIL@ADDRESS`, `#article-1`, `#project-1-live`, `#project-1-code`, `#linkedin-placeholder`, `#email-placeholder` in `index.html` and replace with real URLs.

**Update resume** — drop `resume.pdf` into the `assets/` directory.
