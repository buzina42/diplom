import React from "react";
import {Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
{/* 1 элемент с ценником в него передается инфа из БД с сервера*/}
const PriceItem = (props)=>{
    return <div className="col-lg-3">
        <div className="single-price-plan">
            <h4>Тариф</h4>
            <div className="price-plan">
                <h2>{props.title} <span>₽</span></h2>
                <p>Что входит:</p>
            </div>
            <p>{props.description}</p>
            <NavLink to={props.title.replaceAll(" ","_")}  className="primary-btn price-btn">Хочу!</NavLink>
        </div>
    </div>
}

{/*классовая компонента*/}
class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {priceItems: []};
    }
    componentDidMount() {
        this.props.getArticles().then(
            articles => {
                let articlesCount = articles.length;
                let priceItems = [];
                for (let i = 0; i < articlesCount; i++) {
                    priceItems.push(<PriceItem
                        key={i}
                        title={articles[i].title}
                        description={articles[i].description}
                    />)
                }
                this.setState({priceItems: priceItems})
            }
        )


    }

    render() {
        return <div>
            <section className="price-section spad set-bg"
                     style={{backgroundImage: `url(${require("./img/price-bg.jpg")})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Выберите подходящий тариф</h2>
                                <p>Бла-бла-бла<br/>
                                    Бла-бла-бла-бла.</p>
                            </div>
                        </div>
                    </div>
                    {/* блок с ценником*/}
                    <Route exact path="" render={()=>{
                        return <div className="container">
                            <div className="row">
                                {this.state.priceItems}
                            </div>
                        </div>
                    }} />
                </div>
            </section>
        </div>
    }
}

export default Price;