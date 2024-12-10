import TimeWidget from "./TImeWidget";
import WeatherWidget from "./WeatherWidget";
import NewsWidget from "./NewsWidget";
import QuoteWidget from "./QuoteWidget";

export const AppLibrary = () => {
    return {
        blocks: {
            time: TimeWidget({}),
            weather: WeatherWidget({}),
            news: NewsWidget({}),
            quote: QuoteWidget({}),
        }
    }
}