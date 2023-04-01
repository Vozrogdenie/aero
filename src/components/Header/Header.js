import plusImg from '../../images/plus.png'
import profile from '../../images/profile.png'
import heart from '../../images/heart.png'
import trach from '../../images/trach.png'
import rednumber from '../../images/rednumber.png'
import catalog from '../../images/catalog.png'

function Header() {
    return (
        <section className="header">
            <div className='header__hili'>
                <div className='header__burger'></div>
                <div className="header__a-plus">
                    <img className='header__plus' src={plusImg} alt="Кнопка ведущая в профиль" />
                </div>
                <div className='header__lupa'></div>
                <button className="header__catalog"><img className='header__line' src={catalog} alt="" />Каталог</button>
                <div className='header__input'>
                    <input className="header__filter" placeholder="Искать товары"></input>
                    <label className="header__filter-label">Поиск</label>
                </div>
                <a href="/" style={{ color: 'rgba(0, 133, 255, 1)' }} className='header__logo'><img className='header__img' src={profile} alt="Кнопка ведущая в профиль" />Профиль</a>
                <a href="/" className='header__logo'><img className='header__img' src={heart} alt="Кнопка ведущая в избранное" />
                    <img className='header__img-red' src={rednumber} />Избранное</a>
                <a href="/" className='header__logo'><img className='header__img' src={trach} alt="Кнопка ведущая в корзину" />Корзина</a>
            </div>
        </section>
    )
}

export default Header;