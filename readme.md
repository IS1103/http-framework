# 這是一個很簡單好用的 http request 框架

### 第一次先安裝 nodemon：
```
npm install -g nodemon
```

### 第一次使用請輸入：
```
npm init
```

### 想要啟動：
```
npm run dev
```

### 欲新增 api 請輸入在根目錄輸入
```
bash tool.sh
```

## Utili 工具
### 方便的輸出錯誤訊息
``` javascript
//errorCode:錯誤代碼
//message :錯誤訊息
throw global.err(errorCode, message);
```
### 方便的計時器，可開始、可停止，停止之後可執行接續代碼
``` javascript
//sec:欲等待的秒數
let timer = global.Timer();
await timer.start(sec);
timer.stop();
```