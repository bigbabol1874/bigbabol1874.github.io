// 模拟文件读取操作
function readVisitorCount() {
    return localStorage.getItem('visitorCount') || '0';
}

// 模拟文件写入操作
function writeVisitorCount(count) {
    localStorage.setItem('visitorCount', count);
}

// 增加访问次数
function incrementVisitorCount() {
    let count = parseInt(readVisitorCount());
    count++;
    writeVisitorCount(count.toString());
    return count;
}

// 显示访问次数
function displayVisitorCount() {
    const count = incrementVisitorCount();
    const countElement = document.getElementById('visitor-count');
    if (countElement) {
        countElement.textContent = count;
    }
}

// 当页面加载完成时显示访问次数
document.addEventListener('DOMContentLoaded', displayVisitorCount);
