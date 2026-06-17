# Tyrone Ekhator — Software Engineer Portfolio

A modern, responsive software engineering portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **React Icons**. This portfolio showcases my full-stack development experience, AI/software engineering skills, machine learning projects, backend systems, database-driven applications, and personal project work.

---

## Overview

This portfolio was created to present my software engineering profile in a professional and visually appealing way. It includes sections for my background, technical skills, featured projects, experience, education, contact details, CV download, GitHub links, LinkedIn link, and demo video links for selected projects.

The design uses a modern dark theme with gradient highlights, animated cards, hover effects, responsive layouts, project preview cards, embedded demo video previews, and smooth scrolling.

---

## Live Demo

Live website link:

```text
Add your deployed portfolio link here
```

Example:

```text
https://your-portfolio-name.vercel.app
```

---

## GitHub Repository

```text
https://github.com/Tyroneekhator/software-engineer-portfolio
```

---

## Features

* Modern responsive portfolio website
* React component-based structure
* Tailwind CSS styling
* Dark theme user interface
* Smooth scrolling between sections
* Animated hero section
* Floating code preview card
* Project cards with icons
* Project demo video buttons
* Video preview on project card hover for projects with demo links
* GitHub and LinkedIn buttons
* Downloadable CV button
* Contact section with email link
* Responsive design for desktop, tablet, and mobile
* Clean and organised source code
* Production build support with Vite

---

## Technologies Used

### Frontend

* React
* Vite
* JavaScript
* Tailwind CSS
* HTML
* CSS

### UI and Icons

* React Icons
* Font Awesome Icons
* Simple Icons
* Tailwind utility classes

### Development Tools

* VS Code
* Git
* GitHub
* npm
* PowerShell
* Vite development server

---

## Main Sections

The portfolio contains the following sections:

1. **Navbar**

   * Navigation links to all sections
   * Smooth scrolling support

2. **Hero**

   * Name and role
   * Call-to-action buttons
   * GitHub and LinkedIn links
   * CV download button
   * Floating code card
   * Software engineering and AI branding

3. **About**

   * Professional summary
   * Key strengths
   * Full-stack, backend, and AI focus

4. **Skills**

   * Frontend development
   * Backend development
   * Databases
   * Machine learning
   * AI and chatbots
   * Developer tools

5. **Projects**

   * Featured software projects
   * Project category badges
   * Technology tags
   * GitHub links
   * Demo video buttons
   * Hover video preview for projects with demo links

6. **Experience**

   * Software engineering experience
   * Development focus areas
   * Practical skills and achievements

7. **Education**

   * Academic background
   * Computing and software engineering foundation
   * Continuous learning

8. **Contact**

   * Email
   * GitHub
   * LinkedIn
   * Location
   * CV download

9. **Footer**

   * Social links
   * Back to top button
   * Copyright

---

## Featured Projects

The portfolio currently includes the following projects:

### MD Registry System

A Django-based office records management system for tracking incoming and outgoing documents, approvals, attachments, audit logs, Excel import/export, and role-based access.

**Technologies:** Python, Django, SQL Server, JavaScript

**GitHub:**

```text
https://github.com/Tyroneekhator/md-registry-system
```

---

### Stock Price Prediction System

A full-stack stock prediction application using React, FastAPI, Yahoo Finance data, and an LSTM model to compare actual and predicted stock prices.

**Technologies:** React, FastAPI, TensorFlow, Recharts

**GitHub:**

```text
https://github.com/Tyroneekhator/stock-price-prediction-react-project
```

---

### Nigerian Real Estate Price Prediction

A machine learning application for predicting Nigerian house prices using property features, Random Forest, Streamlit, and visual market insights.

**Technologies:** Python, Streamlit, Scikit-learn, Pandas

**GitHub:**

```text
https://github.com/Tyroneekhator/real-estate-price-prediction-streamlit
```

---

### RapNation Event Website

A full-stack music event website with artist lineup, schedule, contact pages, visitor guidance, comments, and MySQL database integration.

**Technologies:** Node.js, Express, EJS, MySQL

**GitHub:**

```text
https://github.com/Tyroneekhator/rap-event-website
```

---

### New Forest Escapes

A full-stack holiday accommodation platform with property browsing, MongoDB data models, login/registration workflows, and reusable Next.js components.

**Technologies:** Next.js, React, MongoDB, Vercel

**GitHub:**

```text
https://github.com/Tyroneekhator/New-forest-escapes
```

---

### Smart Customer Support Chatbot

An AI-powered customer support chatbot designed to handle user queries, provide automated responses, improve support workflows, and demonstrate chatbot-based software engineering skills.

**Technologies:** Python, AI Chatbot, Machine Learning, NLP

**GitHub:**

```text
https://github.com/Tyroneekhator/smart-customer-support-chatbot
```

---

## Project Folder Structure

```text
software-engineer-portfolio/
├── public/
│   └── Tyrone_Ekhator_Software_Engineer_CV.docx
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Tyroneekhator/software-engineer-portfolio.git
```

### 2. Open the project folder

```bash
cd software-engineer-portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The project will run locally on a Vite development server.

Open the localhost link shown in the terminal, usually:

```text
http://localhost:5173
```

---

## Build for Production

To create a production build, run:

```bash
npm run build
```

This creates a `dist` folder containing the production-ready website files.

---

## Preview Production Build

After building the project, preview it locally with:

```bash
npm run preview
```

This lets you check the production version before deployment.

---

## GitHub Update Commands

After making changes to the website, use these commands:

```bash
git status
git add .
git commit -m "Update portfolio"
git push
```

If this is the first push to the repository, use:

```bash
git branch -M main
git push -u origin main
```

---

## Deployment

This portfolio can be deployed using platforms such as:

* Vercel
* Netlify
* GitHub Pages

### Recommended Deployment: Vercel

1. Push the project to GitHub.
2. Go to Vercel.
3. Import the GitHub repository.
4. Keep the default Vite settings.
5. Deploy the project.

Default Vite settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

---

## Adding Demo Videos

Project demo video links are managed inside:

```text
src/data/projects.js
```

Each project has a `demoVideo` field.

Example:

```js
demoVideo: 'https://drive.google.com/file/d/YOUR_VIDEO_ID/view?usp=sharing',
```

When a project has a demo video link:

* The project card shows a **Watch Demo** button.
* The video preview appears when hovering over the project preview area.
* Google Drive videos should be shared as **Anyone with the link can view**.

When a project does not have a video link:

```js
demoVideo: '',
```

The card will show:

```text
Demo Coming Soon
```

---

## CV Download

The CV download button uses the file stored in the `public` folder:

```text
public/Tyrone_Ekhator_Software_Engineer_CV.docx
```

The button link points to:

```text
/Tyrone_Ekhator_Software_Engineer_CV.docx
```

To update the CV:

1. Replace the old CV file inside the `public` folder.
2. Keep the same filename.
3. Run the project again.
4. Test the download button.

---

## Customisation

### Update personal details

Edit the following components:

```text
src/components/Hero.jsx
src/components/About.jsx
src/components/Contact.jsx
src/components/Footer.jsx
```

### Update projects

Edit:

```text
src/data/projects.js
```

### Update styling

Edit:

```text
src/index.css
```

### Update page layout

Edit:

```text
src/App.jsx
```

---

## Available Scripts

### Start development server

```bash
npm run dev
```

### Build production files

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Author

**Tyrone Ekhator**
Software Engineer | Full-Stack Developer | AI Software Engineer

### Contact

**Email:**

```text
ekhatortyrone98@gmail.com
```

**GitHub:**

```text
https://github.com/Tyroneekhator
```

**LinkedIn:**

```text
https://www.linkedin.com/in/tyrone-ekhator
```

---

## License

This project is for personal portfolio use.
You may use the structure as inspiration, but the personal details, project descriptions, and branding belong to Tyrone Ekhator.

---

## Status

The portfolio is actively being improved with new projects, demo videos, design updates, and deployment changes.
