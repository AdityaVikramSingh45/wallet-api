import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js"; // Make sure the filename ends with `.js`
import rateLimiter from "./midldlware/rateLimiter.js";
import transactionRoute from "./routes/transactions.js"
import { initDB } from "./config/db.js";
import cors from "cors"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(rateLimiter)
app.use(express.json());

// Enable CORS for all origins (for development)
app.use(cors());

// Or enable CORS for a specific origin (more secure)
app.use(cors({
    origin: ['http://localhost:8081', 'https://wallet-api-gj0s.onrender.com'],
  }));
  

app.get("/", (req, res)=>{
    res.send("It's working mannn....")
})

//Mouting
app.use("/api/transactions", transactionRoute)

initDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is listening at PORT: ${PORT}....`);
    });
})
