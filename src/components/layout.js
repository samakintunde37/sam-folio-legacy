import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/header';
import Footer from './Footer/footer';
import './layout.css';

const Layout = ({ children }) => (
  <>
    <a href="https://www.samakintunde.com" className="banner">
      <div>
        <h4>Click here to visit new site</h4>
      </div>
    </a>
    <Header siteTitle="Samakintunde" />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
