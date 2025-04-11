
# AI Resume Generator

AI Resume Generator is a full-stack web application that creates tailored resumes based on user-provided prompts. It leverages **Spring Boot** for the backend, **DeepSeek-R1** (via Ollama) for AI-driven resume content generation, and **React** with modern libraries for a dynamic frontend. The application allows users to input details like skills, experience, and job preferences, generating professional resumes in seconds.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup (Spring Boot)](#backend-setup-spring-boot)
  - [Frontend Setup (React)](#frontend-setup-react)
  - [Ollama and DeepSeek Setup](#ollama-and-deepseek-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [DeepSeek Integration](#deepseek-integration)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Prompt-Based Resume Generation**: Users provide a prompt (e.g., job role, skills, experience), and the AI generates a customized resume.
- **Real-Time Processing**: Fast resume generation using DeepSeek-R1 via Ollama.
- **Responsive UI**: Built with React for a seamless, modern user experience.
- **Customizable Templates**: Predefined resume prompt templates stored in `resume_prompt.txt`.
- **RESTful API**: Spring Boot backend exposes endpoints for resume generation and management.
- **Scalable Architecture**: Modular design with service and controller layers for easy extensions.

## Tech Stack
- **Backend**:
  - **Spring Boot**: Framework for building the REST API and handling business logic.
  - **Ollama**: Local inference engine to run DeepSeek-R1 for resume generation.
  - **DeepSeek-R1**: AI model for generating high-quality resume content.
  - **Maven**: Dependency management and build tool.
- **Frontend**:
  - **React**: JavaScript library for building the user interface.
  - **Vite**: Fast build tool and development server for React.
  - **React Router**: For client-side routing.
  - **Axios**: For making HTTP requests to the backend API.
  - **Tailwind CSS** (assumed): For styling (adjust if you use another CSS framework).
- **Others**:
  - **Git**: Version control.
  - **VS Code**: Recommended IDE with settings in `.vscode`.

## Project Structure
The project is split into two main directories: the Spring Boot backend (`Resume`) and the React frontend (`resume_frontend`).

```
AI-Resume-Generator/
├── Resume/                    # Spring Boot backend
│   ├── .mvn/wrapper/          # Maven wrapper files
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/Resume/
│   │   │   │   ├── Controller/
│   │   │   │   │   └── ResumeController.java       # REST API endpoints
│   │   │   │   ├── Service/
│   │   │   │   │   ├── ResumeService.java          # Service interface
│   │   │   │   │   └── ResumeServiceImpl.java      # Service logic with DeepSeek
│   │   │   │   ├── ResumeApplication.java          # Spring Boot entry point
│   │   │   │   └── ResumeRequest.java              # DTO for user input
│   │   │   └── resources/
│   │   │       ├── application.properties          # Backend config (e.g., Ollama URL)
│   │   │       └── resume_prompt.txt               # Resume prompt templates
│   │   └── test/                                  # Unit tests
│   ├── mvnw, mvnw.cmd                             # Maven wrapper scripts
│   └── pom.xml                                    # Maven dependencies
├── resume_frontend/            # React frontend
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── api/
│   │   │   └── ResumeService.js                   # API client for backend
│   │   ├── assets/                                # Images, SVGs
│   │   ├── components/
│   │   │   ├── Navbar.jsx                         # Navigation bar
│   │   │   └── Resume.jsx                         # Resume display component
│   │   ├── pages/
│   │   │   ├── About.jsx, Contact.jsx, etc.       # Page components
│   │   │   └── GenerateResume.jsx                 # Main resume generation page
│   │   ├── App.css, App.jsx                       # App-level styles and logic
│   │   ├── index.css, main.jsx                    # Entry points
│   ├── vite.config.js                             # Vite configuration
│   ├── package.json                               # Node dependencies
│   └── index.html                                 # HTML entry point
├── .gitignore, .gitattributes                     # Git config
└── README.md                                      # This file
```

## How It Works
This section explains the code flow from user input to resume generation, highlighting the interaction between the React frontend, Spring Boot backend, and DeepSeek-R1 model.

### Frontend Flow (React)
1. **User Interface**:
   - The user navigates to the resume generation page (`GenerateResume.jsx`), which contains a form for entering details like job role, skills, and experience.
   - The form is built with React components, using state to manage input fields (e.g., `useState` for prompt data).
   - Example form submission in `GenerateResume.jsx`:
     ```jsx
     const handleSubmit = async (e) => {
       e.preventDefault();
       const prompt = { jobRole, skills, experience };
       const response = await ResumeService.generateResume(prompt);
       setResume(response.resume);
     };
     ```

2. **API Call**:
   - On form submission, `GenerateResume.jsx` calls the `ResumeService.js` API client, which uses Axios to send a POST request to the backend.
   - Example in `ResumeService.js`:
     ```javascript
     import axios from 'axios';
     const API_URL = 'http://localhost:8080/api/resume';
     export const generateResume = async (prompt) => {
       const response = await axios.post(`${API_URL}/generate`, { prompt });
       return response.data;
     };
     ```

3. **Displaying the Resume**:
   - The backend returns the generated resume, which is stored in the component’s state and passed to `Resume.jsx` for rendering.
   - `Resume.jsx` formats the resume text into a structured layout (e.g., sections for Summary, Experience).

### Backend Flow (Spring Boot)
1. **Receiving the Request**:
   - The `ResumeController.java` handles incoming HTTP requests. It defines a POST endpoint `/api/resume/generate` that accepts a JSON payload.
   - Example in `ResumeController.java`:
     ```java
     @RestController
     @RequestMapping("/api/resume")
     public class ResumeController {
         private final ResumeService resumeService;
         @Autowired
         public ResumeController(ResumeService resumeService) {
             this.resumeService = resumeService;
         }
         @PostMapping("/generate")
         public ResponseEntity<String> generateResume(@RequestBody ResumeRequest request) {
             String resume = resumeService.generateResume(request.getPrompt());
             return ResponseEntity.ok(resume);
         }
     }
     ```
   - The `ResumeRequest.java` DTO maps the JSON payload:
     ```java
     public class ResumeRequest {
         private String prompt;
         public String getPrompt() { return prompt; }
         public void setPrompt(String prompt) { this.prompt = prompt; }
     }
     ```

2. **Service Layer**:
   - The `ResumeController` delegates to `ResumeServiceImpl.java` via the `ResumeService` interface.
   - `ResumeServiceImpl` constructs the final prompt and interacts with DeepSeek-R1.
   - Example in `ResumeServiceImpl.java`:
     ```java
     @Service
     public class ResumeServiceImpl implements ResumeService {
         private final RestTemplate restTemplate;
         private final String ollamaUrl;
         @Value("${ollama.url}")
         public ResumeServiceImpl(RestTemplate restTemplate, String ollamaUrl) {
             this.restTemplate = restTemplate;
             this.ollamaUrl = ollamaUrl;
         }
         @Override
         public String generateResume(String userPrompt) {
             String basePrompt = loadPromptFromFile();
             String fullPrompt = basePrompt + " " + userPrompt;
             Map<String, String> request = new HashMap<>();
             request.put("model", "deepseek-r1");
             request.put("prompt", fullPrompt);
             String response = restTemplate.postForObject(ollamaUrl + "/api/generate", request, String.class);
             return parseResume(response);
         }
         private String loadPromptFromFile() {
             // Read resume_prompt.txt
             return "Create a professional resume for a {job_role} with {years} years of experience in {skills}.";
         }
         private String parseResume(String response) {
             // Extract and clean resume text from Ollama response
             return response;
         }
     }
     ```

3. **Configuration**:
   - The `application.properties` file specifies the Ollama server URL and other settings:
     ```properties
     ollama.url=http://localhost:11434
     server.port=8080
     ```
   - The `resume_prompt.txt` file provides a base template for structuring prompts.

### DeepSeek Integration
- **Ollama Communication**:
  - The `ResumeServiceImpl` sends the constructed prompt to the Ollama server running DeepSeek-R1 using `RestTemplate`.
  - Ollama processes the prompt and returns the generated resume text.
- **Prompt Engineering**:
  - The base prompt from `resume_prompt.txt` ensures consistent resume formatting, while the user’s input customizes the content.
- **Response Handling**:
  - The service parses the JSON response from Ollama, extracting the resume text and handling errors (e.g., model unavailable).

### End-to-End Flow
1. User submits a form in `GenerateResume.jsx` with a prompt (e.g., “Software engineer, 5 years, Java, Python”).
2. `ResumeService.js` sends a POST request to `/api/resume/generate`.
3. `ResumeController` receives the request and calls `ResumeServiceImpl`.
4. `ResumeServiceImpl` builds the prompt, queries DeepSeek-R1 via Ollama, and returns the resume.
5. `ResumeController` sends the resume back to the frontend.
6. `GenerateResume.jsx` updates the UI, and `Resume.jsx` displays the formatted resume.

This modular design ensures separation of concerns, with the frontend handling UI, the backend managing logic, and DeepSeek providing AI capabilities.

## Prerequisites
Ensure you have the following installed:
- **Java 17** or later (for Spring Boot)
- **Maven 3.8+** (for dependency management)
- **Node.js 18+** and **npm 9+** (for React)
- **Ollama** (for running DeepSeek-R1 locally)
- **DeepSeek-R1 Model** (downloaded via Ollama)
- **Git** (for cloning the repository)
- A modern browser (e.g., Chrome, Firefox)

## Setup Instructions

### Backend Setup (Spring Boot)
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ai-resume-generator.git
   cd AI-Resume-Generator/Resume
   ```

2. **Install Dependencies**:
   Run Maven to download dependencies:
   ```bash
   ./mvnw clean install
   ```

3. **Configure Application**:
   Edit `src/main/resources/application.properties` to set up the Ollama server URL and other settings:
   ```properties
   ollama.url=http://localhost:11434
   server.port=8080
   ```
   Ensure the `resume_prompt.txt` file in `resources/` contains your desired resume prompt template, e.g.:
   ```
   Create a professional resume for a {job_role} with {years} years of experience in {skills}. Include sections for Summary, Experience, Education, and Skills.
   ```

4. **Run the Backend**:
   Start the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   The backend will run on `http://localhost:8080`.

### Frontend Setup (React)
1. **Navigate to Frontend Directory**:
   ```bash
   cd ../resume_frontend
   ```

2. **Install Dependencies**:
   Install Node modules:
   ```bash
   npm install
   ```

3. **Configure API URL**:
   Update `src/api/ResumeService.js` to point to the backend:
   ```javascript
   const API_URL = "http://localhost:8080/api/resume";
   ```

4. **Run the Frontend**:
   Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (or as configured in `vite.config.js`).

### Ollama and DeepSeek Setup
1. **Install Ollama**:
   Follow the official Ollama documentation to install it: [Ollama GitHub](https://github.com/ollama/ollama).
   On Linux/Mac:
   ```bash
   curl -fsSL https://ollama.com/install.sh | sh
   ```

2. **Pull DeepSeek-R1**:
   Download the DeepSeek-R1 model:
   ```bash
   ollama pull deepseek-r1
   ```

3. **Run Ollama Server**:
   Start the Ollama server:
   ```bash
   ollama serve
   ```
   Verify it’s running at `http://localhost:11434`.

4. **Test DeepSeek**:
   Run a test command to ensure DeepSeek-R1 is working:
   ```bash
   ollama run deepseek-r1 "Generate a sample resume"
   ```

## Usage
1. **Access the Application**:
   Open `http://localhost:5173` in your browser.

2. **Navigate to Generate Resume**:
   Go to the “Generate Resume” page (via `GenerateResume.jsx`).

3. **Enter Prompt**:
   Input details like job role, skills, and experience in the form.

4. **Generate Resume**:
   Submit the form. The frontend sends a POST request to the backend, which processes the prompt with DeepSeek-R1 and returns the generated resume.

5. **View/Download**:
   The resume is displayed on the page (via `Resume.jsx`). Add functionality to download as PDF if implemented.

## API Endpoints
The backend exposes RESTful endpoints via `ResumeController.java`. Example endpoints (adjust based on your actual implementation):

- **POST /api/resume/generate**:
  - **Description**: Generates a resume based on the user’s prompt.
  - **Request Body** (`ResumeRequest.java`):
    ```json
    {
      "prompt": "Create a resume for a software engineer with 5 years of experience in Java and Python."
    }
    ```
  - **Response**:
    ```json
    {
      "resume": "Name: John Doe\nSummary: Experienced software engineer...\nExperience: ..."
    }
    ```

- **GET /api/resume/templates**:
  - **Description**: Retrieves available resume prompt templates.
  - **Response**:
    ```json
    ["Template 1: Software Engineer", "Template 2: Data Scientist"]
    ```

To test endpoints, use tools like Postman or curl:
```bash
curl -X POST http://localhost:8080/api/resume/generate -H "Content-Type: application/json" -d '{"prompt":"Create a resume for a software engineer"}'
```

## DeepSeek Integration
The DeepSeek-R1 model is integrated into the backend via the `ResumeServiceImpl.java` class, which communicates with the Ollama server. Here’s how it works:

1. **Prompt Construction**:
   The service reads the base prompt from `resume_prompt.txt` and appends user input from `ResumeRequest`. For example:
   ```
   Create a professional resume for a {job_role} with {years} years of experience in {skills}.
   ```
   Becomes:
   ```
   Create a professional resume for a software engineer with 5 years of experience in Java, Python.
   ```

2. **Ollama API Call**:
   The service sends the prompt to the Ollama server (`http://localhost:11434`) using a REST client (e.g., RestTemplate or WebClient). Example:
   ```java
   RestTemplate restTemplate = new RestTemplate();
   String ollamaUrl = "http://localhost:11434/api/generate";
   Map<String, String> request = new HashMap<>();
   request.put("model", "deepseek-r1");
   request.put("prompt", fullPrompt);
   String response = restTemplate.postForObject(ollamaUrl, request, String.class);
   ```

3. **Response Parsing**:
   The response from DeepSeek-R1 contains the generated resume text, which is cleaned and formatted before being returned to the frontend.

4. **Error Handling**:
   The service handles cases like model unavailability or invalid prompts, returning appropriate HTTP status codes (e.g., 500 for server errors).

**Optimizations**:
- Caching: Store frequently used prompts to reduce DeepSeek calls.
- Rate Limiting: Configure Ollama to handle load if scaling.
- Prompt Engineering: Fine-tune `resume_prompt.txt` for better outputs.

**Challenges**:
- **Model Latency**: DeepSeek-R1 may take a few seconds to generate long resumes. Consider async processing for better UX.
- **Output Quality**: DeepSeek’s responses depend on prompt clarity. Test prompts extensively.

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please follow the code style and include tests in `src/test/`.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
