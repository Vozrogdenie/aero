import plusImg from '../../images/plus.png'

function Header() {
    return (
        <div className="header">
            <div className="header__a-plus">
                <img className='header__plus' src={plusImg} alt="Кнопка ведущая в профиль" />
            </div>
            <button className="header__catalog">Каталог</button>
            <input className="header__filter" placeholder="Искать товары"></input>
            <label className="header__filter-label">Поиск</label>
            <a href="/" className='header__logo'><img src={''} alt="Кнопка ведущая в профиль" /></a>
            <a href="/" className='header__logo'><img src={''} alt="Кнопка ведущая в избранное" /></a>
            <a href="/" className='header__logo'><img src={''} alt="Кнопка ведущая в корзину" /></a>
        </div>
    )
}

export default Header;