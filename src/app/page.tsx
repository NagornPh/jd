import React from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/home_styles.css"

export default function Home() {
    return (
        <>
            <Header />
            <div className="hero">
                <div className="logo">
                    <img src = "https://beta-jdev.vercel.app/logo.png" alt="logo-JDev" />
                </div>
                <h1 className="logo_name">Junior Dev</h1>
                <p>Junior Dev is Pretty SUS.<br />AMOGUS69 i dont know what to type xD.</p>
            </div>
            <div className="button-container">
                <button className="custom-button">
                    <Link href="/contests">
                        View all competitions
                    </Link>
                </button>
            </div>
            <br />
            <Footer />
        </>
    );
}

// import React from "react";
// import Link from "next/link";
// import Header from "../components/header";
// import Footer from "../components/footer";
// import "../styles/home.css"

// export default function Home() {
//     return (
//         <>
//             <Header/>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <div className = "main">
//                 <div className = "title"><h2>About</h2></div>
//                 <center style = {{fontSize: "30px", margin: "30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</center>
//                 <p style={{color:"black", fontSize:"16px"}}>opal_Inwza007x was here</p>
//                 <p><Link className="btn-black" href="/contests">View past competetions</Link></p>
//             </div>
//             <Footer />
//         </>
//     );
// }
