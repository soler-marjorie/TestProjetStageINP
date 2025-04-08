# Choisir son environnement de dev : vite ou Next:
![Choisir entre vite et next](/src/assets/image.png)
![Choisir entre vite et next suite](/src/assets/image-1.png)

On va choisir vite ici.


# React + Vite

## Création d'un projet React avec vite.js 
1. npm create vite@latest mon-projet -- --template react
2. cd mon-projet
3. npm install 

## Démarrer le serveur
npm run dev

## Les fichiers
On retrouve un fichier main.jsx (et non plus index.js) et App.jsx.

## Installation du router
1. ```npm install react-router-dom```
2. Ajouter dans main.js : 
```import { BrowserRouter, Routes, Route } from 'react-router-dom';```
3. Importer les pages et les intégrés au render avec Route
```
import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
```

## Création des dossiers (Vite ne le fait pas automatiquement)
Dans src créer les dossiers Pages et Composants.