import map from '../../images/map.png';

function NavBar() {
    return (
        <div className="navBar">
            <nav>
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
            <button type='button' className='navBar__signin'>Войти</button>
        </div>
    )
}

export default NavBar;