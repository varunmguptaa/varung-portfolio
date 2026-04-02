<h1 align="center">
  Varun Gupta — Personal Portfolio
  <br />
  <a href="https://varun2068.github.io/varung-portfolio/#/" target="_blank">varun2068.github.io/varung-portfolio</a>
</h1>

<p align="center">
  A personal portfolio website built with React.js showcasing projects, skills, services and a contact form.
</p>

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 17, React Router v5 |
| UI | React Bootstrap 4, Custom CSS |
| Icons | React Icons |
| Animations | react-particles-js, react-parallax-tilt, Typewriter Effect |
| Contact Form | @emailjs/browser |
| Deployment | GitHub Pages (gh-pages) |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, intro and social links |
| `/about` | About — bio, tech skills and tools |
| `/projects` | Projects — portfolio work with GitHub links |
| `/service` | Services — what I offer |
| `/contact` | Contact — form and contact details |

---

## Getting Started

### Prerequisites

- Node.js >= 14
- npm >= 6

### Installation

```bash
git clone https://github.com/varun2068/varung-portfolio.git
cd varung-portfolio
npm install --legacy-peer-deps
```

### Environment Variables

Create a `.env` file in the project root (never commit this):

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from [EmailJS Dashboard](https://dashboard.emailjs.com).

### Run Locally

```bash
npm start
```

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## Features

- Multi-page layout with HashRouter (works on GitHub Pages)
- Responsive design — mobile, tablet and desktop
- Particle background animation
- Typewriter effect on hero section
- 3D parallax tilt on avatar image
- Contact form with validation, loading state and success/error feedback
- EmailJS credentials stored in environment variables (not in source)
- Dynamic footer copyright year
- Open Graph and Twitter Card meta tags for social sharing

---

## Customisation

1. Update personal info in `src/components/Home/Home2.js`, `src/components/About/AboutCard.js` and `src/components/Contact/ContactDetails.js`
2. Add your projects in `src/components/Projects/Projects.js`
3. Swap avatar/about images in `src/Assets/`
4. Adjust the colour theme via CSS custom properties at the top of `src/style.css`

---

## License

MIT © Varun Gupta
