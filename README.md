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

? enter access token for the openweathermap api (undefined):

c06277ef7d8e1faf47d42134dsfa2347

setup complete
```

this will be persisted in ~/.config/configstore/weathercli.json

```
$ cat ~/.config/configstore/weathercli.json

{
    "city": "london",
    "token": "c06277ef7d8e1faf47d42134dsfa2347"
}
```

## usage

```
$ weathercli

                   *** WEATHER IN LONDON ***

┌────────┬───────┬────────┬────────┬────────┬────────┬────────┐
│ Today  │ Mon.  │ Tue.   │ Wed.   │ Thu.   │ Fri.   │ Sat.   │
├────────┼───────┼────────┼────────┼────────┼────────┼────────┤
│ 5.46   │ 2.17  │ 4.01   │ 5.46   │ 0.93   │ -1.7   │ 3.14   │
├────────┼───────┼────────┼────────┼────────┼────────┼────────┤
│ 6.56   │ 17.86 │ 19.9   │ 14.55  │ 14.61  │ 10.92  │ 6.72   │
├────────┼───────┼────────┼────────┼────────┼────────┼────────┤
│  (__)  │  \ /  │  (__)  │  (__)  │  (__)  │  (__)  │  (__)  │
│ (_(__) │ --O-- │ (_(__) │ (_(__) │ (_(__) │ (_(__) │ (_(__) │
│        │  / \  │  \ \ \ │  \ \ \ │  \ \ \ │  \ \ \ │  \ \ \ │
│        │       │        │        │        │        │        │
└────────┴───────┴────────┴────────┴────────┴────────┴────────┘
```

## todo
- [x] make degrees configurable
- [ ] different rendering styles ( simple, normal, detail, etc)
- [ ] add self update feature
- [ ] determine location automatically

## license
MIT
