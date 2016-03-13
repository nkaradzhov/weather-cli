# Check the weather from the terminal
## install

```
$ npm install -g weathercli
```

## setup
- First go to [openweathermap.org](http://openweathermap.org/)
and register to get access token

```
$ weathercli setup

? enter city (undefined):

london

? choose units (Use arrow keys)

> metric ( Celsius )
  imperial ( Farenheit )

? enter access token for the openweathermap api (undefined):

c06277ef7d8e1faf47d42134dsfa2347

setup complete
```

this will be persisted in ~/.config/configstore/weathercli.json

```
$ cat ~/.config/configstore/weathercli.json

{
    "city": "london",
    "token": "c06277ef7d8e1faf47d42134dsfa2347",
    "units": "metric"
}
```

## usage

```
$ wcli

London, GB

  .-.         _ o  
 (   ).      |_    light snow
(___(__)     |_|   rain: 100 %
*  *  *  
*  *  *   
--------------------------------------------------------------------------------------------

 Mon 2          Tue 3          Wed 6          Thu 7          Fri 10         Sat 13   

  .-.            .-.            .-.           \   /          \   /          \   /    
 (   ).         (   ).         (   ).          .-.            .-.            .-.     
(___(__)       (___(__)       (___(__)      ‒ (   ) ‒      ‒ (   ) ‒      ‒ (   ) ‒  
 *  *  *        *  *  *        *  *  *         `-᾿            `-᾿            `-᾿     
*  *  *        *  *  *        *  *  *         /   \          /   \          /   \    


```

## todo
- [x] make degrees configurable
- [ ] different rendering styles ( simple, normal, detail, etc)
- [ ] add self update feature
- [ ] determine location automatically

## license
MIT
