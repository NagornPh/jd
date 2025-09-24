"use client";

import React, { useEffect } from "react";
import Header from '../../components/header';
import Footer from "../../components/footer";
import "../../styles/contests.css";
  
export default function Contests() {
    useEffect(() => {
        const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
        const targetDate = new Date("2024-12-30T11:00:00Z").getTime();

        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            document.getElementById("days")!.innerText = Math.floor(distance / day).toString();
            document.getElementById("hours")!.innerText = Math.floor((distance % day) / hour).toString();
            document.getElementById("minutes")!.innerText = Math.floor((distance % hour) / minute).toString();
            document.getElementById("seconds")!.innerText = Math.floor((distance % minute) / second).toString();

            if (distance < 0) {
                document.getElementById("countdown")!.innerHTML = "<h2>The contest has started!</h2>";
                clearInterval(x);
            }
        }, 1000);
        return () => clearInterval(x);
    }, []);

    return (
        <>
            <Header />
            <div className="main">
                <div className="aurora-container2">
                    <h1 className="aurora-text2">Contests</h1>
                </div>
                <p className="timezone">(Time is displayed as UTC+7 timezone)</p>
                <div className="main_2">
                    {/* opal_Inwza007x Annocument code */}
                    <div className="hero">
                        <div className="text-reveal-container">
                            <h1 className="Upcoming-Contest-text">Upcoming Contest</h1>
                            <h1 className="first-blinking-dot">.</h1>
                            <h1 className="second-blinking-dot">.</h1>
                            <h1 className="third-blinking-dot">.</h1>
                            <br />
                            {/* <div className="moving-frame">
                                <a href="https://juniordev.contest.codeforces.com/group/eScIVDG1u2/contests" target="_blank" rel="noopener noreferrer">
                                    <img className="poster-img" src="https://beta-jdev.vercel.app/Poster_2567NewYearContest.png" alt="Poster" />
                                </a>
                            </div>
                            <br />
                            <div className="countdown-container">
                                <div className="snowflake">❄</div>
                                <div className="snowflake">❄</div>
                                <div className="snowflake">❄</div>
                                <div className="snowflake">❄</div>
                                <div className="snowflake">❄</div>
                                <div className="snowflake">❄</div>
                                <div className="snowflake">❄</div>
                                <div className="snowflake">❄</div>
                                <div className="snowflake">❄</div>
                                <a href="https://juniordev.contest.codeforces.com/group/eScIVDG1u2/contests" target="_blank" rel="noopener noreferrer">
                                    <div className="text-near-timer">New Year Contest</div>
                                </a>
                                <div id="countdown">
                                    <ul>
                                        <li><span id="days"></span> days</li>
                                        <li><span id="hours"></span> Hours</li>
                                        <li><span id="minutes"></span> Minutes</li>
                                        <li><span id="seconds"></span> Seconds</li>
                                    </ul>
                                </div>
                            </div> */}
                            <h1>There Are No Upcoming Contests</h1>
                        </div>
                    </div>
                    {/* opal_Inwza007x Annocument code */}
                    <div className="cont">
                        <p style={{ fontSize: "30px", margin: "20px" , marginLeft: "80vh"}}>
                            Past Contests
                        </p>
                        <div className="container">
                            <div className="right-half">
                                    <div className="list2">
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/636212" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Junior Dev. 1 Year Anniversary Day 2 (2025)</b>
                                                    23/Sep/2025 18:00 - 24/Sep/2025 00:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/601593" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Junior Dev. 1 Year Anniversary Day 1 (2025)</b>
                                                    22/Sep/2025 18:00 - 23/Sep/2025 00:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/594469" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>PreTOI21 Day 2 (2025)</b>
                                                    04/May/2025 19:00 - 05/May/2025 00:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/594466" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>PreTOI21 Day 1 (2025)</b>
                                                    03/May/2025 19:00 - 04/May/2025 00:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/601601" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Junior Dev Songkran Contest Day 3 (2025)</b>
                                                    15/Apr/2025 18:00 - 16/Apr/2025 00:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/601600" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Junior Dev Songkran Contest Day 2 (2025)</b>
                                                    14/Apr/2025 18:00 - 23:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/589719" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Junior Dev Songkran Contest Day 1 (2025)</b>
                                                    13/Apr/2025 18:00 - 22:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/579287" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>April Fools Day Contest (2025)</b>
                                                    01/Apr/2025 00:00 - 02/Apr/2025 00:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/591792" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Pre-POSN2 Contest Day 2 (2025)</b>
                                                    16/Mar/2025 18:30 - 23:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/591788" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Pre-POSN2 Contest Day 1 (2025)</b>
                                                    15/Mar/2025 18:00 - 22:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/577918" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Junior Dev Valentine Contest 2025</b>
                                                    22/Feb/2025 16:00 - 23/Feb/2025 00:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/570964" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Junior Dev New Year Contest 2025</b>
                                                    30/Dec/2024 18:00 - 1/Jan/2025 00:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/560196" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Junior Dev Loy Krathong Contest 2024</b>
                                                    16/Nov/2024 19:00 - 23:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/553124" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Pre-POSN1 DAY2 (2024)</b>
                                                    9/Oct/2024 19:00 - 10/Oct/2024 00:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                        <a className="contest" href="https://codeforces.com/group/eScIVDG1u2/contest/553127" target="_blank" rel="noopener noreferrer">
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <div style={{ textAlign: 'center' }} className="flex flex-1 flex-col">
                                                    <b>Pre-POSN1 DAY1 (2024)</b>
                                                    8/Oct/2024 19:00 - 9/Oct/2024 00:00
                                                </div>
                                                <div>
                                                    <img className="platform" src="/codeforces.webp" alt="Codeforces" />
                                                </div>
                                            </div>
                                        </a>
                                        <br />
                                    </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
