import { FocusableComponentLayout, FocusDetails, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { channel } from "../types";

interface channelCardProps extends channel { 
    onFocus: (
        layout: FocusableComponentLayout,
        props: object,
        details: FocusDetails
      ) => void;
 }

function channelCard({ image, name,onFocus }: channelCardProps) {

    const { ref, focused } = useFocusable({
        onFocus
    })

    return (
        <div className={`movie-card ${focused ? 'active' : ''}`} ref={ref}>
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
// https://codepen.io/hourwinner/pen/gOaWdNy
export default channelCard;

