import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import OrganizationalChart from 'react-hierarchy-org-chart'
import 'react-hierarchy-org-chart/dist/index.css'

const App = () => {
  const [state, setstate] = useState(null)
  const d3Container = useRef(null)
  useEffect(() => {
    d3.json(
      'https://gist.githubusercontent.com/bumbeishvili/dc0d47bc95ef359fdc75b63cd65edaf2/raw/c33a3a1ef4ba927e3e92b81600c8c6ada345c64b/orgChart.json'
    ).then((data) => {
      setstate(data)
    })
  }, [])

  return (
    <OrganizationalChart
      data={state}
      ref={d3Container}
      onNodeClick={(node) => console.log(node)}
    />
  )
}

export default App
