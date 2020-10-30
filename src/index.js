import React, { useLayoutEffect, useState } from 'react'
import PropTypes from 'prop-types'
import TreeChart from './chartHelper/index'
import './styles.module.css'

const OrganizationalChart = React.forwardRef(({ data, onNodeClick }, ref) => {
  const d3Container = ref
  const [chart, setChart] = useState(null)
  const [id, setId] = useState('O-498')

  useLayoutEffect(() => {
    if (data && d3Container.current) {
      let newChart
      if (!chart) {
        newChart = new TreeChart()
      }

      newChart
        .container(d3Container.current)
        .data(data)
        .svgWidth(1000)
        .svgHeight(500)
        .initialZoom(0.4)
        .onNodeClick((d) => {
          onNodeClick(d)
        })
        .render()
      setChart(newChart)
    }
  }, [data, d3Container.current])

  return (
    <div>
      <div ref={d3Container} />
      <input
        value={id}
        onChange={(e) => {
          setId(`${e.target.value}`)
        }}
      />
      <button onClick={() => chart.locate(id)}>Locate</button>
    </div>
  )
})

OrganizationalChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      backgroundColor: PropTypes.shape({
        alpha: PropTypes.number,
        red: PropTypes.number,
        blue: PropTypes.number,
        green: PropTypes.number
      }),
      borderColor: PropTypes.shape({
        alpha: PropTypes.number,
        red: PropTypes.number,
        blue: PropTypes.number,
        green: PropTypes.number
      }),
      borderRadius: PropTypes.number,
      borderWidth: PropTypes.number,
      connectorLineColor: PropTypes.shape({
        alpha: PropTypes.number,
        red: PropTypes.number,
        blue: PropTypes.number,
        green: PropTypes.number
      }),
      connectorLineWidth: PropTypes.number,
      dashArray: PropTypes.string,
      directSubordinates: PropTypes.number,
      expanded: PropTypes.bool,
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      nodeIcon: PropTypes.shape({
        icon: PropTypes.string,
        size: PropTypes.number
      }),
      nodeId: PropTypes.string.isRequired,
      nodeImage: PropTypes.shape({
        borderColor: PropTypes.shape({
          alpha: PropTypes.number,
          red: PropTypes.number,
          blue: PropTypes.number,
          green: PropTypes.number
        }),
        borderWidth: PropTypes.number,
        centerLeftDistance: PropTypes.number,
        centerTopDistance: PropTypes.number,
        cornerShape: PropTypes.oneOf(['circle', 'rounded']),
        height: PropTypes.number,
        shadow: PropTypes.bool,
        url: PropTypes.string,
        width: PropTypes.number
      }),
      parentNodeId: PropTypes.string,
      template: PropTypes.string,
      totalSubordinates: PropTypes.number,
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ).isRequired,
  /**
   * A trigger to do a custom action when a node is clicked on
   */
  onNodeClick: PropTypes.func
}

export default OrganizationalChart
