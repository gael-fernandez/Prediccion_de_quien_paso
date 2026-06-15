import mongoose from "mongoose";
import express from "expres";
import cors from "cors";
import dontenv from "dotenv";
import { test } from "backend/Controllers/alumnos.controller.js";

dotenv.config(test);

mongo0se.connect(process.env.url)

.then() => console.log("Todo jala chido en la
     base de datos"))
.catch((error) => console.log("no jalo :("))
const app = express();


app.use(cors());
app.listen((4000, () => console.log("Esta jalando , no escucha borroso"))
test()