import * as dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env file from project root
dotenv.config({ path: join(__dirname, '../../.env') });

export const getConfig = () => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  
  if (!apiKey) {
    throw new Error('OPENWEATHER_API_KEY is not set in .env file');
  }
  
  return {
    apiKey,
    weatherApiBaseUrl: 'https://api.openweathermap.org/data/2.5'
  };
};