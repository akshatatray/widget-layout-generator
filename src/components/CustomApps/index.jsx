import TimeWidget from "./TimeWidget";
import WeatherWidget from "./WeatherWidget";
import NewsWidget from "./NewsWidget";
import QuoteWidget from "./QuoteWidget";
import MapsWidget from "./MapsWidget";

export const AppLibrary = () => {
    return {
        blocks: {
            Time: TimeWidget({}),
            Weather: WeatherWidget({}),
            News: NewsWidget({}),
            Quote: QuoteWidget({}),
            Maps: MapsWidget({}),
        }
    }
}