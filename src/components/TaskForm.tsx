import React, { useState } from 'react';
import type { Duration } from '../types/task';
import { useTaskContext } from '../context/TaskContext';

interface TaskFormProps {
    editingTask?: {
        id: string;
        name: string;
        duration: Duration;
    };
    onCancel?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ editingTask, onCancel }) => {
    const { addTask, editTask } = useTaskContext();
    const [taskName, setTaskName] = useState(editingTask?.name || '');
    const [duration, setDuration] = useState<Duration>(editingTask?.duration || 'Daily');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!taskName.trim()) return;

        if (editingTask) {
            editTask(editingTask.id, taskName, duration);
            onCancel?.();
        } else {
            addTask(taskName, duration);
            setTaskName('');
            setDuration('Daily');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="mb-4">
                <label htmlFor="taskName" className="block text-gray-700 font-medium mb-2">
                    Task Name
                </label>
                <input
                    type="text"
                    id="taskName"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your task"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="duration" className="block text-gray-700 font-medium mb-2">
                    Duration
                </label>
                <select
                    id="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value as Duration)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Yearly">Yearly</option>
                </select>
            </div>
            <div className="flex gap-2">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                    {editingTask ? 'Update Task' : 'Add Task'}
                </button>
                {editingTask && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default TaskForm; 