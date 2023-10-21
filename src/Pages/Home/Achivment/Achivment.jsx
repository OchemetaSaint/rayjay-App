import React from 'react'
import "./Achivment.css"
import { ImCheckmark } from "react-icons/im";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import Shape1 from "../../../assets/Shape1.png"
import Worker from "../../../assets/Worker.jpg"
import Worker2 from "../../../assets/Worker2.jpg"
import Worker3 from "../../../assets/Worker3.jpg"

export const Achivment = () => {



    
    return (
        <section className='Achivment'>
            <main className='Achivment-background'></main>
            <div className='Achivment-backgroundposition'>
                <div className='Achivment-title'>
                    <h2>CORE VALUES</h2>
                </div>
                <div className='Achivment-text'>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more- established fact that a reader will be distracted by
                    </p>
                </div>
                <div className='Achivment-list'>
                    <div className='mark'>
                        <ImCheckmark size={20} color='yellow' /> <p> many variations of passages majority suffered Duskam alteration of Lorem</p>
                    </div>
                    <div className='mark'>
                        <ImCheckmark size={20} color='yellow' /> <p> many variations of passages majority suffered Duskam alteration of Lorem</p>
                    </div><div className='mark'>
                        <ImCheckmark size={20} color='yellow' /> <p> many variations of passages majority suffered Duskam alteration of Lorem</p>
                    </div>

                </div>
                <div className='Achivment-wins'>
                    <div className='Achivment-winscontainers'>
                        <h1>131</h1>
                        <h6>AWARD WIN</h6>
                    </div>
                    <div className='Achivment-winscontainers'><h1>131</h1>
                        <h6>AWARD WIN</h6></div>
                    <div className='Achivment-winscontainers'><h1>131</h1>
                        <h6>AWARD WIN</h6></div>
                </div>
            </div>
            <header className='famous'>
                <div className='Service-titlewhat'>
                    <h3>Our Most Active</h3>
                    <h3>Team Member</h3>
                </div>


                <div className='Service-titleimage'>
                    <img src={Shape1} alt="share" />
                </div>
                <div className='Service-titletext'>
                    <p>
                    Rayjay Multinational Company Limited is dedicated to becoming a global leader in services. We prioritize excellence by employing top-notch equipment and a highly trained crew. With local technical support, we ensure minimal downtime and conduct routine maintenance.

                    </p></div>
            </header>

            <section className='worker'>
                <section className='worker-wrapper'>
                    <article className='worker-boxes'>
                        <div className='worker-image'>
                            <img src={Worker} alt="worker" />
                            <div className='worker-imagehover'>
                                <main className='social-boxes'><BiLogoFacebook size={30} color='white' /></main>
                                <main className='social-boxes'><BiLogoTwitter size={27} color='white' /></main>
                                <main className='social-boxes'>
                                    <main className='social-boxes'><BiLogoInstagram size={27} color='white' /></main>
                                </main>
                            </div>
                        </div>
                        <div className='worker-text'>
                            <h1>Sara Anderson</h1>
                            <p>Engineer</p>
                        </div>
                    </article>

                    <article className='worker-boxes'>
                        <div className='worker-image'>
                            <img src={Worker2} alt="worker" />
                            <div className='worker-imagehover'>
                                <main className='social-boxes'><BiLogoFacebook size={30} color='white' /></main>
                                <main className='social-boxes'><BiLogoTwitter size={27} color='white' /></main>
                                <main className='social-boxes'>
                                    <main className='social-boxes'><BiLogoInstagram size={27} color='white' /></main>
                                </main>
                            </div>
                        </div>
                        <div className='worker-text'>
                            <h1>Sara Anderson</h1>
                            <p>Engineer</p>
                        </div>
                    </article>

                    <article className='worker-boxes'>
                        <div className='worker-image'>
                            <img src={Worker3} alt="worker" />
                            <div className='worker-imagehover'>
                                <main className='social-boxes'><BiLogoFacebook size={30} color='white' /></main>
                                <main className='social-boxes'><BiLogoTwitter size={27} color='white' /></main>
                                <main className='social-boxes'>
                                    <main className='social-boxes'><BiLogoInstagram size={27} color='white' /></main>
                                </main>
                            </div>
                        </div>
                        <div className='worker-text'>
                            <h1>Sara Anderson</h1>
                            <p>Engineer</p>

                        </div>
                    </article>
                </section>
            </section>

        </section>

    )
}
