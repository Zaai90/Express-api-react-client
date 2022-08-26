# Express-API and React client 

Assignment by Erik Grune
  
 ## Requirements 
 ``` 
 Node.js 
 npm 
 ``` 
 # Server 

 ## Set up 
 ``` 
 git clone https://github.com/Zaai90/Express-api-react-client.git
 cd server 
 npm install 
 ``` 
 ## Build and run 
 ``` 
 npm run build 
 npm start 
 ``` 

 ## Dev mode
 ``` 
 npm run dev
 ```
  
 ## Endpoints 
  
 | Method | URL                              | Description                 | 
 | :--------: | -------------------------- | ----------------------------|
 |  `GET` | `/api/products/`                  |Retrieve all products.       | 
 |  `GET` | `/api/products/{id}`              |Retrieve product by id.      | 
 |  `PUT` | `/api/products/{id}`              |Update product by id.        | 
 |  `POST`| `/api/products/`                  |Add a new product.           | 
 |`DELETE`| `/api/products/{id}`              |Delete product by id.        | 
  
  
  

 # Client

 ## Set up 
 ``` 
 cd client
 npm install
 ``` 
 ## Build and Run 
 ``` 
 npm run build
 npm preview
 ``` 

  ## Dev mode
 ``` 
 npm run dev
 ```
  
 ## Krav för godkänt: 
 - [x] - Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs) 
 - [x] - Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http) 
 - [x] - Datan som API:et hanterar sparas lokalt i serverfilen 
 - [x] - APIét ska svara med 404 om datan saknas. 
 - [x] - Git & GitHub har använts 
 - [x] - Projektmappen innehåller en README.md fil - (läs ovan för mer info) 
 - [x] - Uppgiften lämnas in i tid! 
  
 ## Krav för väl godkänt: 
 - [x] - Alla punkter för godkänt är uppfyllda 
 - [x] - All data skall vara sparad i en JSON-fil istället för i serverfilen 
 - [x] - Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort 
 - [x] - Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och 
 presentera datan, redigeringsformulär skall fyllas i med befintlig information. 
 - [x] - Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
