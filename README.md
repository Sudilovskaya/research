deploy https://glossary-9rea.onrender.com/

### Production docker:

```
docker build -t react-nginx-app .

docker run --name research -p 8080:80 -d react-nginx-app
```

### Development:

```
npm i

npm run start
```


