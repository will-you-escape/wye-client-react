import { IEscapeRoomSessionInformation } from "./EscapeRoomSessionCreationForm";

export const createEscapeRoomSessionAction = (
  data: IEscapeRoomSessionInformation
) => {
  return {
    type: "ESCAPE_ROOM_SESSION_CREATION",
    payload: data
  };
};

export const fetchEscapeRoomSessionsAction = () => {
  return {
    type: "ESCAPE_ROOM_SESSION_LIST"
  };
};
