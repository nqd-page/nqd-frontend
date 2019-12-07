import React, { useState, useEffect } from 'react';
import { enquireScreen } from 'enquire-js';
//import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TweenOne from 'rc-tween-one'
import QueueAnim from 'rc-queue-anim';
import { Button, Icon } from 'antd';
import './landing-page.scss'
import image from '../../assets/images/sample.jpg';
import logo from '../../assets/images/board.png';
const LandingPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        enquireScreen(b => {
            setIsMobile(b);
        });
    }, []);

    return (
        <HelmetProvider>
            <React.Fragment>
                <Helmet>
                    <title>NQD Community</title>
                </Helmet>
                <div className="banner-wrapper">
                    {isMobile && (
                        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
                            <div className="banner-image">
                                <img alt="banner" src={image} width="100%" />
                            </div>
                        </TweenOne>
                    )}
                    <QueueAnim
                        className="banner-title-wrapper"
                        type={isMobile ? "bottom" : "top"}
                    >
                        {/* TODO: LOGO HERE */}
                        <img alt="logo" src={logo} style={{ maxWidth: "300px" }} />
                        <p><strong>Community of NQDer</strong></p>
                        <div key="button" className="button-wrapper">
                            <a>
                                <Button className="btn-landing" size="large" type="primary" shape="round">
                                    <Icon type="mail" />
                                    Send Confession
                            </Button>
                            </a>
                            <a>
                                <Button className="btn-landing" size="large" type="dashed" shape="round">
                                    <Icon type="home" />
                                    HomePage
                            </Button>
                            </a>
                        </div>
                    </QueueAnim>
                    {!isMobile && (
                        <TweenOne animation={{ opacity: 1 }} className="banner-image-wrapper">
                            <div className="banner-image">
                                <img alt="banner" src={image} width="100%" />
                            </div>
                        </TweenOne>
                    )}
                </div>

            </React.Fragment>
        </HelmetProvider>
    )
}

export default LandingPage;