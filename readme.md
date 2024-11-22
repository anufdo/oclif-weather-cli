# Weather CLI

A command-line interface tool to check weather conditions and forecasts for cities worldwide using the OpenWeatherMap API.

## Features

- Get current weather conditions for any city
- View 5-day weather forecasts
- Temperature in Celsius
- Detailed weather information including:
  - Temperature
  - Feels like temperature
  - Humidity
  - Weather conditions
  - Daily forecasts

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key

## Installation

1. Clone the repository:

```bash
git clone https://github.com/anufdo/weather-cli.git
cd weather-cli
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

4. Link the CLI tool:

```bash
npm link
```

## Configuration

Before using the CLI, you need to set up your OpenWeatherMap API key. You can get one by signing up at [OpenWeatherMap](https://openweathermap.org/api).

Set your API key as an environment variable:

```bash
export OPENWEATHER_API_KEY=your_api_key_here
```

For permanent configuration, add this to your `.bashrc`, `.zshrc`, or equivalent:

```bash
echo 'export OPENWEATHER_API_KEY=your_api_key_here' >> ~/.bashrc
```

## Usage

### Get Current Weather

```bash
weather current "city,country"
```

Example:

```bash
weather current "London,UK"
```

This will display:

- Current temperature
- Feels like temperature
- Humidity
- Weather conditions

### Get 5-Day Forecast

```bash
weather forecast "city,country"
```

Example:

```bash
weather forecast "New York,US"
```

This will show:

- Daily average temperatures
- Weather conditions for each day

### Help Commands

Get general help:

```bash
weather --help
```

Get command-specific help:

```bash
weather current --help
weather forecast --help
```

## Error Handling

The CLI handles various error cases:

- Invalid API key
- City not found
- Network errors
- API request failures

## Development

### Project Structure

```
weather-cli/
├── src/
│   └── commands/
│       ├── current.ts
│       └── forecast.ts
├── package.json
└── tsconfig.json
```

### Building

```bash
npm run build
```

### Making Changes

1. Make changes to the TypeScript files in the `src` directory
2. Rebuild the project using `npm run build`
3. Test your changes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [oclif](https://oclif.io/)
- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Thanks to all contributors and users
