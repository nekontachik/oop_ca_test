# Preparations: 

1. ```cd /your/project/path```
2. ```git clone https://github.com/marciovrl/example-cypress.git```
2. ```npm install cypress --save-dev```
3. ```move test files into cypress/integration folder ```
4. ```./node_modules/.bin/cypress open```

___

### Command for tests runner opening

`npx cypress open`

---

### Run tests in background

`npx cypress run`


### Performance checking result

<p align="center">
  <img src="https://funkyimg.com/i/2TxXq.png"/>
</p>

### TODO 
- implement function that will check how many items in a column and call click for it
- implement separate functions for different buttons
- implement separate function for search that didides name and surname by space
- add cucumber to tests? (if it need it) 
- dockerized tests using docker and docker compose
