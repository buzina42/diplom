import React from "react";
import {NavLink} from "react-bootstrap";

const Gallery = ()=>{
    return <div>
        <section className="gallery-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="gallery-controls">
                            <ul>
                                <li className="active" data-filter="*">All GALLERY</li>
                                <li data-filter=".crossfit">Crossfit</li>
                                <li data-filter=".workout">Workout</li>
                                <li data-filter=".gym">GYM</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row gallery-filter">
                    <div class="col-lg-4 col-sm-6 mix crossfit workout">
                        <div class="gallery-item">
                            <img src="img/gallery/gallery-1.jpg" alt=""/>
                            <div class="gi-hover-warp">
                                <div class="gi-hover">
                                    <a href="img/gallery/gallery-1.jpg" class="image-popup"><i class="fa fa-search-plus"></i></a>
                                    <a href="#"><i class="fa fa-chain"></i></a>
                                    <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mix workout gym">
                        <div class="gallery-item">
                            <img src="img/gallery/gallery-2.jpg" alt=""/>
                            <div class="gi-hover-warp">
                                <div class="gi-hover">
                                    <a href="img/gallery/gallery-2.jpg" class="image-popup"><i class="fa fa-search-plus"></i></a>
                                    <a href="#"><i class="fa fa-chain"></i></a>
                                    <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mix workout">
                        <div class="gallery-item">
                            <img src="img/gallery/gallery-3.jpg" alt=""/>
                            <div class="gi-hover-warp">
                                <div class="gi-hover">
                                    <a href="img/gallery/gallery-3.jpg" class="image-popup"><i class="fa fa-search-plus"></i></a>
                                    <a href="#"><i class="fa fa-chain"></i></a>
                                    <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mix gym">
                        <div className="gallery-item">
                            <img src="img/gallery/gallery-4.jpg" alt=""/>
                            <div className="gi-hover-warp">
                                <div className="gi-hover">
                                    <a href="img/gallery/gallery-4.jpg" className="image-popup"><i className="fa fa-search-plus"></i></a>
                                    <a href="#"><i className="fa fa-chain"></i></a>
                                    <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mix crossfit">
                        <div class="gallery-item">
                            <img src="img/gallery/gallery-5.jpg" alt=""/>
                            <div class="gi-hover-warp">
                                <div class="gi-hover">
                                    <a href="img/gallery/gallery-5.jpg" class="image-popup"><i class="fa fa-search-plus"></i></a>
                                    <a href="#"><i class="fa fa-chain"></i></a>
                                    <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mix gym crossfit">
                        <div class="gallery-item">
                            <img src="img/gallery/gallery-6.jpg" alt=""/>
                            <div class="gi-hover-warp">
                                <div class="gi-hover">
                                    <a href="img/gallery/gallery-6.jpg" class="image-popup"><i class="fa fa-search-plus"></i></a>
                                    <a href="#"><i class="fa fa-chain"></i></a>
                                    <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mix workout">
                        <div class="gallery-item">
                            <img src="img/gallery/gallery-7.jpg" alt=""/>
                            <div class="gi-hover-warp">
                                <div class="gi-hover">
                                    <a href="img/gallery/gallery-7.jpg" class="image-popup"><i class="fa fa-search-plus"></i></a>
                                    <a href="#"><i class="fa fa-chain"></i></a>
                                    <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mix crossfit gym">
                        <div class="gallery-item">
                            <img src="img/gallery/gallery-8.jpg" alt=""/>
                            <div class="gi-hover-warp">
                                <div class="gi-hover">
                                    <a href="img/gallery/gallery-8.jpg" class="image-popup"><i class="fa fa-search-plus"></i></a>
                                    <a href="#"><i class="fa fa-chain"></i></a>
                                    <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mix crossfit gym workout">
                        <div class="gallery-item">
                            <img src="img/gallery/gallery-9.jpg" alt=""/>
                            <div class="gi-hover-warp">
                                <div class="gi-hover">
                                    <a href="img/gallery/gallery-9.jpg" class="image-popup"><i class="fa fa-search-plus"></i></a>
                                    <a href="#"><i class="fa fa-chain"></i></a>
                                    <h6>Time to Try a Bodyweight Workout <span>Run, Walk, Swimming</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

}

export default Gallery;