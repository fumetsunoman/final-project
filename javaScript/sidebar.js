const leftSidebar = document.querySelector('.leftSidebar');
const sections = {
    '我的帳戶': '.myAccount',
    '訂單中心': '.myOrder',
    '會員專屬': '.onlyForMember'
};

leftSidebar.addEventListener('click', (e) => {
    const sectionName = e.target.innerHTML;

    // 只有在窗口寬度小於1440px时才執行以下代碼
    if (window.innerWidth < 1440) {
        // 如果点击的不是左侧边栏的列表项，则隐藏所有左侧边栏的列表项
        const sectionSelector = sections[sectionName];
        if (sectionSelector) {
            // 只显示或隐藏点击的部分
            document.querySelectorAll(sectionSelector + ' li').forEach(item => {
                item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'block' : 'none';
            });

            // 将所有部分的标题背景颜色设置为白色
            Object.values(sections).forEach(selector => {
                document.querySelector(selector + ' p').style.background = 'white';
            });
        }
    }
});