import blondwomen from '../../images/blondwomen.png'

function Auth({ active, setActive }) {
    return (
        <div className={active ? "auth__blackout active" : 'auth__blackout'}  >
            <div className='auth'>
                <div className='auth__head'>
                    <h1 className="auth__title">Вход или регистрация</h1>
                    <button className='auth__close' onClick={() => setActive(!active)}></button>
                </div>
                <div className="auth__box">
                    <label className="auth__phone">Телефон</label>
                    <input className="auth__input" placeholder="+7(999) 003-21-21"></input>
                </div>
                <div className="auth__singin navBar__signin" >Войти</div>
                <a href="" className='auth__email'>Войти по почте</a>
                <div className="auth__footer">
                    <img className='auth__img' src={blondwomen} />
                </div>
            </div>
        </div>
    )
}
export default Auth;