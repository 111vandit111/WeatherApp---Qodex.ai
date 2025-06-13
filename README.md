# 🌤️ WeatherApp by Vandit Kala

A responsive weather application built with **React 19**, **Supabase Authentication**, **TanStack Query**, and **Vite**. It allows users to sign up/log in securely and view real-time weather data using OpenWeatherMap API.

## 🔧 Features

- 🔐 User Authentication with Supabase
- 🌐 Live weather data with OpenWeatherMap API
- 🔄 Auto refreshes weather data every 30 seconds
- 🌙 Backgrounds and Icons based on weather
- 🛠️ Built with modern tools: React 19, Vite, TanStack Query v5
- ⚠️ Error handling with contextual icons using Lucide

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/weatherapp.git
cd weatherapp
```

### 2. Install dependencies
``` bash npm install ```

### 3. Environment setup
Create a .env file at the root of the project and add:

env
``` VITE_SUPABASE_URL=https://<your-project-id>.supabase.co ```
``` VITE_SUPABASE_ANON_KEY=your-anon-key ```
``` VITE_WEATHER_API_KEY=your-openweathermap-api-key ```
You can find these in your Supabase dashboard and OpenWeatherMap account.

### 4. Start development server
``` bash
npm run dev 
```

Visit **http://localhost:5173** to see the app.

### 🧩 Tech Stack
**React 19**

**Vite**

**Supabase Auth (@supabase/auth-ui-react)**

**TanStack React Query v5**

**Lucide Icons**

**OpenWeatherMap API**

**Unsplash Backgrounds**

### 📁 Project Structure
```bash
.
├── api/
│   └── Supabase.js         # Supabase client setup
│   └── Weather.js          # Weather client setup
├── app/
│   └── Components          # All components for this app
│   └── WeatherApp.jsx      # Main weather interface
├── auth/
│   └── AuthContext.jsx     # Global auth provider
├── components/             # Reusable UI components
├── hooks/                  # React Query hooks (e.g., useCurrentWeather)
├── assets/                 # Static images or fonts
├── App.jsx                 # Entry component
└── main.jsx                # Root rendering logic
```


### 📦 Scripts
Command	Description
npm run dev 	Start the development server
npm run build	Build for production
npm run preview 	Preview production build
npm run lint	Run ESLint checks
