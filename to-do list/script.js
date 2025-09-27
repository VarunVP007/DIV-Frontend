
        // DOM Elements
        const taskInput = document.getElementById('task-input');
        const addBtn = document.getElementById('add-btn');
        const taskList = document.getElementById('task-list');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const emptyState = document.getElementById('empty-state');
        const taskCount = document.getElementById('task-count');
        const clearCompletedBtn = document.getElementById('clear-completed');
        
        // State
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let currentFilter = 'all';
        
        // Initialize the app
        function init() {
            renderTasks();
            updateStats();
            
            // Event Listeners
            addBtn.addEventListener('click', addTask);
            taskInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') addTask();
            });
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Update active filter button
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Set current filter and re-render
                    currentFilter = this.getAttribute('data-filter');
                    renderTasks();
                });
            });
            
            clearCompletedBtn.addEventListener('click', clearCompletedTasks);
        }
        
        // Add a new task
        function addTask() {
            const text = taskInput.value.trim();
            
            if (text === '') {
                alert('Please enter a task!');
                return;
            }
            
            const newTask = {
                id: Date.now(),
                text: text,
                completed: false
            };
            
            tasks.push(newTask);
            saveTasks();
            renderTasks();
            updateStats();
            
            // Clear input
            taskInput.value = '';
            taskInput.focus();
        }
        
        // Render tasks based on current filter
        function renderTasks() {
            // Filter tasks
            const filteredTasks = tasks.filter(task => {
                if (currentFilter === 'active') return !task.completed;
                if (currentFilter === 'completed') return task.completed;
                return true; // 'all'
            });
            
            // Show/hide empty state
            if (filteredTasks.length === 0) {
                emptyState.classList.remove('hidden');
            } else {
                emptyState.classList.add('hidden');
            }
            
            // Clear task list
            taskList.innerHTML = '';
            
            // Add tasks to the list
            filteredTasks.forEach(task => {
                const li = document.createElement('li');
                li.className = `task-item ${task.completed ? 'completed' : ''}`;
                li.setAttribute('data-id', task.id);
                
                li.innerHTML = `
                    <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                    <span class="task-text">${task.text}</span>
                    <button class="delete-btn">×</button>
                `;
                
                // Add event listeners for the task
                const checkbox = li.querySelector('.task-checkbox');
                const deleteBtn = li.querySelector('.delete-btn');
                
                checkbox.addEventListener('change', function() {
                    toggleTaskCompletion(task.id);
                });
                
                deleteBtn.addEventListener('click', function() {
                    deleteTask(task.id);
                });
                
                taskList.appendChild(li);
            });
        }
        
        // Toggle task completion status
        function toggleTaskCompletion(id) {
            tasks = tasks.map(task => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
            
            saveTasks();
            renderTasks();
            updateStats();
        }
        
        // Delete a task
        function deleteTask(id) {
            tasks = tasks.filter(task => task.id !== id);
            saveTasks();
            renderTasks();
            updateStats();
        }
        
        // Clear completed tasks
        function clearCompletedTasks() {
            tasks = tasks.filter(task => !task.completed);
            saveTasks();
            renderTasks();
            updateStats();
        }
        
        // Update task statistics
        function updateStats() {
            const totalTasks = tasks.length;
            const completedTasks = tasks.filter(task => task.completed).length;
            const activeTasks = totalTasks - completedTasks;
            
            taskCount.textContent = `${activeTasks} active ${activeTasks === 1 ? 'task' : 'tasks'}`;
            
            // Show/hide clear completed button
            if (completedTasks > 0) {
                clearCompletedBtn.style.visibility = 'visible';
            } else {
                clearCompletedBtn.style.visibility = 'hidden';
            }
        }
        
        // Save tasks to localStorage
        function saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        
        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);
   