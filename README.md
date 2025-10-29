
#  People Task List (Electron + JavaScript)

A modern, minimalistic **To-Do / People Checklist app** built using **HTML, CSS, JavaScript, and Electron** — designed to help you track people or daily tasks efficiently on Ubuntu or any Linux desktop.

---

##  Features

✅ Add people or tasks easily  
✅ Mark as completed (auto moves to “Done” list)  
✅ “Uncomplete All” button to reset progress  
✅ Data saved automatically (via localStorage)  
✅ Runs as a native Linux app (`.deb` / `.AppImage`)  
✅ Beautiful dark theme UI  

---

##  Project Structure

```

TO-DO-electron/
├── index.html        # UI structure
├── style.css         # Dark mode styling
├── script.js         # App logic
├── main.js           # Electron main process
├── assets/           # Icons & images
├── package.json      # Project configuration
└── dist/             # Build output (.deb / .AppImage)

````

---

##  Development Setup

### Install Dependencies
```bash
sudo apt update
sudo apt install nodejs npm -y
````

###  Clone the Repository

```bash
git clone https://github.com/AbhiramN-Mern/TO-DO-electron.git
cd TO-DO-electron
```

###  Install Node Modules

```bash
npm install
```

###  Run in Development Mode

```bash
npm start
```

This opens your Electron app in a window.

---

## Build for Ubuntu

To create `.deb` and `.AppImage` installers:

```bash
npm run build
```

After the build, check the `/dist` folder:

```
dist/
├── People Task List-1.0.0.AppImage
└── to-do-electron_1.0.0_amd64.deb
```

---

##  Download Ready Installer

Run Portable AppImage

```bash
chmod +x "People Task List-1.0.0.AppImage"
./People\ Task\ List-1.0.0.AppImage
```


##  License

This project is open-source under the **MIT License**.
Feel free to modify, distribute, or enhance it.

---

##  Support

If you like this project, don’t forget to  the repo on GitHub and share your feedback!
