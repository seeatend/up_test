import React from 'react'
import Logo from '../../../assets/images/icon_logo.png'
import Apps from '../../../assets/images/icon_apps.png'
import Reports from '../../../assets/images/icon_reports.png'
import Docs from '../../../assets/images/icon_docs.png'
import Download from '../../../assets/images/icon_download.png'
import Profile from '../../../assets/images/icon_profile.png'

function Sidebar() {
  return (
    <div className="sidebar-content">
      <div className="item logo">
        <img src={Logo} alt=""/>
        ADMIX
      </div>
      <div>
        <div className="item">
          <img src={Apps} alt=""/>
          MY APPS
        </div>
        <div className="item">
          <img src={Reports} alt=""/>
          REPORTS
        </div>
        <div className="item">
          <img src={Docs} alt=""/>
          DOCS
        </div>
        <div className="item">
          <img src={Download} alt=""/>
          DOWNLOAD
        </div>
        <div className="item">
          <img src={Profile} alt=""/>
          MY PROFILE
        </div>
      </div>
    </div>
  );
}

export default Sidebar;