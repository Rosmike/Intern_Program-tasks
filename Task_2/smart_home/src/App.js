import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { RoomView } from "./views/RoomView";
import { allRooms } from "./data/allRooms";

export const ROOMS_LOCALSTORAGE_KEY = "rooms";

const App = () => {
  const roomsFromLS = JSON.parse(localStorage.getItem(ROOMS_LOCALSTORAGE_KEY));
  const defaultRooms = Array.isArray(roomsFromLS) ? roomsFromLS : allRooms;

  const [rooms, setRooms] = useState(defaultRooms);

  console.log(rooms);

  const addRoom = () => {
    const newRoom = {
      id: rooms[rooms.length - 1].id + 1,
      name: "Default name",
      numberOfUsers: 0,
      isActive: false,
      devices: [],
    };

    setRooms([...rooms, newRoom]);
  };

  useEffect(() => {
    localStorage.setItem(ROOMS_LOCALSTORAGE_KEY, JSON.stringify(rooms));
  }, [rooms]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomeView rooms={rooms} addRoom={addRoom} />
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
