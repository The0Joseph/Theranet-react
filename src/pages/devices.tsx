import { useCallback, useEffect, useRef, useState } from "react";
import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { device, devicesResponse } from "../types";
import DeviceCard from "../components/deviceCard";
import Loader from "../components/loader";
import { getDevices } from "../services/api";

function Devices() {
  const [devices, setDevices] = useState<device[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, focusKey } = useFocusable();

  const get_Devices = async () => {
    const req: devicesResponse = await getDevices();
    setDevices(req.data);
    setLoading(false);
  };

  useEffect(() => {
    get_Devices();
  }, []);

  const scrollingRef = useRef(null);

  const onDeviceFocus = useCallback(
    ({ x }: { x: number }) => {
      scrollingRef.current.scrollTo({
        left: x,
        behavior: "smooth",
      });
    },
    [scrollingRef]
  );

  if (loading) return <Loader />;

  return (
    <>
      <FocusContext.Provider value={focusKey}>
        <div className="category" ref={ref}>
          <h2>Dispositivos</h2>
          <div className="slider-container" ref={scrollingRef}>
            <div className="slider">
              {devices.map((device) => (
                <DeviceCard
                  key={device.id}
                  {...device}
                  onFocus={onDeviceFocus}
                />
              ))}
            </div>
          </div>
        </div>
      </FocusContext.Provider>
    </>
  );
}

export default Devices;
