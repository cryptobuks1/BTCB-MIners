import React, { useState } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import bitcointransparent from '../src/folfer/swap/bitcoinminner.png'
import bsw from '../src/folder1/swap/bsw.png'
import preview from '../src/folder2/swap/preview.png'
import CARDANO from '../src/folder4/swap/CARDANO.png'
import REX from '../src/folder3/swap/REX.png'
// import bitcointransparent from '../src/folder1/swap/bitcoinminner.png'
// import bitcointransparent from '../src/folder1/swap/bitcoinminner.png'
import './sidebars.css';

function Navbarr() {
    const [toggle, setToggle] = useState(false)

    let history = useHistory();

    function home() {
        history.push("/");
    }

    function Packagetwo() {
        history.push("/Packagetwo");
    }

    function Packagethree() {
        history.push("/Packagethree");
    }

    function Packagefour() {
        history.push("/Packagefour");
    }

    function Packagefive() {
        history.push("/Packagefive");
    }

    function help() {
        // history.push("/");
        try {
            document.getElementById('contacts').scrollIntoView();
            // window.open("https://arbitech-solutions.business.site/", '_blank');
            // window.open("https://arbitech-solutions.business.site/")
        } catch (error) {
            console.log("Error while connecting metamask", error);
            // alert("Error while connecting metamask");
        }
    }
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <SideNav
            onSelect={(selected) => {
                // Add your code here
            }}
            style={{
                position: "fixed",
                backgroundColor: "#222",
            }}
            className="controlNav"
        >
            <SideNav.Toggle onClick={handleToggle} />
            <div id={toggle ? "show" : "hide"} className="toggleDiv">
                <img src={bitcointransparent} width="40px" style={{
                    padding: "0",
                    marginRight: "5px",
                    marginTop: "15px"
                }} onClick={home} />
                <img src={bsw} width="40px" style={{
                    padding: "0",
                    marginRight: "5px",
                    marginTop: "15px"
                }} onClick={Packagetwo} />
                <img src={preview} width="40px" style={{
                    padding: "0",
                    marginRight: "5px",
                    marginTop: "15px"
                }} onClick={Packagethree} />
                <img src={REX} width="40px" style={{
                    padding: "0",
                    marginRight: "5px",
                    marginTop: "15px"
                }} onClick={Packagefour} />
                <img src={CARDANO} width="40px" style={{
                    padding: "0",
                    marginRight: "5px",
                    marginTop: "15px"
                }} onClick={Packagefive} />
            </div>
            <SideNav.Nav defaultSelected="home" className="navLinks">
                <NavItem eventKey="home" onClick={home} >
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        <img src={bitcointransparent} width="38px" style={{
                            padding: "0",
                            margin: "0"
                        }} />
                    </NavIcon>
                    <NavText >
                        {/* <li>
                            <Link to="/"> */}
                        BTCB Miners
                        {/* </Link>
                        </li> */}
                    </NavText>
                </NavItem>
                <NavItem eventKey="withoutLocking" onClick={Packagetwo}>
                    <NavIcon>
                        {/* <i className="fas fa-lock-open-alt" style={{ fontSize: '1.75em' }} /> */}
                        <img src={bsw} width="32px" style={{
                            padding: "0",
                            margin: "0"
                        }} />
                    </NavIcon>
                    <NavText>
                        {/* <li>
                            <Link to="/without"> */}
                        BSW Miners
                        {/* </Link>
                        </li> */}
                    </NavText>
                </NavItem>
                <NavItem eventKey="help" onClick={Packagethree}>
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        {/* <i class="far fa-question-circle" style={{ fontSize: '1.9em' }} /> */}
                        {/* <i class="fab fa-rocketchat" style={{ fontSize: '1.9em' }}></i> */}
                        <img src={preview} width="40px" style={{
                            padding: "0",
                            margin: "0"
                        }} />
                    </NavIcon>
                    <NavText >
                        {/* <li>
                            <Link to="/"> */}
                        XRP Miners
                        {/* </Link>
                        </li> */}
                    </NavText>
                </NavItem>
                <NavItem eventKey="Packagefour" onClick={Packagefour}>
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        {/* <i class="far fa-question-circle" style={{ fontSize: '1.9em' }} /> */}
                        {/* <i class="fal fa-box-open" style={{ fontSize: '1.9em' }}></i> */}
                        <img src={REX} width="35px" style={{
                            padding: "0",
                            margin: "0"
                        }} />

                    </NavIcon>
                    <NavText >
                        {/* <li>
                            <Link to="/"> */}
                        Rex Miners
                        {/* </Link>
                        </li> */}
                    </NavText>
                </NavItem>
                <NavItem eventKey="Packagefive" onClick={Packagefive}>
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /> */}
                        {/* <i class="far fa-question-circle" style={{ fontSize: '1.9em' }} /> */}
                        {/* <i class="fal fa-box-open" style={{ fontSize: '1.9em' }}></i> */}
                        <img src={CARDANO} width="40px" style={{
                            padding: "0",
                            margin: "0"
                        }} />
                    </NavIcon>
                    <NavText >
                        {/* <li>
                            <Link to="/"> */}
                        ADA Miners
                        {/* </Link>
                        </li> */}
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>

    );
}
export default Navbarr;




