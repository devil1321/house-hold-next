import React from 'react'
import Nav from './nav.component';
import Footer from './footer.component';

interface LayoutProps{
    className:string;
    title:string;
    meta:any[];
    children:React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({className,title,meta,children}) => {
  return (
    <div className={'container ' + className}>
      <Nav /> 
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
