"use client";

interface WeatherProps {
  location: string;
  temperature: number;
  weather: string;
  toolCallId: string;
  units?: "celsius" | "fahrenheit";
}

const getWeatherIcon = (weather: string) => {
  switch (weather) {
    case "sunny":
      return "☀️";
    case "rainy":
      return "🌧️";
    case "cloudy":
      return "☁️";
    case "snowy":
      return "❄️";
    case "partly_cloudy":
      return "⛅";
    case "thunderstorm":
      return "⛈️";
    default:
      return "🌡️";
  }
};

const getWeatherBackground = (weather: string) => {
  switch (weather) {
    case "sunny":
      return "bg-amber-100 text-amber-900";
    case "rainy":
      return "bg-blue-100 text-blue-900";
    case "cloudy":
      return "bg-slate-200 text-slate-900";
    case "snowy":
      return "bg-slate-100 text-slate-900";
    case "thunderstorm":
      return "bg-purple-100 text-purple-900";
    default:
      return "bg-slate-200 text-slate-900";
  }
};

export default function Weather({
  location,
  temperature,
  weather,
  toolCallId,
  units = "celsius"
}: WeatherProps) {
  return (
    <div
      key={toolCallId}
      className={`p-4 rounded-lg w-full transition-colors ${getWeatherBackground(
        weather
      )}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{getWeatherIcon(weather)}</span>
          <div className="text-lg font-medium">{location}</div>
        </div>
        <div className="text-2xl font-bold">
          {temperature}°{units === "celsius" ? "C" : "F"}
        </div>
      </div>
      <div className="mt-2 text-sm opacity-75 capitalize">
        {weather.replace("_", " ")}
      </div>
    </div>
  );
}
