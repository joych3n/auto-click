function checkAndClick() {
  // ... 你的检测与点击逻辑 ...
  const button = document.querySelector('.btn');
    
    if (button) {
        button.click();
        console.log('✅ 已点击继续播放按钮');
    } else {
        console.log('⏳ 未找到按钮，5秒后重试');
    }
    
  // 无论是否找到按钮，都设置下一次检查
  setTimeout(checkAndClick, 5000); 
}
checkAndClick(); // 启动检测
