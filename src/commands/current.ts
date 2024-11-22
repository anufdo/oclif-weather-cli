import { Args, Command } from '@oclif/core';
import axios from 'axios';
import chalk from 'chalk';
import { getConfig } from '../utils/config.js';

export default class Current extends Command {
  static description = 'Get current weather for a city';

  static examples = [
    '$ weather current "London,UK"',
    '$ weather current "New York,US"',
  ];

  static args = {
    city: Args.string({
      name: 'city',
      required: true,
      description: 'City name (and country code)',
    }),
  };

  async run() {
    const { args } = await this.parse(Current);
    
    try {
      const config = getConfig();
      const response = await axios.get(
        `${config.weatherApiBaseUrl}/weather?q=${args.city}&appid=${config.apiKey}&units=metric`
      );

      const { main, weather, name, sys } = response.data;

      this.log(`
${chalk.bold(`Weather in ${name}, ${sys.country}`)}
${chalk.blue('Temperature:')} ${main.temp}°C
${chalk.blue('Feels like:')} ${main.feels_like}°C
${chalk.blue('Humidity:')} ${main.humidity}%
${chalk.blue('Conditions:')} ${weather[0].description}
      `);
    } catch (error: any) {
      if (error.message.includes('OPENWEATHER_API_KEY')) {
        this.error('API key not found. Please add OPENWEATHER_API_KEY to your .env file');
      } else if (error.response?.status === 404) {
        this.error('City not found');
      } else {
        this.error('Error fetching weather data');
      }
    }
  }
}