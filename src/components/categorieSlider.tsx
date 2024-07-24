import { categorieChannel } from "../types";
import ChannelCard from "./channelCard";

function CategorieSlider({ name, channels }: categorieChannel) {
    return (
        <div className="category">
            <h2>{name}</h2>
            <div className="slider-container">
                <div className="slider">
                    {channels.map(channel => (
                        <ChannelCard
                            key={channel.slug}
                            {...channel}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategorieSlider;
