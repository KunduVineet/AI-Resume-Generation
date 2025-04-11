# AI Resume Generator Frontend

This is the frontend of the AI Resume Generator, a web application that allows users to generate professional resumes based on custom prompts. Built with **React** and powered by **Vite**, it provides a responsive, user-friendly interface for entering resume details and displaying generated resumes. The frontend communicates with a Spring Boot backend to process prompts using the DeepSeek-R1 AI model via Ollama.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Frontend Flow](#frontend-flow)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Interactive Resume Form**: Users input job roles, skills, and experience via a dynamic form.
- **Real-Time Resume Display**: Renders generated resumes in a clean, structured format.
- **Responsive Design**: Adapts to desktop and mobile devices for seamless access.
- **Client-Side Routing**: Smooth navigation between pages like Home, About, and Generate Resume.
- **API Integration**: Communicates with the backend to fetch and display AI-generated resumes.

## Tech Stack
- **React**: JavaScript library for building the user interface.
- **Vite**: Fast build tool and development server.
- **React Router**: For client-side navigation between pages.
- **Axios**: For making HTTP requests to the backend API.
- **Tailwind CSS** (assumed): For styling components (adjust if using another CSS framework).
- **ESLint**: For code linting and maintaining code quality.

## Project Structure
The frontend is organized to separate components, pages, API logic, and assets for clarity and maintainability.

```
resume_frontend/
├── public/                    # Static assets (e.g., favicon, images)
├── src/
│   ├── api/
│   │   └── ResumeService.js   # API client for backend communication
│   ├── assets/                # Images, SVGs (e.g., react.svg)
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar component
│   │   └── Resume.jsx         # Component to display generated resumes
│   ├── pages/
│   │   ├── About.jsx          # About page
│   │   ├── Contact.jsx        # Contact page
│   │   ├── GenerateResume.jsx # Main page for resume generation
│   │   ├── Home.jsx           # Homepage
│   │   ├── LandingPage.jsx    # Landing page
│   │   ├── Resume.jsx         # Resume display page
│   │   ├── Root.jsx           # Root layout component
│   │   └── Services.jsx       # Services page
│   ├── App.css                # App-level styles
│   ├── App.jsx                # Main app component with routing
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point for React
├── .gitignore                 # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Node dependencies and scripts
├── package-lock.json          # Dependency lock file
├── vite.config.js             # Vite configuration
└── README.md                  # This file
```

## Prerequisites
Ensure you have the following installed:
- **Node.js 18+** and **npm 9+** (for React and Vite)
- **Git** (for cloning the repository)
- A modern browser (e.g., Chrome, Firefox)
- **Backend Server**: The Spring Boot backend must be running at `http://localhost:8080` (or as configured).

## Setup Instructions
1. **Navigate to the Frontend Directory**:
   If you’ve cloned the full project, navigate to the frontend folder:
   ```bash
   cd resume_frontend
   ```
   Alternatively, if the frontend is a separate repository:
   ```bash
   git clone https://github.com/your-username/ai-resume-generator-frontend.git
   cd ai-resume-generator-frontend
   ```

2. **Install Dependencies**:
   Install the required Node modules:
   ```bash
   npm install
   ```

3. **Configure API URL**:
   Ensure the backend API URL is correctly set in `src/api/ResumeService.js`:
   ```javascript
   const API_URL = "http://localhost:8080/api/resume";
   ```
   Update the URL if your backend runs on a different port or host.

4. **Run the Development Server**:
   Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173` (or as specified in `vite.config.js`).

5. **Build for Production** (Optional):
   To create an optimized production build:
   ```bash
   npm run build
   ```
   The output will be in the `dist/` folder.

## Usage
1. **Access the Application**:
   Open `http://localhost:5173` in your browser.

2. **Explore Pages**:
   - Use the `Navbar.jsx` component to navigate to pages like Home (`Home.jsx`), About (`About.jsx`), or Generate Resume (`GenerateResume.jsx`).
   - The `Root.jsx` component likely serves as the layout wrapper for consistent UI elements (e.g., header, footer).

3. **Generate a Resume**:
   - Go to the “Generate Resume” page (`GenerateResume.jsx`).
   - Fill out the form with details like job role, skills, and years of experience.
   - Submit the form to send a request to the backend.
   - View the generated resume on the same page or in `Resume.jsx`.

4. **View Other Pages**:
   - Explore additional pages like Contact (`Contact.jsx`) or Services (`Services.jsx`) for more information about the application.

## Frontend Flow
Here’s how the frontend code works:

1. **Routing**:
   - `App.jsx` sets up client-side routing using React Router, mapping URLs to page components.
   - Example in `App.jsx`:
     ```jsx
     import { BrowserRouter, Routes, Route } from 'react-router-dom';
     import GenerateResume from './pages/GenerateResume';
     import Home from './pages/Home';
     function App() {
       return (
         <BrowserRouter>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/generate" element={<GenerateResume />} />
           </Routes>
         </BrowserRouter>
       );
     }
     ```

2. **Resume Generation**:
   - The `GenerateResume.jsx` component contains a form where users input resume details.
   - On submission, it calls `ResumeService.js` to send a POST request to the backend.
   - Example in `GenerateResume.jsx`:
     ```jsx
     import { useState } from 'react';
     import ResumeService from '../api/ResumeService';
     import Resume from '../components/Resume';
     function GenerateResume() {
       const [prompt, setPrompt] = useState('');
       const [resume, setResume] = useState(null);
       const handleSubmit = async (e) => {
         e.preventDefault();
         try {
           const response = await ResumeService.generateResume({ prompt });
           setResume(response.resume);
         } catch (error) {
           console.error('Error generating resume:', error);
         }
       };
       return (
         <div>
           <form onSubmit={handleSubmit}>
             <input
               type="text"
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
               placeholder="Enter job role, skills, etc."
             />
             <button type="submit">Generate Resume</button>
           </form>
           {resume && <Resume content={resume} />}
         </div>
       );
     }
     ```

3. **API Communication**:
   - `ResumeService.js` handles HTTP requests using Axios.
   - Example in `ResumeService.js`:
     ```javascript
     import axios from 'axios';
     const API_URL = 'http://localhost:8080/api/resume';
     export const generateResume = async (prompt) => {
       const response = await axios.post(`${API_URL}/generate`, prompt);
       return response.data;
     };
     ```

4. **Resume Display**:
   - The `Resume.jsx` component receives the generated resume text and renders it in a structured format (e.g., with sections for Summary, Experience).
   - Example in `Resume.jsx`:
     ```jsx
     function Resume({ content }) {
       return (
         <div className="resume">
           <h2>Your Resume</h2>
           <pre>{content}</pre>
         </div>
       );
     }
     ```

5. **Styling**:
   - Styles are applied via `App.css`, `index.css`, and component-specific CSS (e.g., Tailwind classes).
   - The `Navbar.jsx` ensures consistent navigation across pages.

This flow ensures a smooth user experience, with the frontend handling input, API calls, and rendering, while relying on the backend for AI processing.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please follow the ESLint rules defined in `eslint.config.js` and ensure components are reusable and well-documented.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
