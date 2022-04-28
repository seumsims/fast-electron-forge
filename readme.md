# Do Electron Js 2022

[Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=450)

- 1st Strat Do Electron Js 2022
    
    ```bash
    npm -y init
    ```
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%201.png)
    
    install node modules
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%202.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%203.png)
    
    ```bash
    npm install
    ```
    
    some errors
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%204.png)
    
    [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1049)
    
    [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1215)
    
    [Quick Start | Electron](https://www.electronjs.org/docs/latest/tutorial/quick-start)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%205.png)
    
    ```json
    {
      "scripts": {
        "start": "electron ."
      }
    }
    ```
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%206.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%207.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%208.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%209.png)
    
    ```bash
    npm install --save-dev electron
    ```
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2010.png)
    
    electron js installation completed
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2011.png)
    
    [https://github.com/github/gitignore](https://github.com/github/gitignore)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2012.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2013.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2014.png)
    
    git ignored
    
    ```bash
    npm start
    ```
    
    Error Again
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2015.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2016.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2017.png)
    
    now npm start
    
    ```bash
    npm start
    ```
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2018.png)
    
    electron js running
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2019.png)
    
- Recommended Extension for Do Electron Js 2022
    
    [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1374)
    
    - Vs Code Extension for Do Electron Js 2022
        
        auto import
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2020.png)
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2021.png)
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2022.png)
        
- After 1st Run
    
    [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1176)
    
    making a window
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2023.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2024.png)
    
    ```jsx
    const { app, BrowserWindow } = require('electron')
    ```
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2025.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2026.png)
    
    [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1252)
    
    after require
    
    [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1342)
    
    [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1458)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2027.png)
    
    ```jsx
    const { BrowserWindow } = require('electron')
    
    const createWindow = () => {
        const win = new BrowserWindow({
          width: 800,
          height: 600
        })
      
        win.loadFile('index.html')
      }
    ```
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2028.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2029.png)
    
    re running
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2030.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2031.png)
    
    nothing happens
    
    let’s fix that
    
    [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1512)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2032.png)
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2033.png)
    
    ```jsx
    const { BrowserWindow, app } = require('electron')
    
    const createWindow = () => {
        const win = new BrowserWindow({
          width: 800,
          height: 600
        })
      
        win.loadFile('index.html')
      }
    
      app.whenReady().then(() => {
        createWindow()
      })
    ```
    
    ctrl c to stop then re run
    
    ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2034.png)
    
    it worked
    
- Do some simple task for practice Do Electron Js 2022
    - stop default select with css
        
        [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1564)
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2035.png)
        
        ```html
        <style>
                body {
                    user-select: none;
                }
        </style>
        ```
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2036.png)
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2037.png)
        
        after reload default select gone away
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2038.png)
        
    - auto close electron app after some time with set timeout
        
        [https://www.youtube.com/watch?v=N-3s3ezYd8g](https://www.youtube.com/watch?v=N-3s3ezYd8g)
        
        ```jsx
        
          app.whenReady().then(() => {
            createWindow();
            setTimeout(() => app.quit(),3000);
          })
        ```
        
        ```jsx
        const { BrowserWindow, app } = require('electron')
        
        const createWindow = () => {
            const win = new BrowserWindow({
              width: 800,
              height: 600
            })
          
            win.loadFile('index.html')
          }
        
          app.whenReady().then(() => {
            createWindow();
            setTimeout(() => app.quit(),3000);
          })
        ```
        
    - basic usage of electron event with check os platform
        
        [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1818)
        
        write and search node.js process.platform
        
        [Process | Node.js v18.0.0 Documentation](https://nodejs.org/api/process.html)
        
        [Process | Node.js v18.0.0 Documentation](https://nodejs.org/api/process.html#processplatform)
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2039.png)
        
        ```jsx
        import { platform } from 'process';
        
        console.log(`This platform is ${platform}`);
        ```
        
        ```jsx
        const { BrowserWindow, app } = require('electron')
        
        const createWindow = () => {
            const win = new BrowserWindow({
              width: 800,
              height: 600
            })
          
            win.loadFile('index.html')
          }
        
          app.whenReady().then(() => {
            createWindow();
          })
        
          app.on('window-all-closed', () => {
              if(process.platform !== 'darwin') {
                  app.quit();
              }
          })
        ```
        
        ```jsx
        app.on('window-all-closed', () => {
              if(process.platform !== 'darwin') {
                  app.quit();
              }
          })
        ```
        
        [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=1870)
        
    - check how many window currently opened
        
        [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=2114)
        
        ```jsx
        setInterval(() => {
                const test = BrowserWindow.getAllWindows().length;
                console.log(test);
            },2000);
        ```
        
        ```jsx
        const { BrowserWindow, app } = require('electron')
        
        const createWindow = () => {
            const win = new BrowserWindow({
              width: 800,
              height: 600
            })
          
            win.loadFile('index.html')
          }
        
          app.whenReady().then(() => {
            createWindow();
        
            setInterval(() => {
                const test = BrowserWindow.getAllWindows().length;
                console.log(test);
            },2000);
          })
        ```
        
        console log shown in the terminal currently 1 
        
    - check to know currently 0 window opened
        
        [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://www.youtube.com/watch?v=N-3s3ezYd8g)
        
        ```jsx
        const { BrowserWindow, app } = require('electron')
        
        const createWindow = () => {
            const win = new BrowserWindow({
              width: 800,
              height: 600
            })
          
            win.loadFile('index.html')
          }
        
          app.whenReady().then(() => {
            createWindow();
          })
        
          app.on('window-all-closed', (event) => {
              event.preventDefault();
              setInterval(() => {
                const test = BrowserWindow.getAllWindows().length;
                console.log(test);
            },2000);
          })
        ```
        
    - set zero window condition for mac
        
        [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://www.youtube.com/watch?v=N-3s3ezYd8g)
        
        ```jsx
        const { BrowserWindow, app } = require('electron')
        
        const createWindow = () => {
            const win = new BrowserWindow({
              width: 800,
              height: 600
            })
          
            win.loadFile('index.html')
          }
        
          app.whenReady().then(() => {
            createWindow();
          })
        
          app.on('window-all-closed', () => {
              if( process.platform !== 'darwin' ) {
                app.quit();
              }
          });
        
          app.on('activate', () => {
              if(BrowserWindow.getAllWindows().length === 0) {
                  createWindow();
              }
        
          });
        ```
        
- 1st Electron Forge
    - 1st Electron Forge installation
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2040.png)
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2041.png)
        
    
    [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=2310)
    
    [Getting Started](https://www.electronforge.io/)
    
    - Trying 1st Electron Forge
        
        [Complete ElectronJS Crash Course in Bangla | Create Desktop Application using JavaScript & Electron](https://youtu.be/N-3s3ezYd8g?t=2400)
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2042.png)
        
        1st Run with Electron forge
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2043.png)
        
        ![Untitled](Do%20Electron%20Js%202022%202f26122642314160801711871ee83469/Untitled%2044.png)