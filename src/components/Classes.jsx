import React from "react";
import ClassesItem from "./ClassesItem";

const Classes = ()=>{
    return <div>
        <section className="classes-section">
            <div className="class-title set-bg" style={{ backgroundImage: `url(${require("./img/classes-title-bg.jpg")})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="section-title pl-lg-4 pr-lg-4 pl-0 pr-0">
                                <h2>Выберите тренировки для себя</h2>
                                <p>Я помогу вам открыть для себя новые методы тренировок и упражнения, которые
                                    помогут динамично и эффективно развивать навыки выносливости</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
}

export default Classes;