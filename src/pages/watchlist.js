import React, { useEffect, useState } from "react";
import Button from "../components/Common/Button";
import Loader from "../components/Common/Loader/loader";
import TabsComponent from "../components/Dashboard/Tabs";
import { get100Coins } from "../functions/get100Coins";

function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist")) || [];
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const allCoins = await get100Coins();
      if (coins) {
        setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
      }
      setLoading(false);
    }
    catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div>
      {loading || !coins ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {myWatchlist?.length === 0 || !coins ? (
            <div>
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the Watchlist
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a href="/dashboard">
                  <Button text={"Dashboard"} />
                </a>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <TabsComponent coins={myWatchlist} isWatchlistPage={true} />
            </div>
          )}

        </div>
      )}
    </div>

  );

}

export default WatchlistPage;