import { Args, Command } from '@oclif/core';
import axios from 'axios';
import chalk from 'chalk';
import { getConfig } from '../utils/config.js';

export default class Forecast extends Command {
  static description = 'Get 5-day weather forecast for a city';

  static examples = [
    '$ weather forecast "London,UK"',
    '$ weather forecast "New York,US"',
  ];

  static args = {
    city: Args.string({
      name: 'city',
      required: true,
      description: 'City name (and country code)',
    }),
  };

  async run() {
    const { args } = await this.parse(Forecast);
    
    try {
      const config = getConfig();
      const response = await axios.get(
        `${config.weatherApiBaseUrl}/forecast?q=${args.city}&appid=${config.apiKey}&units=metric`
      );

      const { list, city } = response.data;

      this.log(chalk.bold(`\n5-day forecast for ${city.name}, ${city.country}\n`));

      // Group forecasts by day
      const dailyForecasts = list.reduce((acc: any, forecast: any) => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(forecast);
        return acc;
      }, {});

      // Show average temperatures for each day
      Object.entries(dailyForecasts).forEach(([date, forecasts]: [string, any]) => {
        const avgTemp = forecasts.reduce((sum: number, f: any) => sum + f.main.temp, 0) / forecasts.length;
        const conditions = forecasts[0].weather[0].description;

        this.log(`${chalk.blue(date)}
Temperature: ${avgTemp.toFixed(1)}°C
Conditions: ${conditions}
`);
      });
    } catch (error: any) {
      if (error.message.includes('OPENWEATHER_API_KEY')) {
        this.error('API key not found. Please add OPENWEATHER_API_KEY to your .env file');
      } else if (error.response?.status === 404) {
        this.error('City not found');
      } else {
        this.error('Error fetching forecast data');
      }
    }
  }
}

