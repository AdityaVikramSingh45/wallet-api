import {neon}  from "@neondatabase/serverless";
import dotenv from "dotenv" ;
dotenv.config();

//Creates a Sql connection using our DB URL
export const sql = neon(process.env.DATABASE_URL);

export async function initDB() {
    try {
      // await sql`DROP TABLE IF EXISTS transactions`;
      await sql`CREATE TABLE IF NOT EXISTS transactions(
          id SERIAL PRIMARY KEY,
          user_id  VARCHAR(255) NOT NULL,
          title VARCHAR(255) NOT NULL,
          amount DECIMAL(10, 2) NOT NULL, 
          category VARCHAR(255) NOT NULL,
          created_at DATE NOT NULL DEFAULT CURRENT_DATE
      )`;
  
      // DECIMAL(10, 2) => 10 DIGITS TOTAL AND 2 DIGIT AFTER DECIMAL POINT (MAX: 99999999.99)
  
  
      console.log("DB Initialized successfully");
    } catch (error) {
      console.error(" DB Init Error:", error);
      process.exit(1);
    }
  }