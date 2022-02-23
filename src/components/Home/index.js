import tesla_logo from "./../../picture/tesla_logo.png"
import './index.css'
const Home = () => {
    return (
        <div className="Home">
            <div className="navbar__container">
                <img className="navbar__logo" src={tesla_logo}></img>
                <div className="navbar__container--listitem">
                    <p>Model S</p>
                    <p>Model 3</p>
                    <p>Model X</p>
                    <p>Model Y</p>
                    <p>Solar Roof</p>
                    <p>Solar Panel</p>
                </div>
                <div className="navbar__container--action">
                    <p>Shop</p>
                    <p>Account</p>
                    <p>Menu</p>
                </div>
            </div>
            <div className="detail">
                <div className="detail__content">
                    <p className="detail__content--brand">Model 3</p>
                    <p>Order Online for <span>Touchless Delivery </span> </p>
                </div>

                <div className="detail__button">
                    <button>custom order</button>
                    <button>existing inventory</button>
                </div>
            </div>
        </div>

    )
}
export default Home