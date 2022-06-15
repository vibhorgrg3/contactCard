import './Header.css';

const Header = () => {
    return (
        <div>
            <div>
                <h1 className='name'>Vibhor Garg</h1>
                <h2 className='subhead'>Frontend Developer</h2>
                <h2 className='email'> vibhorgrg3@gmail.com</h2>
                <div className='button'>
                    <button className='b1'>Email</button><button className='b2'>LinkedIn</button>
                </div>
            </div>
        </div>
    )
}

export default Header;