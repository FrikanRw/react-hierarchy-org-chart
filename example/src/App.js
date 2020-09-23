import React, {useEffect, useState} from 'react'
import * as d3 from 'd3';
import { OrganisationalChart } from 'react-org-chart'
import 'react-org-chart/dist/index.css'

const App = () => {
const [state, setstate] = useState(null)
  useEffect(() => {
    d3.json(
      'https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json',
    ).then(data => {
      setstate(data);
    });
  }, []);


  return <OrganisationalChart 
  
  data={state}
  onNodeClick={node=>console.log(node)} />
}

export default App
