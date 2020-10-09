import React from "react";

const Classtime = ()=>{
    return <div>
        <section className="classtime-section class-time-table spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-title">
                            <h2>Classtime Table</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="timetable-controls">
                            <ul>
                                <li className="active" data-tsfilter="all">all class</li>
                                <li data-tsfilter="crossfit">crossfit</li>
                                <li data-tsfilter="lunge">lunge ball</li>
                                <li data-tsfilter="ppsr">ppsr</li>
                                <li data-tsfilter="walls">walls</li>
                                <li data-tsfilter="candy">candy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="classtime-table">
                    <table>
                        <thead>
                        <tr>
                            <th/>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                            <th>Sunday</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="workout-time">10.00</td>
                            <td className="hover-bg ts-item" data-tsmeta="crossfit">
                                <span>10.00 - 14.00</span>
                                <h6>Crossfit lv1</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="crossfit">
                                <span>10.00 - 15.00</span>
                                <h6>Crossfit lv1</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="lunge">
                                <span>10.00 - 13.00</span>
                                <h6>Lunge Ball Bur</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="lunge">
                                <span>10.00 - 13.30</span>
                                <h6>Lunge Ball Bur</h6>
                            </td>
                        </tr>
                        <tr>
                            <td className="workout-time">14.00</td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="lunge">
                                <span>14.00 - 17.00</span>
                                <h6>Lunge Ball Bur</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="crossfit">
                                <span>14.00 - 17.00</span>
                                <h6>Crossfit lv1</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="walls">
                                <span>14.00 - 15.30</span>
                                <h6>Walls to Knees</h6>
                            </td>
                            <td/>
                        </tr>
                        <tr>
                            <td className="workout-time">16.00</td>
                            <td className="hover-bg ts-item" data-tsmeta="lunge">
                                <span>16.00 - 18.00</span>
                                <h6>Lunge Ball Bur</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="candy">
                                <span>16.00 - 19.00</span>
                                <h6>Candy</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="candy">
                                <span>16.00 - 19.00</span>
                                <h6>Candy</h6>
                            </td>
                            <td className="hover-bg ts-item" data-tsmeta="ppsr">
                                <span>16.00 - 17.00</span>
                                <h6>Ppsr</h6>
                            </td>
                            <td className="hover-bg ts-item" data-tsmeta="murph">
                                <span>16.00 - 20.00</span>
                                <h6>murph</h6>
                            </td>
                        </tr>
                        <tr>
                            <td className="workout-time">18.00</td>
                            <td className="hover-bg ts-item" data-tsmeta="walls">
                                <span>18.00 - 20.00</span>
                                <h6>Walls to Knees</h6>
                            </td>
                            <td className="hover-bg ts-item" data-tsmeta="ppsr">
                                <span>18.00 - 20.00</span>
                                <h6>ppsr</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="chelsea">
                                <span>18.00 - 22.00</span>
                                <h6>Chelsea</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="annie">
                                <span>18.00 - 22.00</span>
                                <h6>annie</h6>
                            </td>
                            <td/>
                        </tr>
                        <tr>
                            <td className="workout-time">20.00</td>
                            <td className="hover-bg ts-item" data-tsmeta="lunge">
                                <span>21.00 - 23.00</span>
                                <h6>Lunge Ball Bur</h6>
                            </td>
                            <td className="hover-bg ts-item" data-tsmeta="walls">
                                <span>20.00 - 22.00</span>
                                <h6>Walls to Knees</h6>
                            </td>
                            <td className="hover-bg ts-item" data-tsmeta="walls">
                                <span>20.30 - 23.00</span>
                                <h6>Walls to Knees</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="crossfit">
                                <span>22.00 - 23.00</span>
                                <h6>Crossfit Lv2</h6>
                            </td>
                            <td/>
                            <td className="hover-bg ts-item" data-tsmeta="crossfit">
                                <span>21.00 - 23.00</span>
                                <h6>Crossfit Lv2</h6>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
}

export default Classtime;