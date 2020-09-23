import React, { useLayoutEffect, useRef, useState } from 'react'
import TreeChart from './chartHelper/index'
import styles from './styles.module.css'

export const OrganisationalChart = ({ data, onNodeClick }) => {
  const d3Container = useRef(null)
  const [chart, setChart] = useState(null)

  useLayoutEffect(() => {
    if (data && d3Container.current) {
      let newChart
      if (!chart) {
        newChart = new TreeChart()
      }

      newChart
        .container(d3Container.current)
        .data(data)
        .svgWidth(500)
        .svgHeight(500)
        .initialZoom(0.4)
        .onNodeClick((d) => {
          console.log(d + ' node clicked')
          onNodeClick(d)
        })
        .render()
      setChart(newChart)
    }
  }, [data, d3Container.current])
  if (chart) {
    console.log(chart)
    // chart.locate('O-917')
  }
  return (
    <div>
      <div ref={d3Container} />
      <button onClick={() => chart.locate('O-917')}>Locate</button>
    </div>
  )
}
