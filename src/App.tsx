import { useState } from 'react'
import { TaskProvider, useTaskContext } from './context/TaskContext'
import type { Duration } from './types/task'
import Hero from './components/Hero'
import TaskForm from './components/TaskForm'
import FilterBar from './components/FilterBar'
import TaskList from './components/TaskList'
import './App.css'

const TaskApp = () => {
  const [currentFilter, setCurrentFilter] = useState<Duration | 'All'>('All')
  const { filterTasks } = useTaskContext()
  const filteredTasks = filterTasks(currentFilter)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Hero />
        <TaskForm />
        <FilterBar currentFilter={currentFilter} onFilterChange={setCurrentFilter} />
        <TaskList tasks={filteredTasks} />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <TaskProvider>
      <TaskApp />
    </TaskProvider>
  )
}

export default App
