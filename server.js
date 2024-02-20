import { app } from './app.js';
import { ConnectDB } from './data/database.js'

ConnectDB();

app.listen(process.env.PORT, (req, res) => {
    console.log(`server is working ${process.env.PORT} in ${process.env.NODE_ENV} Mode`)
})