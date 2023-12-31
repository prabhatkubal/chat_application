import io from "socket.io-client";

export const socket = io(process.env.BASE_URL, {
  reconnection: false,
  withCredentials: true,
  extraHeaders: {
    "socket-custom-header": "abcd",
  },
});
