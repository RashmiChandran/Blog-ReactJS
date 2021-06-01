import { Button } from 'reactstrap';

const Header = () =>{
    return (
        <header className="header">
            <div className="px-3">
                <h4 className="text-left">React JS Blog</h4>
                <Button outline className="sign-btn">Sign in</Button>
            </div>
        </header>
    );
}

export default Header;