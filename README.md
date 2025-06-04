Deployement version:https://to-do-sable-nu.vercel.app/ 
To-Do Planning Web Application

A modern React-based To-Do planning application that helps users organize their tasks with different time durations.

Features

- ✨ Add tasks with custom durations (Daily, Weekly, Monthly, Yearly)
- 📋 View all tasks in a clean, organized list
- 🔄 Edit existing tasks
- 🗑️ Delete tasks
- 🔍 Filter tasks by duration
- 💾 Local storage persistence
- 🎨 Modern UI with Tailwind CSS

Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Local Storage for data persistence

Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

Project Structure

```
src/
├── components/
│   ├── Hero.tsx         # Hero section with motivational text
│   ├── TaskForm.tsx     # Form for adding/editing tasks
│   ├── TaskList.tsx     # List of tasks with edit/delete functionality
│   └── FilterBar.tsx    # Duration filter buttons
├── context/
│   └── TaskContext.tsx  # Global state management
└── types/
    └── task.ts         # TypeScript types and interfaces
```
Usage

1. Enter a task name in the input field
2. Select a duration from the dropdown (Daily, Weekly, Monthly, Yearly)
3. Click "Add Task" to create a new task
4. Use the filter buttons to view tasks by duration
5. Edit or delete tasks using the respective buttons
6. All changes are automatically saved to local storage
