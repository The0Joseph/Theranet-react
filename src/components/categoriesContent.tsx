import { FocusContext, init, setKeyMap, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { ChannelResponse } from "../types";
import CategorieSlider from './categorieSlider';
import { useCallback } from "react";
init({
      // debug: true,
      // visualDebug: true,
    });
    setKeyMap({
      left: 37, // 'ArrowLeft'
      up: 38, // 'ArrowUp'
      right: 39, // 'ArrowRight'
      down: 40, // 'ArrowDown'
      enter: 13 // 'Enter'
    });

function CategoriesContent(categoriesData:ChannelResponse) {

    const { ref, focusKey } = useFocusable();

    const onRowFocus = useCallback(
        ({ y }: { y: number }) => {
          ref.current.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        },
        [ref])

    return (
        <FocusContext.Provider value={focusKey}>
        <div ref={ref} className="content">
            {
                categoriesData.data.map(categorie => (
                    <CategorieSlider key={categorie.name} {...categorie} onFocus={onRowFocus} />
                ))
            }
        </div>
        </FocusContext.Provider>
        );
}

export default CategoriesContent;