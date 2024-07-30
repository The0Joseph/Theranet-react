import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { categorieChannel, ChannelResponse } from "../types";
import { useCallback, useEffect, useState } from "react";
import { getChannels } from "../services/api";
import Loader from "../components/loader";
import CategorieSlider from "../components/categorieSlider";

function ChannelsPage() {
  const { ref, focusKey } = useFocusable({
    forceFocus:true,
    focusKey :"channelsContent"
  });
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

export default ChannelsPage;
