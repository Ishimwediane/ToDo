import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Task, Duration } from '../types/task';

interface TaskContextType {
    tasks: Task[];
    addTask: (name: string, duration: Duration) => void;
    editTask: (id: string, name: string, duration: Duration) => void;
    deleteTask: (id: string) => void;
    filterTasks: (duration: Duration | 'All') => Task[];
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (name: string, duration: Duration) => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            name,
            duration,
            createdAt: Date.now(),
        };
        setTasks(prev => [...prev, newTask]);
    };

    const editTask = (id: string, name: string, duration: Duration) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id ? { ...task, name, duration } : task
            )
        );
    };

    const deleteTask = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    const filterTasks = (duration: Duration | 'All') => {
        if (duration === 'All') return tasks;
        return tasks.filter(task => task.duration === duration);
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, filterTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
}; 