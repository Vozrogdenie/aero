import vk from '../../images/vk.png'
import ok from '../../images/ok.png'
import visa from '../../images/visa.png'
import mastercard from '../../images/mastercard.png'
import mir from '../../images/mir.png'
import logo from '../../images/logo.png'
import arrow from '../../images/arrow.png'
import { useState } from 'react'

function NewFoter() {
    const [openCatalog, setOpenCatalog] = useState(false)
    const [openBuy, setOpenBuy] = useState(false)
    const [openSeller, setOpenSeller] = useState(false)
    const [openCompany, setOpenCompany] = useState(false)

    return (
        <section className="footer">
            <div className="footer__all">
                <div className="footer__page one">
                    <ul className="footer__ul">
                        <div className="footer__catalog">Каталог
                            <button onClick={() => (setOpenCatalog(!openCatalog))} className='footer__arrow' /></div>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Техника для красоты</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Лекарство и бады</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Спортивные товары</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Контактные линзы</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Мама и малыш</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Красота и гигиена</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Медицинская техника</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Уход за больными</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Интимные товары</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Аптечки</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Игрушки</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Зоотовары</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Бытовая химия</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Для медецинских обследований</a></li>
                        <li className={openCatalog ? 'footer__li active' : 'footer__li'}><a href="">Ортопедия и лечебный трикотаж</a></li>
                    </ul>
                </div>
                <div className="footer__page two">
                    <ul className="footer__ul">
                        <div className="footer__catalog">Покупателям
                            <button onClick={() => (setOpenBuy(!openBuy))} className='footer__arrow' /></div>
                        <li className={openBuy ? 'footer__li active' : 'footer__li'}><a href="">Помощь</a></li>
                        <li className={openBuy ? 'footer__li active' : 'footer__li'}><a href="">Актуальное</a></li>
                        <li className={openBuy ? 'footer__li active' : 'footer__li'}><a href="">Акции</a></li>
                        <li className={openBuy ? 'footer__li active' : 'footer__li'}><a href="">Пункты выдачи</a></li>
                        <li className={openBuy ? 'footer__li active' : 'footer__li'}><a href="">Вакансии</a></li>
                    </ul>
                </div>
                <div className="footer__page three">
                    <ul className="footer__ul">
                        <div className="footer__catalog">Продавцам
                            <button onClick={() => (setOpenSeller(!openSeller))} className='footer__arrow' /></div>
                        <li className={openSeller ? 'footer__li active' : 'footer__li'}><a href="">Личный кабинет продавца</a></li>
                        <li className={openSeller ? 'footer__li active' : 'footer__li'}><a href="">Продавайте на Аптеки Плюс</a></li>
                        <li className={openSeller ? 'footer__li active' : 'footer__li'}><a href="">Документация для партнеров </a></li>
                        <li className={openSeller ? 'footer__li active' : 'footer__li'}><a href="">Сайт для партнеров</a></li>
                        <li className={openSeller ? 'footer__li active' : 'footer__li'}><a href="">Перевозчикам</a></li>
                    </ul>
                </div>
                <div className="footer__page">
                    <ul className="footer__ul">
                        <div className="footer__catalog">Компания
                            <button onClick={() => (setOpenCompany(!openCompany))} className='footer__arrow' /></div>
                        <li className={openCompany ? 'footer__li active' : 'footer__li'}><a href="">Акции</a></li>
                        <li className={openCompany ? 'footer__li active' : 'footer__li'}><a href="">Актуальное</a></li>
                        <li className={openCompany ? 'footer__li active' : 'footer__li'}><a href="">Пункты выдачи</a></li>
                        <li className={openCompany ? 'footer__li active' : 'footer__li'}><a href="">Вакансии</a></li>
                        <li className={openCompany ? 'footer__li active' : 'footer__li'}><a href="">Помощь</a></li>
                    </ul>
                </div>
                <div className="footer__page support">
                    <ul className='footer__ul'>
                        <p className='footer__subtitle' id='support'>Служба пoддержки</p>
                        <div className='footer__phone' href="" id='support'>8(495)137-94-95
                            <p className='footer__li p' id='support'>Бесплатно по России</p>
                        </div>
                    </ul>
                </div>
                <div className="footer__page pharmacy">
                    <p className='footer__subtitle'>Аптеки плюс в соцсетях</p>
                    <div className='footer__pay'>
                        <a className='footer__vk' href=""><img src={vk} /></a>
                        <a className='footer__vk' href=""><img src={ok} /></a>
                    </div>
                    <p className='footer__subtitle'>Принимаем к оплате</p>
                    <div className='footer__pay'>
                        <a className='footer__cardPay' href=""><img src={visa} /></a>
                        <a className='footer__cardPay' href=""><img src={mastercard} /></a>
                        <a className='footer__cardPay' href=""><img src={mir} /></a>
                    </div>
                </div>
                <ul className='footer__page agreement'>
                    <li className='footer__footer'><a href="">&copy;2022 &laquo;Аптеки Плюс&raquo;</a></li>
                    <li className='footer__footer'><a href="">Политика конфиденциальности</a></li>
                    <li className='footer__footer'><a href="">Пользовательское соглашение</a></li>
                </ul>
                <div className='footer__page work'>
                    <div className='footer__logoLink'>
                        <img className='footer__logo' src={logo} />
                        <p className='footer__work'>Разработано в<a target={'_blank'} href='https://aeroidea.ru' className='footer__aero'>Aero</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NewFoter;