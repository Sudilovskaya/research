deploy https://glossary-9rea.onrender.com/

### Production docker:

```
docker build -t sudilovskaya/itmo-practice:latest .

docker run --name research -p 8080:80 -d sudilovskaya/itmo-practice:latest
```

### Development:

```
npm i

npm run start
```


