const express = require('express');
const userRoute = require("./src/routes/user.route");

const app = express();
const connetcDatabase = require("./src/database/db")
//fuction (CAllback) - responsalvel por executar algum comando
// app.get('/route', (req, res) => {
//   res.send('Hello World')
// })
connetcDatabase()
app.use(express.json())
app.use("/user", userRoute);
app.listen(3000, () => console.log(`Servidor funciona`))