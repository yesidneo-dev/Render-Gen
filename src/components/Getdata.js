import {useEffect,useState} from 'react';
import Coins from './Coins';
import { Pagination } from './Pagination';

const Getdata = () => {
   
    const [datai, setDatai] = useState([]);  
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] =useState(1)
    const [coinPerpage, setCoinPerpage] = useState(6)

    useEffect(()=>{
        const getComments = async () => {
           const res = await fetch(
            /* `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false` */
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`  );
           const data = await res.json();
           setDatai(data);
           console.log(data);
        };
        getComments();
     },[]);

//get current coins
     console.log(datai);
     const indexOfLast = currentPage * coinPerpage;
     const indexOfFirst = indexOfLast - coinPerpage;
     const CurrentCoins = datai.slice(indexOfFirst, indexOfLast);

     console.log(CurrentCoins);
     console.log(indexOfLast);
     console.log(coinPerpage);
     console.log(indexOfFirst);
     console.log(loading);

     // change Page   
     const paginate = (pageNumber) => setCurrentPage (pageNumber);
      
     return (
     <div className="wrapper-grid"> 
        <Coins dat={CurrentCoins} loading={loading}/>  
        <Pagination setCoinPerpage={setCoinPerpage} coinPerpage={coinPerpage} CurrentCoins={CurrentCoins} paginate={paginate}totalCoins={datai.length}/>
     </div>
     );
};

export default Getdata;
