// 运行状态和定时器
let isRunning = false;
let timerId = null;

// 检查并点击按钮
function checkAndClick() {
  if (!isRunning) return;
  
  // 获取按钮
  const button = document.querySelector('.btn');
  
  if (button) {
    // 点击按钮
    button.click();
    console.log('✅ 已点击继续播放按钮');
  } else {
    // 未找到按钮，5秒后重试
    console.log('⏳ 未找到按钮，5秒后重试');
  }
  
  // 确保清理之前的定时器
  if (timerId) {
    // 清理之前的定时器
    clearTimeout(timerId);
  }
  timerId = setTimeout(checkAndClick, 5000);
}

// 启动检测
function start() {
  if (isRunning) return;
  isRunning = true;
  checkAndClick();
  console.log('🚀 已启动检测');
}

// 停止检测
function stop() {
  isRunning = false;
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }
  console.log('🛑 已停止检测');
}

// 启动
start();