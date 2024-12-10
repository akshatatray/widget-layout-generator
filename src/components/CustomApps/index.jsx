import TimeWidget from "./TimeWidget";
import WeatherWidget from "./WeatherWidget";
import MapsWidget from "./MapsWidget";

export const AppLibrary = () => {
    return {
        blocks: {
            Time: TimeWidget({}),
            Weather: WeatherWidget({}),
            Maps: MapsWidget({}),
        }
    }
}