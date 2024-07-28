import { FocusableComponentLayout, FocusContext, FocusDetails, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { categorieChannel } from "../types";
import ChannelCard from "./channelCard";
import { useCallback, useRef } from "react";

interface CategorieSliderProps extends categorieChannel{
    onFocus: (
        layout: FocusableComponentLayout,
        props: object,
        details: FocusDetails
      ) => void;
}

function CategorieSlider({ name, channels,onFocus  }: CategorieSliderProps) {

    const { ref, focusKey } = useFocusable({
        onFocus
      });
    
      const scrollingRef = useRef(null);
    
      const onChannelFocus = useCallback(
        ({ x }: { x: number }) => {
          scrollingRef.current.scrollTo({
            left: x,
            behavior: 'smooth'
          });
        },
        [scrollingRef]
      );

    return (
        <FocusContext.Provider value={focusKey}>
        <div className="category" ref={ref}>
            <h2>{name}</h2>
            <div className="slider-container" ref={scrollingRef}>
                <div className="slider">
                    {channels.map(channel => (
                        <ChannelCard
                            key={channel.slug}
                            {...channel}
                            onFocus={onChannelFocus}
                        />
                    ))}
                </div>
            </div>
        </div>
        </FocusContext.Provider>
    );
}

export default CategorieSlider;
