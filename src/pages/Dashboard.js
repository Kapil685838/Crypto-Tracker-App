import React, { useEffect, useState } from 'react';
import TabsComponent from '../components/Dashboard/Tabs'
import SearchComponent from '../components/Dashboard/Search/search';
import PaginationComponent from '../components/Dashboard/Pagination/pagination';
import { get100Coins } from '../functions/get100Coins';
import Loader from "../components/Common/Loader/loader";
import TopButton from '../components/Common/BackToTop/topButton';

function DashboardPage() {
  const [loading, setLoading] = useState(false);
  const [coins, setcoins] = useState([]);
  const [search, setSearch] = useState('')
  const [pageNumber, setPageNumber] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);


  const handlePageChange = (event, value) => {
    setPageNumber(value);
    var startingIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(startingIndex, startingIndex + 10));
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  var filterCoin = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const data = await get100Coins();
    if (data) {
      setcoins(data);
      setPaginatedCoins(data.slice(0, 10));  
      setLoading(false);
    }
  };
  return (
    <>
      <TopButton />
      {loading ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          <SearchComponent search={search} onChange={onChange} />
          <TabsComponent
            coins={search ? filterCoin : paginatedCoins}
            setSearch={setSearch}
          />
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
}

export default DashboardPage;