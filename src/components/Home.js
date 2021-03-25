import React from 'react'
import '../App.css';

function Home() {
    return(
        <div>
            <div className= "cart-icon-wrapper">   
                <img src = "data:image/png;base64,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"></img>
            </div>
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className ="img-wrapper item">
                    <img src = "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" />
                </div>
                <div className ="txt-wrapper item">
                    <span>
                        Iphone
                    </span>
                    <span>
                        Price : 1000$
                    </span>
                </div>
                <div className ="button-wrapper item">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;