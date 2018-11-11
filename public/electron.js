"use strict";

// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron");

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

require("electron-reload")(__dirname);

// Keep a global reference of the window object, if you don"t, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({ show: false, backgroundColor: "#CCCCCC" });
    mainWindow.maximize();
    mainWindow.show();

    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );

    var menu = Menu.buildFromTemplate([
        {
            label: "File",
            submenu: [
                {
                    label: "New",
                    click() {},
                    accelerator: "CmdOrCtrl+N",
                    icon: "././src/assets/icons/menu/New.png"
                },
                {
                    label: "Open",
                    click() {},
                    accelerator: "CmdOrCtrl+O",
                    icon: "././src/assets/icons/menu/Open.png"
                },
                { type: "separator" },
                {
                    label: "Save",
                    click() {},
                    accelerator: "CmdOrCtrl+S",
                    icon: "././src/assets/icons/menu/Save.png"
                },
                {
                    label: "Save As",
                    click() {},
                    accelerator: "CmdOrCtrl+Shift+S",
                    icon: "././src/assets/icons/menu/Save As.png"
                },
                { type: "separator" },
                {
                    label: "Print",
                    click() {},
                    accelerator: "CmdOrCtrl+P",
                    icon: "././src/assets/icons/menu/Print.png"
                },
                { type: "separator" },
                {
                    role: "quit",
                    accelerator: "CmdOrCtrl+Q",
                    icon: "././src/assets/icons/menu/Exit.png"
                }
            ]
        },
        {
            label: "Edit",
            submenu: [
                {
                    role: "undo",
                    accelerator: "CmdOrCtrl+Z",
                    icon: "././src/assets/icons/menu/Undo.png"
                },
                {
                    role: "redo",
                    accelerator: "CmdOrCtrl+Y",
                    icon: "././src/assets/icons/menu/Redo.png"
                },
                { type: "separator" },
                {
                    role: "cut",
                    accelerator: "CmdOrCtrl+X",
                    icon: "././src/assets/icons/menu/Cut.png"
                },
                {
                    role: "copy",
                    accelerator: "CmdOrCtrl+C",
                    icon: "././src/assets/icons/menu/Copy.png"
                },
                {
                    role: "paste",
                    accelerator: "CmdOrCtrl+V",
                    icon: "././src/assets/icons/menu/Paste.png"
                },
                {
                    role: "delete",
                    accelerator: "Delete",
                    icon: "././src/assets/icons/menu/Delete.png"
                },
                { type: "separator" },
                {
                    role: "selectAll",
                    accelerator: "CmdOrCtrl+A"
                }
            ]
        },
        {
            label: "View",
            submenu: [
                {
                    role: "zoomin",
                    accelerator: "CmdOrCtrl+=",
                    icon: "././src/assets/icons/menu/Zoom In.png"
                },
                {
                    role: "zoomout",
                    accelerator: "CmdOrCtrl+-",
                    icon: "././src/assets/icons/menu/Zoom Out.png"
                },
                {
                    label: "Reset Zoom",
                    role: "resetzoom",
                    accelerator: "CmdOrCtrl+0",
                    icon: "././src/assets/icons/menu/Reset Zoom.png"
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on("closed", function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function() {
    // On OS X it"s common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
