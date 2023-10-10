import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { BsSliders, BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { dataSelect } from "../actions/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const { tickets, users } = useSelector((state) => state.dataSlice);
  const [slider, setSlider] = useState(false); // Add this line
  const [groups, setGroups] = useState(localStorage.getItem("group") || "status");
  const [order, setOrder] = useState(localStorage.getItem("order") || "priority");

  const handleGroups = (e, isGroup) => {
    if (isGroup) {
      setGroups(e.target.value);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrder(e.target.value);
      localStorage.setItem("order", e.target.value);
    }
  };

  useEffect(() => {
    const data = groups === "user" ? { tickets, users } : tickets;
    dispatch(dataSelect(groups, data, order));
  }, [dispatch, groups, users, tickets, order]);

  return (
    <div className="navbar">
      <div className="navbarButton">
        <button className="groupButton" onClick={() => setSlider(!slider)}>
          <BsSliders /> Display <BsChevronDown />
        </button>

        {slider && (
          <div className="dropDown">
            <div className="group">
              <span style={{ color: "grey" }}>Grouping</span>
              <select
                value={groups}
                onChange={(e) => handleGroups(e, true)}
                name="group"
                id="group"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>

            <div className="group">
              <span style={{ color: "grey" }}>Ordering</span>
              <select
                value={order}
                onChange={(e) => handleGroups(e, false)}
                name="order"
                id="order"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
