import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import DraftsIcon from "@material-ui/icons/Drafts";
import SubjectIcon from "@material-ui/icons/Subject";
import InboxIcon from "@material-ui/icons/Inbox";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ChatIcon from "@material-ui/icons/Chat";

import AppsIcon from "@material-ui/icons/Apps";
import TimelineIcon from "@material-ui/icons/Timeline";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SettingsIcon from "@material-ui/icons/Settings";

import SidebarOption from "./SidebarOption";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function Sidebar() {
  // eslint-disable-next-line no-unused-vars
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>
            Login name <br></br>Company-name
          </h2>
          <h3>
            <FiberManualRecordIcon />
            Jane
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={SubjectIcon} title="Overview" />
      <SidebarOption Icon={InboxIcon} title="Inbox" />
      <SidebarOption Icon={DraftsIcon} title="Newsletter" />
      <SidebarOption Icon={ChatIcon} title="Chat" />

      <h4>Rentals</h4>
      <SidebarOption Icon={DateRangeIcon} title="Booking" />
      <SidebarOption Icon={AppsIcon} title="Hosts" />

      <h4>General</h4>
      <SidebarOption Icon={TimelineIcon} title="Workflow" />
      <SidebarOption Icon={MonetizationOnIcon} title="Financial" />
      <SidebarOption Icon={SettingsIcon} title="Settings" />
      <h4>Log out</h4>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--biketrace-color);
  flex: 0.3;
  border-top: 1px solid #b7494c;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #b7494c;
  }

  > h4 {
    margin-left: 20px;
    padding: 20px;
  }
  > input {
    padding: 20px;
    width: 150px;
    font-size: 18px;
    cursor: pointer;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #b7494c;
  padding-bottom: 10px;
  padding: 20px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #b7494c;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
