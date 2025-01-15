import { config } from "dotenv";

config(); //for .env

export const seceretekey = process.env.SECRET_KEY;
