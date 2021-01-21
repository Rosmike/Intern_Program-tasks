import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { RoomView } from "./views/RoomView";
import { allRooms } from "./data/allRooms";

export const ROOMS_LOCALSTORAGE_KEY = "rooms";
export const ROOMS_COPY_LOCALSTORAGE_KEY = "roomsCopy";

const App = () => {
  const roomsFromLS = JSON.parse(localStorage.getItem(ROOMS_LOCALSTORAGE_KEY));

  const defaultRooms = Array.isArray(roomsFromLS) ? roomsFromLS : allRooms;

  const [rooms, setRooms] = useState(defaultRooms);
  const [useRoomsFromCopy, setUseRoomsFromCopy] = useState(false);

  useEffect(() => {
    !useRoomsFromCopy &&
      localStorage.setItem(ROOMS_LOCALSTORAGE_KEY, JSON.stringify(rooms));

    setUseRoomsFromCopy(false);
  }, [rooms]);

  const addRoom = () => {
    const newRoom = {
      id: rooms[rooms.length - 1].id + 1,
      name: "New room",
      numberOfUsers: 0,
      isActive: false,
      devices: [],
    };

    setRooms([...rooms, newRoom]);
  };

  const toggleRoom = (e, roomId, isActive) => {
    e.stopPropagation();
    const roomsToUpdate = [...rooms];

    const newValue = !isActive;

    const roomToToggle = roomsToUpdate.find((room) => room.id === roomId);
    roomToToggle.isActive = newValue;

    // If new value is true go through all rooms and devices inside room and turn them on
    if (newValue === true) {
      const roomsCopy = JSON.parse(
        localStorage.getItem(ROOMS_COPY_LOCALSTORAGE_KEY)
      );

      setUseRoomsFromCopy(true);

      setRooms(roomsCopy);
      // Else go through all rooms and devices inside room and turn them on is bulkToggleIsAllowed
    } else {
      localStorage.setItem(ROOMS_COPY_LOCALSTORAGE_KEY, JSON.stringify(rooms));

      roomsToUpdate.forEach((room, roomIndex) => {
        room.devices.forEach((device, deviceIndex) => {
          if (device.bulkToggleAllowed) {
            roomsToUpdate[roomIndex].devices[deviceIndex].isActive = false;
          }
        });
      });
    }

    setRooms(roomsToUpdate);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
          <Route exact path="/">
            <HomeView rooms={rooms} addRoom={addRoom} toggleRoom={toggleRoom} />
          </Route>
          <Route path="/room/:roomId">
            <RoomView rooms={rooms} setRooms={setRooms} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
