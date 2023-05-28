import React from "react";
import type { NextPageWithLayout } from "../../app.types";

const Announcement: NextPageWithLayout = () => {
  return <div>Announcement</div>;
};

export default Announcement;

Announcement.layoutConfig = {
  case: "tab"
};
