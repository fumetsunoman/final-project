const leftSidebar = document.querySelector('.leftSidebar');
const sections = {
    '我的帳戶': '.myAccount',
    '訂單中心': '.myOrder',
    '會員專屬': '.onlyForMember'
};

leftSidebar.addEventListener('click', (e) => {
    const clickedElement = e.target;

    // 只有在窗口寬度小於414px时才執行以下代碼
    if (window.innerWidth < 414) {
        // 如果點擊的元素不是左側邊攔的列表项，则隱藏所有側邊欄的列表项
        const sectionName = clickedElement.innerHTML;
        const sectionSelector = sections[sectionName];
        if (sectionSelector) {
            // 隐藏所有部分
            document.querySelectorAll('.leftSidebar li').forEach(item => {
                item.style.display = 'none';
            });

            // 只顯示點擊的部分
            document.querySelectorAll(sectionSelector + ' li').forEach(item => {
                item.style.display = 'block';
            });

            // 将所有部分的標題背景颜色設置為白色
            Object.values(sections).forEach(selector => {
                document.querySelector(selector + ' p').style.background = 'white';
            });

            // 将點擊的部分的標題背景颜色設置為指定颜色
            document.querySelector(sectionSelector + ' p').style.background = 'rgb(234, 207, 133)';
        }
    }
});




