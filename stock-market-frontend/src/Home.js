// src/Home.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Ensure you have styles for aesthetics

const Home = () => {
    const navigate = useNavigate();

    const handleKnowMore = () => {
        navigate("/stocks"); // Navigate to the stocks page
    };

    return (
        <div className="home">
            <h1>Welcome to the Stock Market Knowledge Hub</h1>
            <p>
                The stock market is a collection of markets where stocks (shares of ownership in businesses) are bought and sold.
            </p>
            <h2>Understanding Investments</h2>
            <p>
                Investing involves committing money to an endeavor with the expectation of obtaining an additional income or profit.
            </p>
            <h2>Risks in the Stock Market</h2>
            <p>
                Investing in the stock market carries risks, including market risk, liquidity risk, and credit risk.
            </p>
            <h2>Money Management</h2>
            <p>
                Effective money management is key to successful investing.
            </p>
            <h2>Additional Information</h2>
            <p>
                The stock market can be volatile, and it's essential to stay informed about market trends and economic indicators. 
                Diversifying your portfolio can help mitigate risks and improve your chances of achieving your financial goals.
            </p>
            <p>
                Consider consulting with a financial advisor to tailor an investment strategy that aligns with your risk tolerance and investment objectives.
            </p>
            <button className="know-more-button" onClick={handleKnowMore}>Know More About Stocks</button>
        </div>
    );
};

export default Home;