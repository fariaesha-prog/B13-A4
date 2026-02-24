let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const jobList = document.getElementById('job-list');
const mainContainer = document.querySelector('main');

function calculateCount() {
    total.innerText = jobList.children.length
    interviewCount.innerText = document.querySelectorAll('.status-badge[data-status="Interview"]').length;
    rejectedCount.innerText = document.querySelectorAll('.status-badge[data-status="Rejected"]').length;
}

function toggleStyle(btnId) {
    const buttons = [allFilterBtn, interviewFilterBtn, rejectedFilterBtn];
    
    buttons.forEach(btn => {
        if (btn.id === btnId) {
            btn.classList.remove('bg-white', 'text-gray-700', 'shadow-sm');
            btn.classList.add('bg-blue-500', 'text-white');
        } else {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-white', 'text-gray-700', 'shadow-sm');
        }
    });
}

