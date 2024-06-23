import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://media.istockphoto.com/id/1197390071/vector/food-delivery-by-motorcycle-with-five-stars-vector-icon-online-food-delivery-by-motorcycle.jpg?s=612x612&w=0&k=20&c=N4FWDRHEIudr5UIFtnh0SQ8jqVoYyv9PX6rEePItL5Y=" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestroCard = (props) => {
    return (
        <div className="res-card">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="res-logo" className="res-logo" />
            <h3>{props.title}</h3>
            <h4>{props.foods}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search hear
            </div>
            <div className="res-container">
                <RestroCard
                    title="Meghna Food"
                    foods="Biryani , North India , Asian Food"
                    rating="4.4"
                    time="38 Minutes"
                />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
