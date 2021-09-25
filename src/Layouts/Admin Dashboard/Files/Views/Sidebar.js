import React from 'react';
import {CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SidebarForAdmin = () => {
    return (
      <div
        style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
              Logistics
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart">Dashboard</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/teachers-data" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Teachers & Classes</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/registration-data" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Students & Invoices</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/classes" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Classes</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/placement-test" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Placement Test</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/create-placement-test" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Create Placement Test</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/course-content" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Course Content</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/notification" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Notification</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/performance" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Performance</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/contacts" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Contacts</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/online-chat" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Online Chat</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/privacy" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Privacy Policy</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/promotioncode" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="book">Promotion Code</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/finances" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Finances</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/blogs" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Blogs</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/testimonials" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Testmonials</CDBSidebarMenuItem>
              </NavLink>
  
             
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    );
  };
  

export default SidebarForAdmin;
