# Forever vs PM2

We try to demostrate how both "forever" and "pm2" handle the requests after restarting

### Forever

1. Start application via forever
```
forever start bin/www --forever
```

2. Launch load test application
```
loadtest http://localhost:3000 -t 30 -c 20
```

3. Restart process via forever
```
forever restartall
```

4. Clean up
```
forever stopall
```

### PM2

1. Start application via pm2
```
pm2 start bin/www -i max
```

2. Launch load test application
```
loadtest http://localhost:3000 -t 30 -c 20
```

3. Restart process via forever
```
pm2 restart all
```

4. Clean up
```
pm2 kill
```

#### Reference
* forever => https://github.com/foreverjs/forever
* PM2 => http://pm2.keymetrics.io/
