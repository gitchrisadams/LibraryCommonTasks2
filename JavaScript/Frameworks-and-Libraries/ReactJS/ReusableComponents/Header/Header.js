import React from 'react';
import styles from './Header.css';

/*
* Example usage: <Header siteName="My SiteName Here" margin={25} fontSize={40}/>
* @param string prop for the site name.
* @param int prop for the margin
* @param int prop for the font size.
*/
const Header = (props) => (
 <div className={styles.container} style={{margin: props.margin, fontSize: props.fontSize}}>{props.siteName}</div>
);

export default Header;