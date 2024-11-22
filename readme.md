# Weather CLI

A command-line interface tool to fetch weather information using OpenWeatherMap API.

## Features

- Current weather conditions
- 5-day weather forecast
- City-based weather lookup
- Detailed temperature and condition information

## Prerequisites

- Node.js 16+
- OpenWeatherMap API Key

## Installation

```bash
git clone https://github.com/yourusername/weather-cli.git
cd weather-cli
npm install
npm run build
```

## Configuration

1. Create `.env` file in project root
2. Add your OpenWeatherMap API key:

```
OPENWEATHER_API_KEY=your_api_key_here
```

## Usage

### Current Weather

```bash
npm run current "London,UK"
```

### 5-Day Forecast

```bash
npm run forecast "New York,US"
```

## Development

### Build

```bash
npm run build
```

### Run

```bash
npm start current "City,Country"
npm start forecast "City,Country"
```

## Commands

- `npm run current [city]`: Get current weather
- `npm run forecast [city]`: Get 5-day forecast

## Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create pull request

## License

MIT License
