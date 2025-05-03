// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Counter functionality
    initCounter();
    
    // Todo List functionality
    initTodoList();
    
    // Color Changer functionality
    initColorChanger();
});

// Counter Feature
function initCounter() {
    const count = document.getElementById('count');
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const resetBtn = document.getElementById('reset');
    
    let currentCount = 0;
    
    decreaseBtn.addEventListener('click', function() {
        currentCount--;
        updateCountDisplay();
    });
    
    increaseBtn.addEventListener('click', function() {
        currentCount++;
        updateCountDisplay();
    });
    
    resetBtn.addEventListener('click', function() {
        currentCount = 0;
        updateCountDisplay();
    });
    
    function updateCountDisplay() {
        count.textContent = currentCount;
        
        // Change color based on value
        if (currentCount < 0) {
            count.style.color = '#e74c3c'; // Red for negative
        } else if (currentCount > 0) {
            count.style.color = '#2ecc71'; // Green for positive
        } else {
            count.style.color = '#333'; // Default for zero
        }
    }
}

// Todo List Feature
function initTodoList() {
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');
    
    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    function addTodo() {
        const todoText = todoInput.value.trim();
        
        if (todoText !== '') {
            // Create new list item
            const li = document.createElement('li');
            
            // Create text span
            const textSpan = document.createElement('span');
            textSpan.textContent = todoText;
            
            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'X';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });
            
            // Add completed toggle functionality
            textSpan.addEventListener('click', function() {
                textSpan.style.textDecoration = textSpan.style.textDecoration === 'line-through' ? 'none' : 'line-through';
            });
            
            // Add elements to list item
            li.appendChild(textSpan);
            li.appendChild(deleteBtn);
            
            // Add list item to todo list
            todoList.appendChild(li);
            
            // Clear input
            todoInput.value = '';
        }
    }
}

// Color Changer Feature
function initColorChanger() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color');
    
    changeColorBtn.addEventListener('click', function() {
        // Generate random color
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
    
    function getRandomColor() {
        // Generate random hex color
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}