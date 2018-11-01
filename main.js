"use strict";

// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron");

require("electron-reload")(__dirname);

// Keep a global reference of the window object, if you don"t, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({ show: false, backgroundColor: "#CCCCCC" });
    win.maximize();
    win.show();

    // and load the index.html of the app.
    win.loadFile("index.html");

    var menu = Menu.buildFromTemplate([
        {
            label: "File",
            submenu: [
                {
                    label: "New",
                    click() {},
                    accelerator: "CmdOrCtrl+N"
                },
                {
                    label: "Open",
                    click() {},
                    accelerator: "CmdOrCtrl+O"
                },
                { type: "separator" },
                {
                    label: "Save",
                    click() {},
                    accelerator: "CmdOrCtrl+S"
                },
                {
                    label: "Save As",
                    click() {},
                    accelerator: "CmdOrCtrl+Shift+S"
                },
                { type: "separator" },
                {
                    label: "Print",
                    click() {},
                    accelerator: "CmdOrCtrl+P"
                },
                { type: "separator" },
                {
                    role: "quit"
                }
            ]
        },
        {
            label: "Edit",
            submenu: [
                {
                    role: "undo",
                    accelerator: "CmdOrCtrl+Z"
                },
                {
                    role: "redo",
                    accelerator: "CmdOrCtrl+Y"
                },
                { type: "separator" },
                {
                    role: "cut",
                    accelerator: "CmdOrCtrl+X"
                },
                {
                    role: "copy",
                    accelerator: "CmdOrCtrl+C"
                },
                {
                    role: "paste",
                    accelerator: "CmdOrCtrl+V"
                },
                {
                    role: "delete",
                    accelerator: "Delete"
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
                    accelerator: "CmdOrCtrl+="
                },
                {
                    role: "zoomout",
                    accelerator: "CmdOrCtrl+-"
                },
                {
                    label: "Reset Zoom",
                    role: "resetzoom",
                    accelerator: "CmdOrCtrl+0"
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);

    // Open the DevTools.
    // win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on("closed", function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
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
    if (win === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
