import { Schema,model } from "mongoose";
const Esqueleto_de_tabla = new Schema({
    Alumno:String,
    Matricula:String,
    Calificacionpormateria: Number,
    Asistencia:Number,
    Promedio:Number,
    Grado:String,
    Prediccion:String
});
export const TablaAlumno= model("Tabla de prediccion",Esqueleto_de_tabla);