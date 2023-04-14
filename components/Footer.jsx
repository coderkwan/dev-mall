import React from "react";

function Footer() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                minHeight: 100,
                marginTop: 60,
                paddingTop: 30,
                borderTop: "1px solid black",
            }}
        >
            <p>Dev-mall &copy; 2023</p>
            <p>
                Made by{" "}
                <a href="https://kwanele.netlify.app" target="blank">
                    Kwanele Gamedze
                </a>
            </p>
        </div>
    );
}

export default Footer;
