let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const jobList = document.getElementById('job-list');
const emptyState = document.getElementById('emptyState');
const mainContainer = document.querySelector('main');

// Array to store job statuses
let jobsData = [];

// Initialize jobs array from existing cards
function initializeJobsArray() {
    const cards = document.querySelectorAll('.job-card');
    jobsData = Array.from(cards).map((card, index) => ({
        id: index,
        card: card,
        status: 'not applied',
        title: card.querySelector('.jobTitle').innerText
    }));
}

function calculateCount() {
    const interviewed = jobsData.filter(job => job.status.toLowerCase() === 'interview').length;
    const rejected = jobsData.filter(job => job.status.toLowerCase() === 'rejected').length;
    const totalMarked = interviewed + rejected;
    
    total.innerText = totalMarked;
    interviewCount.innerText = interviewed;
    rejectedCount.innerText = rejected;
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
    
    if (btnId === 'all-filter-btn') {
        filterJobs('all');
    } else if (btnId === 'interview-filter-btn') {
        filterJobs('interview');
    } else if (btnId === 'rejected-filter-btn') {
        filterJobs('rejected');
    }
}

function filterJobs(status) {
    let visibleCount = 0;
    
    jobsData.forEach(job => {
        const jobStatus = job.status.toLowerCase();
        
        if (status === 'all') {
            job.card.style.display = 'flex';
            visibleCount++;
        } else if (status === 'interview' && jobStatus === 'interview') {
            job.card.style.display = 'flex';
            visibleCount++;
        } else if (status === 'rejected' && jobStatus === 'rejected') {
            job.card.style.display = 'flex';
            visibleCount++;
        } else {
            job.card.style.display = 'none';
        }
    });

    if (visibleCount === 0) {
        showEmptyState(status);
    } else {
        removeEmptyState();
    }
}

function showEmptyState(status) {
    emptyState.classList.remove('hidden');
}

function removeEmptyState() {
    emptyState.classList.add('hidden');
}

unction initializeCardButtons() {
    jobsData.forEach(job => {
        const interviewBtn = job.card.querySelector('.interview-btn');
        const rejectedBtn = job.card.querySelector('.rejected-btn');
        const deleteBtn = job.card.querySelector('.btn-delete');
        const statusBadge = job.card.querySelector('.status-badge');
        
        interviewBtn.addEventListener('click', () => {
            job.status = 'Interview';
            statusBadge.innerText = 'Interview';
            calculateCount();
            // Reapply current filter if not on "All"
            const activeBtn = document.querySelector('[class*="bg-blue-500"]');
            if (activeBtn.id !== 'all-filter-btn') {
                filterJobs(activeBtn.id.replace('-filter-btn', ''));
            }
        });

         rejectedBtn.addEventListener('click', () => {
            job.status = 'Rejected';
            statusBadge.innerText = 'Rejected';
            calculateCount();
            // Reapply current filter if not on "All"
            const activeBtn = document.querySelector('[class*="bg-blue-500"]');
            if (activeBtn.id !== 'all-filter-btn') {
                filterJobs(activeBtn.id.replace('-filter-btn', ''));
            }
        });

        deleteBtn.addEventListener('click', () => {
            job.card.remove();
            jobsData = jobsData.filter(j => j.id !== job.id);
            calculateCount();
            // Reapply current filter if not on "All"
            const activeBtn = document.querySelector('[class*="bg-blue-500"]');
            filterJobs(activeBtn ? activeBtn.id.replace('-filter-btn', '') : 'all');
        });
    });
}

initializeJobsArray();
initializeCardButtons();
calculateCount();