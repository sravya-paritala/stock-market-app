// src/App.js
/*
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Routes,Route,NavLink,} from "react-router-dom";
import "./App.css";

const Stocks = ({ addToWatchlist }) => {
	const [stocks, setStocks] = useState([]);

	useEffect(() => {
		// Fetch stock data from the backend
		fetch("http://localhost:5001/api/stocks")
			.then((res) => res.json())
			.then((data) => setStocks(data))
			.catch((error) => console.error("Error fetching stocks:", error));
	}, []);
	console.log(setStocks, "Stocksdata");

	const getRandomColor = () => {
		const colors = ["#FF0000", "#00FF00"]; // Red and Green
		return colors[Math.floor(Math.random() * colors.length)];
	};

	return (
		<div className="App">
			<h1>Stock Market MERN App</h1>
			<h2>Stocks</h2>
			<ul>
				{stocks.map((stock) => (
					<li key={stock.symbol}>
						{stock.company} ({stock.symbol}) -
						<span style={{ color: getRandomColor() }}>
							{" "}
							${stock.initial_price}
						</span>
						<button onClick={() => addToWatchlist(stock)}>
							Add to My Watchlist
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

const Watchlist = ({ watchlist }) => {
	const getRandomColor = () => {
		const colors = ["#FF0000", "#00FF00"]; // Red and Green
		return colors[Math.floor(Math.random() * colors.length)];
	};

	return (
		<div className="App">
			<h1>Stock Market MERN App</h1>
			<h2>My Watchlist</h2>
			<ul>
				{watchlist.map((stock) => (
					<li key={stock.symbol}>
						{stock.company} ({stock.symbol}) -
						<span style={{ color: getRandomColor() }}>
							{" "}
							${stock.initial_price}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};
function App() {
	const [watchlist, setWatchlist] = useState([]);

	const addToWatchlist = (stock) => {
		// Add stock to watchlist
		fetch("http://localhost:5001/api/watchlist", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(stock),
		})
			.then((res) => res.json())
			.then((data) => {
				// Show an alert with the message received from the server
				alert(data.message);
				setWatchlist([...watchlist, stock]);
			})
			.catch((error) =>
				console.error("Error adding to watchlist:", error)
			);
	};

	return (
		<Router>
			<nav>
				<NavLink to="/stocks">Stocks</NavLink>
				<NavLink to="/watchlist">Watchlist</NavLink>
			</nav>
			<Routes>
				<Route
					path="/stocks"
					element={<Stocks addToWatchlist={addToWatchlist} />}
				/>
				<Route
					path="/watchlist"
					element={<Watchlist watchlist={watchlist} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
*/


// src/App.js

// src/App.js
/*
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const Stocks = ({ addToWatchlist }) => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        // Fetch stock data from the backend
        fetch("http://localhost:5001/api/stocks")
            .then((res) => res.json())
            .then((data) => setStocks(data))
            .catch((error) => console.error("Error fetching stocks:", error));
    }, []);

    const getColorBasedOnPriceChange = (currentPrice, previousPrice) => {
        return currentPrice > previousPrice ? "#00FF00" : "#FF0000"; // Green for increase, red for decrease
    };

    return (
        <div className="App">
            <h1>Stock Market MERN App</h1>
            <h2>Available Stocks</h2>
            <ul>
                {stocks.map((stock) => (
                    <li key={stock.symbol}>
                        <div>
                            <strong>{stock.company}</strong> ({stock.symbol}) - 
                            <span style={{ color: getColorBasedOnPriceChange(stock.initial_price, stock.price_2007) }}>
                                {" "} ${stock.initial_price}
                            </span>
                        </div>
                        <button onClick={() => addToWatchlist(stock)}>
                            Add to My Watchlist
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Watchlist = ({ watchlist }) => {
    return (
        <div className="App">
            <h1>Stock Market MERN App</h1>
            <h2>My Watchlist</h2>
            <ul>
                {watchlist.map((stock) => (
                    <li key={stock.symbol}>
                        <div>
                            <strong>{stock.company}</strong> ({stock.symbol}) - 
                            <span style={{ color: "#000000" }}> 
                                {" "} ${stock.initial_price}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function App() {
    const [watchlist, setWatchlist] = useState([]);

    const addToWatchlist = (stock) => {
        // Add stock to watchlist
        fetch("http://localhost:5001/api/watchlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(stock),
        })
            .then((res) => res.json())
            .then((data) => {
                // Show an alert with the message received from the server
                alert(data.message);
                setWatchlist([...watchlist, stock]);
            })
            .catch((error) =>
                console.error("Error adding to watchlist:", error)
            );
    };

    return (
        <Router>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/stocks">Stocks</NavLink>
                <NavLink to="/watchlist">Watchlist</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/stocks" element={<Stocks addToWatchlist={addToWatchlist} />} />
                <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
            </Routes>
        </Router>
    );
}

export default App;
*/
// src/App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const Stocks = ({ addToWatchlist }) => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        // Fetch stock data from the backend
        fetch("https://stock-backend-gx1a.onrender.com/api/stocks")
            .then((res) => res.json())
            .then((data) => setStocks(data))
            .catch((error) => console.error("Error fetching stocks:", error));
    }, []);

    const getColorBasedOnPriceChange = (currentPrice, previousPrice) => {
        return currentPrice > previousPrice ? "#00FF00" : "#FF0000"; // Green for increase, red for decrease
    };

    return (
        <div className="App">
            <h1>Stock Market MERN App</h1>
            <h2>Available Stocks</h2>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Description</th>
                        <th>Initial Price</th>
                        <th>Price in 2002</th>
                        <th>Price in 2007</th>
                        <th>Symbol</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((stock) => (
                        <tr key={stock.symbol}>
                            <td>{stock.company}</td>
                            <td>{stock.description}</td>
                            <td style={{ color: getColorBasedOnPriceChange(stock.initial_price, stock.price_2007) }}>
                                ${stock.initial_price}
                            </td>
                            <td>${stock.price_2002}</td>
                            <td>${stock.price_2007}</td>
                            <td>{stock.symbol}</td>
                            <td>
                                <button onClick={() => addToWatchlist(stock)}>
                                    Add to My Watchlist
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const Watchlist = ({ watchlist }) => {
    return (
        <div className="App">
            <h1>Stock Market MERN App</h1>
            <h2>My Watchlist</h2>
            <ul>
                {watchlist.map((stock) => (
                    <li key={stock.symbol}>
                        <div>
                            <strong>{stock.company}</strong> ({stock.symbol}) - 
                            <span style={{ color: "#000000" }}> {/* Default color for watchlist */}
                                {" "} ${stock.initial_price}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

function App() {
    const [watchlist, setWatchlist] = useState([]);

    const addToWatchlist = (stock) => {
        // Add stock to watchlist
        fetch("https://stock-backend-gx1a.onrender.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(stock),
        })
            .then((res) => res.json())
            .then((data) => {
                // Show an alert with the message received from the server
                alert(data.message);
                setWatchlist([...watchlist, stock]);
            })
            .catch((error) =>
                console.error("Error adding to watchlist:", error)
            );
    };

    return (
        <Router>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/stocks">Stocks</NavLink>
                <NavLink to="/watchlist">Watchlist</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Add Home route */}
                <Route path="/stocks" element={<Stocks addToWatchlist={addToWatchlist} />} />
                <Route path="/watchlist" element={<Watchlist watchlist={watchlist} />} />
            </Routes>
        </Router>
    );
}

export default App;
