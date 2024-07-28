import { FocusableComponentLayout, FocusDetails, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { channel } from "../types";

interface channelCardProps extends channel { 
    onFocus: (
        layout: FocusableComponentLayout,
        props: object,
        details: FocusDetails
      ) => void;
 }

function channelCard({ image, name,onFocus,slug}: channelCardProps) {

    const onEnterPress = () => {
        let data = new FormData()
        data.append('slug', slug)
        alert("enter  => " + slug)
    }

    const { ref, focused } = useFocusable({
        onFocus,
        onEnterPress
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

