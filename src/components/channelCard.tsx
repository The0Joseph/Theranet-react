import { channel } from "../types";

interface channelCardProps extends channel { }

function channelCard({ image, name }: channelCardProps) {
    return (
        <div className="movie-card">
            <img
                src={image}
                alt={name}
            />
            <div className="movie-info">
                <h3 className="movie-title">{name}</h3>
            </div>
        </div>
    );
}

export default channelCard;

