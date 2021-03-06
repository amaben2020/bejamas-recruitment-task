import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}) => {
    
    return (
        <div>
            <GlobalStyles/>
            <Typography/>
            <Nav/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
