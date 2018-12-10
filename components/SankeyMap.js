import React from 'react';

import {Sankey} from 'react-vis';
import {Hint} from 'react-vis';


const BLURRED_LINK_OPACITY = 0.3;
const FOCUSED_LINK_OPACITY = 0.6;
const nodes = [{name: 'a'}, {name: 'b'}, {name: 'c'}];
const links = [
  {source: 0, target: 1, value: 5},
  {source: 0, target: 2, value: 20},
  {source: 1, target: 2, value: 20}
];

export default class SankeyMap extends React.Component {
  state = {
      activeLink: null
    };

   _renderHint() {
      const {activeLink} = this.state;
  
      // calculate center x,y position of link for positioning of hint
      const x =
        activeLink.source.x1 + (activeLink.target.x0 - activeLink.source.x1) / 2;
      const y = activeLink.y0 - (activeLink.y0 - activeLink.y1) / 2;
  
      const hintValue = {
        [`${activeLink.source.name} ➞ ${
          activeLink.target.name
        }`]: activeLink.value
      };
  
      return <Hint x={x} y={y} value={hintValue} />;
    }

    render() {
      const {activeLink} = this.state;

      return (
      <div>
      <Sankey
       nodes={nodes.map(d => ({...d}))}
       links={links.map((d, i) => ({
         ...d,
         opacity:
           activeLink && i === activeLink.index
             ? FOCUSED_LINK_OPACITY
             : BLURRED_LINK_OPACITY
       }))}
      width={1200}
      height={1000}
      // do not use voronoi in combination with link mouse over
      hasVoronoi={false}
      onLinkMouseOver={node => this.setState({activeLink: node})}
      onLinkMouseOut={() => this.setState({activeLink: null})}
      >
      {activeLink && this._renderHint()
      }
      </Sankey>
      </div>
      );
    }
  }