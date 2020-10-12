import React from "react";

const ChooseUs = ()=>{
    return <div>
        <section className="chooseus-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Почему стоит выбрать меня в качестве тренера</h2>
                            <p>Тут какой-то самовосхваляющий текст.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="choose-item">
                            <img src={require('./img/icons/chose-icon-1.png')} alt=""/>
                            <h5>Обратная связь</h5>
                            <p>Один из лучших способов быстро испортить свои тренировки - не давать тренеру обратную связь.  </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="choose-item">
                            <img src={require('./img/icons/chose-icon-2.png')} alt=""/>
                            <h5>Другие тренеры</h5>
                            <p>Если вы оказались в другом городе, спросите меня, у какого тренера по бегу лучше посещать тренировки.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="choose-item">
                            <img src={require('./img/icons/chose-icon-3.png')} alt=""/>
                            <h5>Персональный подход</h5>
                            <p>Чтобы добиться успеха в любом начинании, вы должны двигаться верным курсом! Вот некоторые советы, которые помогут вам в вашем самосовершенствовании.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="choose-item">
                            <img src={require('./img/icons/chose-icon-4.png')} alt=""/>
                            <h5>Экипировка</h5>
                            <p>Что? Где? Зачем? Почему?</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="choose-item">
                            <img src={require('./img/icons/chose-icon-5.png')} alt=""/>
                            <h5>Ежедневные занятия</h5>
                            <p>Равномерная нагрузка для каждого дня, без надрыва.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="choose-item">
                            <img src={require('./img/icons/chose-icon-6.png')} alt=""/>
                            <h5>Внимание к здоровью</h5>
                            <p>Тренировки, это не единственное, чему стоит уделить внимание.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default ChooseUs;