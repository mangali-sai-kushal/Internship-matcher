
# ElevateMatch - Tier 2/3 Internship Platform 🚀

ElevateMatch is an intelligent internship matching platform designed to empower students from Tier 2 and Tier 3 colleges. It leverages the **Google Gemini 3 API** to analyze student profiles and provide curated internship recommendations that focus on skills and projects rather than just college pedigree.

## ✨ Features

- **AI Matching Engine**: Uses Gemini 1.5 Flash to match student resumes/skills with realistic internship roles.
- **Career Assistant Chatbot**: A 24/7 AI-powered sidebar to help with resume building and interview prep.
- **Profile Management**: Specialized sections for Tier 2/3 students to highlight their technical strengths.
- **Dark Mode**: Fully responsive UI with a sleek dark theme toggle.
- **Simulated Backend**: Fast, lightweight experience using LocalStorage for persistence.

## 🛠️ Local Development

To run this project on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/elevate-match.git
   cd elevate-match
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up your API Key**:
   Create a `.env` file in the root directory and add your Google AI Studio API Key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
   *(Note: The current code uses `process.env.API_KEY`. For local Vite development, ensure you update the reference or use a plugin to inject it.)*

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 🌐 Deployment to GitHub Pages

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Deploy**:
   You can use the `gh-pages` package or manually upload the `dist` folder to your GitHub repository's `gh-pages` branch.

## 🔑 Gemini API Setup

This app requires a Gemini API key. 
1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Generate a new API Key.
3. Ensure the key has permissions for the `gemini-1.5-flash` model.

## 📝 Project Structure

- `index.html`: Entry point with Tailwind CDN and ESM import maps.
- `App.tsx`: Main application logic and routing.
- `services/geminiService.ts`: AI integration logic.
- `components/`: Modular UI components (Navbar, Sidebar, etc.).
- `types.ts`: Global TypeScript interfaces.

---
Built with ❤️ for the student community.
