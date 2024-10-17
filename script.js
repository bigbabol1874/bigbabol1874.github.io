document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 图片点击放大效果
    const photos = document.querySelectorAll('.photo-grid img');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            photo.classList.toggle('enlarged');
        });
    });

    // 添加简单的文章点赞功能
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeCount = button.querySelector('.like-count');
            let count = parseInt(likeCount.textContent);
            count++;
            likeCount.textContent = count;
            button.classList.add('liked');
        });
    });

    // 添加简单的日记展开/收起功能
    const diaryItems = document.querySelectorAll('.diary-item');
    diaryItems.forEach(item => {
        const content = item.querySelector('p');
        const originalText = content.textContent;
        const shortText = originalText.slice(0, 100) + '...';
        
        if (originalText.length > 100) {
            content.textContent = shortText;
            const toggleButton = document.createElement('button');
            toggleButton.textContent = '展开';
            toggleButton.classList.add('toggle-button');
            item.appendChild(toggleButton);

            toggleButton.addEventListener('click', () => {
                if (content.textContent === shortText) {
                    content.textContent = originalText;
                    toggleButton.textContent = '收起';
                } else {
                    content.textContent = shortText;
                    toggleButton.textContent = '展开';
                }
            });
        }
    });

    // 为游戏项目添加随机背景颜色和点击事件
    const gameItems = document.querySelectorAll('.game-item');
    gameItems.forEach(item => {
        // 添加随机背景颜色
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        item.style.backgroundColor = "#" + randomColor;
        
        // 根据背景颜色的亮度来设置文字颜色
        const r = parseInt(randomColor.substr(0,2),16);
        const g = parseInt(randomColor.substr(2,2),16);
        const b = parseInt(randomColor.substr(4,2),16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        item.style.color = brightness > 128 ? 'black' : 'white';

        // 移除特定游戏的点击事件
    });
});
