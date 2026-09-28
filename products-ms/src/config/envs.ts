import "dotenv/config";
import joi from 'joi';

/*Joi es una de las librerías de validación de datos más populares y potentes para el ecosistema de JavaScript y Node.js. 
Su propósito principal es asegurar que los datos que recibe o maneja tu aplicación 
cumplan estrictamente con las reglas y el formato que tú definas antes de ser procesados. 
npm i joi => instalación
*/

interface EnvVars{
    PORT:number;
    DATABASE_URL:string;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required()
})
.unknown(true);

const {error, value} =envsSchema.validate(process.env);
if (error){
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    databaseUrl: envVars.DATABASE_URL,
}
