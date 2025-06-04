import React, { useState } from 'react';
import type { Task } from '../types/task';
import { useTaskContext } from '../context/TaskContext';
import TaskForm from './TaskForm';

interface TaskListProps {
    tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    const { deleteTask } = useTaskContext();
    const [editingTask, setEditingTask] = useState<Task | undefined>();

    const handleEdit = (task: Task) => {
        setEditingTask(task);
    };

    const handleCancelEdit = () => {
        setEditingTask(undefined);
    };

    return (
        <div className="space-y-4">
            {editingTask && (
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Edit Task</h3>
                    <TaskForm editingTask={editingTask} onCancel={handleCancelEdit} />
                </div>
            )}
            
            {tasks.length === 0 ? (
                <p className="text-center text-gray-500 py-8">No tasks found. Add some tasks to get started!</p>
            ) : (
                <div className="space-y-3">
                    {tasks.map((task, index) => (
                        <div
                            key={task.id}
                            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-gray-500 font-medium min-w-[2rem]">
                                    #{index + 1}
                                </span>
                                <div>
                                    <h3 className="font-medium text-gray-800">{task.name}</h3>
                                    <span className="text-sm text-gray-500">{task.duration}</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(task)}
                                    className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                                    title="Edit task"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Delete task"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList; 