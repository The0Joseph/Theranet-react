import { useFocusable, FocusContext, KeyPressDetails, FocusableComponentLayout, FocusDetails } from '@noriginmedia/norigin-spatial-navigation';
import { ChannelResponse } from "../types";
import CategorieSlider from './categorieSlider';

function CategoriesContent(categoriesData:ChannelResponse) {

    const { ref, focusKey } = useFocusable();

      [ref]


    return (<FocusContext.Provider value={focusKey}>
        <div ref={ref}>
            {
                categoriesData.data.map(categorie => (
                    <CategorieSlider key={categorie.name} {...categorie} />
                ))
            }
        </div>
    </FocusContext.Provider>);
}

export default CategoriesContent;