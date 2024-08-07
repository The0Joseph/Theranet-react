import { channelDetail } from "../types";

export const usePlayerConfig = (channel: channelDetail) => {
  const data = {
    default: true,
    label: "0",
    type: channel.type.toLowerCase(),
    file: atob(channel.url),
    drm: {
      clearkey: {
        keyId: "",
        key: "",
      },
    },
  };

  if (channel.type.toLowerCase().includes("dash")) {
    data.drm = {
      clearkey: {
        keyId: atob(channel.k1 ?? ""),
        key: atob(channel.k2 ?? ""),
      },
    };

    data.type = "dash";
  }

  return [data];
};
