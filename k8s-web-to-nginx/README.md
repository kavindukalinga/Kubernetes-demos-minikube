## Pre-installations

```bash
sudo apt update
sudo apt install nodejs
sudo apt install npm
```
```bash
npm init -y
```
```bash
npm install express
```
```bash
npm install node-fetch`
```
Add/Change the following section in `package.json` file 
```json
  "scripts": {
    "start": "node index.mjs"
  },
```

```bash
npm start
```
```bash
docker build . -t kavindukalinga/k8s-web-to-nginx
```

```bash
docker push kavindukalinga/k8s-web-to-nginx
```
Before push the image to dockerhub, you might want to log into it using your credentials.
```bash
docker login
```
