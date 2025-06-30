document.addEventListener('DOMContentLoaded', function() {
    initializeExpenseForm();
});

function initializeExpenseForm() {
    const form = document.getElementById('expenseForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            addExpense();
        });
    }
}

function addExpense() {
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const date = document.getElementById('date').value;
    const department = document.getElementById('department').value;
    const notes = document.getElementById('notes').value;

    if (!category || !amount || !date || !department) {
        alert('Please fill in all required fields.');
        return;
    }
    showNotification('Expense added successfully!');
    clearForm();
}

function showNotification(message) {
    const notification = document.createElement('div');

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #39f500;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function clearForm() {
    const form = document.getElementById('expenseForm');
    if (form) {
        form.reset();
    }
}