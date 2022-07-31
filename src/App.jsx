import { useEffect, useState } from 'react'
import "./App.css"

const App = () => {

  const [stateData, setData] = useState([]);

  const getCovidData = async ()=>
  {
    const  result =  await fetch("https://data.covid19india.org/data.json");
    const actualData = await result.json();

    setData(actualData.statewise);
  }

  useEffect(()=>
  {
    getCovidData();
  },[])



  return (
    <div className="App">
    <div className="container">
  
      <table>
  
        <thead>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Updated</th>
          </tr>
        </thead>
  
  
  
        <tbody>
          {
            stateData.map((element,ind)=>{
              if(ind!=0 && element.state!="State Unassigned")
              return( 
                <tr>
                  <td>{element.state}</td>
                  <td>{element.confirmed}</td>
                  <td className='death'>{element.deaths}</td>
                  <td>{element.active}</td>
                  <td>{element.recovered}</td>
                  <td>{element.lastupdatedtime}</td>
              </tr>
              )
            })
          }
        </tbody>
  </table>

    </div>
     </div>
  )
}

export default App