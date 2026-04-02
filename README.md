<h1 align="center">Varun Gupta — Personal Portfolio</h1>

<p align="center">
  <a href="https://varun2068.github.io/varung-portfolio/#/" target="_blank">
    varun2068.github.io/varung-portfolio
  </a>
</p>

<p align="center">
  A personal portfolio website built with React 18 showcasing my projects, skills, services and a contact form.
</p>

---

## Tech Stack

| | |
|---|---|
| **Frontend** | React 18, React Router v5 |
| **UI** | React Bootstrap 2, Bootstrap 5, Custom CSS |
| **Icons** | React Icons |
| **Animations** | react-particles-js, react-parallax-tilt, Typewriter Effect |
| **Contact Form** | @emailjs/browser |
| **Deployment** | GitHub Pages via gh-pages |

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero section, intro and social links |
| `/about` | About — bio, tech skills and tools |
| `/projects` | Projects — portfolio work with GitHub and live demo links |
| `/service` | Services — what I can do |
| `/contact` | Contact — form and contact details |

---

## Getting Started

### Prerequisites

- Node.js >= 16
- npm >= 8

### Install

```bash
git clone https://github.com/varun2068/varung-portfolio.git
cd varung-portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root — **do not commit this file**:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [dashboard.emailjs.com](https://dashboard.emailjs.com).

### Run locally

```bash
npm start
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and pushes it to the `gh-pages` branch automatically.

---

## Features

- Multi-page layout with HashRouter (compatible with GitHub Pages)
- Fully responsive — mobile, tablet and desktop
- Particle background animation
- Typewriter effect on hero
- 3D parallax tilt on avatar
- Contact form with field validation, loading state and success/error feedback
- EmailJS credentials in environment variables (never in source code)
- Dynamic footer copyright year
- Open Graph and Twitter Card meta tags for social sharing previews

---

## Customisation

| What to change | Where |
|---|---|
| Name, bio, intro text | `src/components/Home/Home2.js`, `src/components/About/AboutCard.js` |
| Projects | `src/components/Projects/Projects.js` |
| Contact details (email, phone, location) | `src/components/Contact/ContactDetails.js` |
| Avatar / about image | `src/Assets/` |
| Colour theme | CSS custom properties at the top of `src/style.css` |
| Services | `src/components/Services/Services.js` |

---

## License

MIT © Varun Gupta
