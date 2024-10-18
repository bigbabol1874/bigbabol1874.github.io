document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const gridItems = document.querySelectorAll('.grid-item');

    // 生成随机颜色的函数
    function getRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 70%, 80%)`;
    }

    // 为每个网格项分配随机背景颜色
    gridItems.forEach(item => {
        item.style.backgroundColor = getRandomColor();
    });

    // 搜索功能
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            gridItems.forEach(item => {
                const itemName = item.querySelector('h2').textContent.toLowerCase();
                const itemDescription = item.querySelector('p').textContent.toLowerCase();
                if (itemName.includes(searchTerm) || itemDescription.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // 访问计数器功能
    const visitorCountElement = document.getElementById('visitor-count');
    if (visitorCountElement) {
        displayVisitorCount();
    }
});

// 访问计数器相关函数
function readVisitorCount() {
    return localStorage.getItem('visitorCount') || '0';
}

function writeVisitorCount(count) {
    localStorage.setItem('visitorCount', count);
}

function incrementVisitorCount() {
    let count = parseInt(readVisitorCount());
    count++;
    writeVisitorCount(count.toString());
    return count;
}

function displayVisitorCount() {
    const count = incrementVisitorCount();
    const countElement = document.getElementById('visitor-count');
    if (countElement) {
        countElement.textContent = count;
    }
}
