let weeklySpend = 0;
let foodBudget = 0;
let streak = 0;
let points = 0;
let expenses = [];

function setBudget() {
    foodBudget = Number(document.getElementById("budget").value);
    showMessage("🎯 Budget set successfully!");
}

function addExpense() {
    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);

    if (!name || !amount) {
        showMessage("⚠️ Please enter valid details!");
        return;
    }

    expenses.push(amount);
    weeklySpend += amount;

    document.getElementById("weekly").innerText = weeklySpend;

    if (weeklySpend <= foodBudget) {
        streak++;
        points += 10;
        showMessage("🎉 Nice! You're within budget!");
    } else {
        streak = 0;
        points -= 5;
        showMessage("😬 OOPS! You crossed your food budget!");
    }

    document.getElementById("streak").innerText = streak;
    document.getElementById("points").innerText = points;

    updateAnalysis();
}

function updateAnalysis() {
    let list = document.getElementById("analysis");
    list.innerHTML = "";

    expenses.forEach((amt, index) => {
        let li = document.createElement("li");
        li.innerText = `Day ${index + 1}: ₹${amt}`;
        list.appendChild(li);
    });

    if (foodBudget - weeklySpend > 0) {
        showMessage(`💰 Awesome! You saved ₹${foodBudget - weeklySpend} this week`);
    }
}

function showMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function toggleMode() {
    document.body.classList.toggle("light");
}
