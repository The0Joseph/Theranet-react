import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { categorieChannel, ChannelResponse } from "../types";
import CategorieSlider from "./categorieSlider";
import { useCallback, useEffect, useState } from "react";
import { getChannels } from "../services/api";
import Loader from "./loader";

function CategoriesContent() {
  const { ref, focusKey } = useFocusable();
  const [categoriesData, setCategoriesData] = useState<categorieChannel[]>([]);
  const [loading, setLoading] = useState(true);

  const getCategoryeData = async () => {
    const res: ChannelResponse = await getChannels();
    setCategoriesData(res.data);
    setLoading(false);
  };

  const onCategorieFocus = useCallback(
    ({ y }: { y: number }) => {
      ref.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    },
    [ref]
  );

  useEffect(() => {
    getCategoryeData();
  }, []);

  if (loading) return <Loader />;

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="content">
        {categoriesData.map((categorie) => (
          <CategorieSlider
            key={categorie.name}
            {...categorie}
            onFocus={onCategorieFocus}
          />
        ))}
      </div>
    </FocusContext.Provider>
  );
}

export default CategoriesContent;
