import './Header.css'
import Nav from './nav.jsx'
import Button from './button.jsx'

function Header(){
    return(
        <header className="header">
            <h1 className="logo">Welcome</h1>
            <Nav />
            <Button text="Login"/>
        </header>
    )
}

export default Header;