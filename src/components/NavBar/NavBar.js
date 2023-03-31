import map from '../../images/map.png';

function NavBar({setModalActive}) {
    return (
        <div className="navBar">
            <nav className='navbar__bar'>
                <ul>
                    <li><a href="" alt=''><img src={map}></img>Москва</a></li>
                    <li><a>8 (495) 137-94-95</a></li>
                    <li><a href="" alt=''>Акции</a></li>
                    <li><a href="" alt=''>Актуальное</a></li>
                    <li><a href="" alt=''>Пункты выдачи</a></li>
                    <li><a href="" alt=''>Вакансии</a></li>
                    <li><a href="" alt=''>Помощь</a></li>
                </ul>
            </nav>
            <button type='button' onClick={() => setModalActive(true)} className='navBar__signin'>Войти</button>
        </div>
    )
}

export default NavBar;