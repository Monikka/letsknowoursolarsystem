import React from 'react';

import {Sankey} from 'react-vis';

const BLURRED_LINK_OPACITY = 0.3;
const FOCUSED_LINK_OPACITY = 0.6;

const nodes = [{name: 'Mercury'},
                {name: 'Venus'},
                {name: 'Earth'},
                {name: 'Moon'},
                {name: 'Mars'},
                {name: 'Jupiter'},
                {name: 'Saturn'},
                {name: 'Uranus'},
                {name: 'Nepture'},
                {name: 'Sun'},
                {name: '1958'},{name: '1959'},
               {name: '1960'},{name: '1961'},{name: '1962'},{name: '1963'},{name: '1964'},
               {name: '1965'},{name: '1966'},{name: '1967'},{name: '1968'},{name: '1969'},
               {name: '1970'},{name: '1971'},{name: '1972'},{name: '1973'},{name: '1974'},
               {name: '1975'},{name: '1976'},{name: '1977'},{name: '1978'},{name: '1979'},
               {name: '1980'},{name: '1981'},{name: '1982'},{name: '1983'},{name: '1984'},
               {name: '1985'},{name: '1986'},{name: '1987'},{name: '1988'},{name: '1989'},
               {name: '1990'},{name: '1991'},{name: '1992'},{name: '1993'},{name: '1994'},
               {name: '1995'},{name: '1996'},{name: '1997'},{name: '1998'},{name: '1999'},
               {name: '2000'},{name: '2001'},{name: '2002'},{name: '2003'},{name: '2004'},
               {name: '2005'},{name: '2006'},{name: '2007'},{name: '2008'},{name: '2009'},
               {name: '2010'},{name: '2010'},{name: '2012'},{name: '2013'},{name: '2014'},
               {name: '2015'},{name: '2016'},{name: '2017'},{name: '2018'},{name: '2019'}
               ];
const links = [
  {source: 3, 	target: 10, 	value: 200},
  {source: 3, 	target: 10, 	value: 200},
  {source: 3, 	target: 10, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 11, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 3, 	target: 12, 	value: 200},
  {source: 9, 	target: 13, 	value: 200},
  {source: 2, 	target: 13, 	value: 200},
  {source: 2, 	target: 13, 	value: 200},
  {source: 3, 	target: 14, 	value: 200},
  {source: 3, 	target: 14, 	value: 200},
  {source: 3, 	target: 15, 	value: 200},
  {source: 3, 	target: 15, 	value: 200},
  {source: 2, 	target: 15, 	value: 200},
  {source: 2, 	target: 15, 	value: 200},
  {source: 1, 	target: 15, 	value: 200},
  {source: 2, 	target: 15, 	value: 200},
  {source: 3, 	target: 15, 	value: 200},
  {source: 2, 	target: 16, 	value: 200},
  {source: 2, 	target: 17, 	value: 200},
  {source: 3, 	target: 17, 	value: 200},
  {source: 3, 	target: 17, 	value: 200},
  {source: 3, 	target: 18, 	value: 200},
  {source: 3, 	target: 18, 	value: 200},
  {source: 2, 	target: 18, 	value: 200},
  {source: 4, 	target: 18, 	value: 200},
  {source: 2, 	target: 18, 	value: 200},
  {source: 9, 	target: 18, 	value: 200},
  {source: 3, 	target: 19, 	value: 200},
  {source: 3, 	target: 19, 	value: 200},
  {source: 2, 	target: 19, 	value: 200},
  {source: 3, 	target: 19, 	value: 200},
  {source: 9, 	target: 19, 	value: 200},
  {source: 3, 	target: 19, 	value: 200},
  {source: 3, 	target: 19, 	value: 200},
  {source: 3, 	target: 20, 	value: 200},
  {source: 1, 	target: 20, 	value: 200},
  {source: 3, 	target: 20, 	value: 200},
  {source: 3, 	target: 20, 	value: 200},
  {source: 3, 	target: 20, 	value: 200},
  {source: 2, 	target: 20, 	value: 200},
  {source: 9, 	target: 20, 	value: 200},
  {source: 3, 	target: 21, 	value: 200},
  {source: 9, 	target: 21, 	value: 200},
  {source: 2, 	target: 22, 	value: 200},
  {source: 4, 	target: 22, 	value: 200},
  {source: 4, 	target: 22, 	value: 200},
  {source: 2, 	target: 23, 	value: 200},
  {source: 1, 	target: 23, 	value: 200},
  {source: 3, 	target: 23, 	value: 200},
  {source: 3, 	target: 23, 	value: 200},
  {source: 3, 	target: 23, 	value: 200},
  {source: 2, 	target: 23, 	value: 200},
  {source: 2, 	target: 23, 	value: 200},
  {source: 2, 	target: 23, 	value: 200},
  {source: 3, 	target: 24, 	value: 200},
  {source: 3, 	target: 24, 	value: 200},
  {source: 4, 	target: 24, 	value: 200},
  {source: 4, 	target: 24, 	value: 200},
  {source: 4, 	target: 24, 	value: 200},
  {source: 4, 	target: 24, 	value: 200},
  {source: 4, 	target: 24, 	value: 200},
  {source: 2, 	target: 24, 	value: 200},
  {source: 2, 	target: 24, 	value: 200},
  {source: 2, 	target: 24, 	value: 200},
  {source: 2, 	target: 24, 	value: 200},
  {source: 1, 	target: 25, 	value: 200},
  {source: 3, 	target: 25, 	value: 200},
  {source: 2, 	target: 25, 	value: 200},
  {source: 5, 	target: 25, 	value: 200},
  {source: 9, 	target: 25, 	value: 200},
  {source: 3, 	target: 26, 	value: 200},
  {source: 4, 	target: 26, 	value: 200},
  {source: 4, 	target: 26, 	value: 200},
  {source: 4, 	target: 26, 	value: 200},
  {source: 4, 	target: 26, 	value: 200},
  {source: 9, 	target: 27, 	value: 200},
  {source: 3, 	target: 27, 	value: 200},
  {source: 3, 	target: 27, 	value: 200},
  {source: 2, 	target: 27, 	value: 200},
  {source: 1, 	target: 28, 	value: 200},
  {source: 1, 	target: 28, 	value: 200},
  {source: 4, 	target: 28, 	value: 200},
  {source: 4, 	target: 28, 	value: 200},
  {source: 2, 	target: 28, 	value: 200},
  {source: 9, 	target: 29, 	value: 200},
  {source: 3, 	target: 29, 	value: 200},
  {source: 2, 	target: 29, 	value: 200},
  {source: 2, 	target: 29, 	value: 200},
  {source: 9, 	target: 29, 	value: 200},
  {source: 2, 	target: 30, 	value: 200},
  {source: 2, 	target: 30, 	value: 200},
  {source: 1, 	target: 31, 	value: 200},
  {source: 1, 	target: 31, 	value: 200},
  {source: 1, 	target: 31, 	value: 200},
  {source: 1, 	target: 31, 	value: 200},
  {source: 2, 	target: 31, 	value: 200},
  {source: 2, 	target: 31, 	value: 200},
  {source: 2, 	target: 32, 	value: 200},
  {source: 2, 	target: 32, 	value: 200},
  {source: 5, 	target: 32, 	value: 200},
  {source: 2, 	target: 32, 	value: 200},
  {source: 9, 	target: 33, 	value: 200},
  {source: 2, 	target: 34, 	value: 200},
  {source: 1, 	target: 34, 	value: 200},
  {source: 1, 	target: 34, 	value: 200},
  {source: 2, 	target: 34, 	value: 200},
  {source: 1, 	target: 36, 	value: 200},
  {source: 1, 	target: 36, 	value: 200},
  {source: 2, 	target: 36, 	value: 200},
  {source: 2, 	target: 36, 	value: 200},
  {source: 2, 	target: 36, 	value: 200},
  {source: 2, 	target: 38, 	value: 200},
  {source: 2, 	target: 40, 	value: 200},
  {source: 4, 	target: 41, 	value: 200},
  {source: 4, 	target: 41, 	value: 200},
  {source: 1, 	target: 42, 	value: 200},
  {source: 8, 	target: 42, 	value: 200},
  {source: 2, 	target: 42, 	value: 200},
  {source: 2, 	target: 42, 	value: 200},
  {source: 2, 	target: 42, 	value: 200},
  {source: 9, 	target: 43, 	value: 200},
  {source: 3, 	target: 43, 	value: 200},
  {source: 2, 	target: 43, 	value: 200},
  {source: 2, 	target: 43, 	value: 200},
  {source: 9, 	target: 44, 	value: 200},
  {source: 2, 	target: 44, 	value: 200},
  {source: 4, 	target: 45, 	value: 200},
  {source: 2, 	target: 46, 	value: 200},
  {source: 3, 	target: 47, 	value: 200},
  {source: 2, 	target: 48, 	value: 200},
  {source: 2, 	target: 48, 	value: 200},
  {source: 9, 	target: 48, 	value: 200},
  {source: 4, 	target: 49, 	value: 200},
  {source: 4, 	target: 49, 	value: 200},
  {source: 4, 	target: 49, 	value: 200},
  {source: 2, 	target: 49, 	value: 200},
  {source: 2, 	target: 50, 	value: 200},
  {source: 2, 	target: 51, 	value: 200},
  {source: 3, 	target: 51, 	value: 200},
  {source: 4, 	target: 51, 	value: 200},
  {source: 4, 	target: 51, 	value: 200},
  {source: 2, 	target: 51, 	value: 200},
  {source: 4, 	target: 52, 	value: 200},
  {source: 4, 	target: 52, 	value: 200},
  {source: 2, 	target: 52, 	value: 200},
  {source: 2, 	target: 52, 	value: 200},
  {source: 2, 	target: 53, 	value: 200},
  {source: 2, 	target: 53, 	value: 200},
  {source: 9, 	target: 54, 	value: 200},
  {source: 2, 	target: 54, 	value: 200},
  {source: 4, 	target: 54, 	value: 200},
  {source: 2, 	target: 54, 	value: 200},
  {source: 2, 	target: 56, 	value: 200},
  {source: 3, 	target: 56, 	value: 200},
  {source: 4, 	target: 56, 	value: 200},
  {source: 4, 	target: 56, 	value: 200},
  {source: 2, 	target: 56, 	value: 200},
  {source: 0, 	target: 57, 	value: 200},
  {source: 2, 	target: 57, 	value: 200},
  {source: 2, 	target: 58, 	value: 200},
  {source: 4, 	target: 58, 	value: 200},
  {source: 2, 	target: 58, 	value: 200},
  {source: 1, 	target: 59, 	value: 200},
  {source: 2, 	target: 59, 	value: 200},
  {source: 2, 	target: 59, 	value: 200},
  {source: 4, 	target: 60, 	value: 200},
  {source: 3, 	target: 60, 	value: 200},
  {source: 3, 	target: 60, 	value: 200},
  {source: 2, 	target: 60, 	value: 200},
  {source: 2, 	target: 61, 	value: 200},
  {source: 2, 	target: 62, 	value: 200},
  {source: 2, 	target: 62, 	value: 200},
  {source: 2, 	target: 62, 	value: 200},
  {source: 2, 	target: 62, 	value: 200},
  {source: 3, 	target: 62, 	value: 200},
  {source: 2, 	target: 62, 	value: 200},
  {source: 1, 	target: 63, 	value: 200},
  {source: 1, 	target: 63, 	value: 200},
  {source: 3, 	target: 63, 	value: 200},
  {source: 5, 	target: 64, 	value: 200},
  {source: 4, 	target: 64, 	value: 200},
  {source: 2, 	target: 64, 	value: 200},
  {source: 2, 	target: 64, 	value: 200},
  {source: 2, 	target: 65, 	value: 200},
  {source: 4, 	target: 65, 	value: 200},
  {source: 2, 	target: 65, 	value: 200},
  {source: 2, 	target: 66, 	value: 200},
  {source: 2, 	target: 66, 	value: 200},
  {source: 2, 	target: 66, 	value: 200},
  {source: 2, 	target: 66, 	value: 200},
  {source: 2, 	target: 66, 	value: 200},
  {source: 2, 	target: 66, 	value: 200},
  {source: 2, 	target: 66, 	value: 200},
  {source: 2, 	target: 66, 	value: 200},
  {source: 4, 	target: 66, 	value: 200},
  {source: 4, 	target: 66, 	value: 200},
  {source: 2, 	target: 66, 	value: 200},
  {source: 2, 	target: 67, 	value: 200},
  {source: 2, 	target: 68, 	value: 200},
  {source: 4, 	target: 69, 	value: 200},
  {source: 2, 	target: 69, 	value: 200},
  {source: 2, 	target: 70, 	value: 200}
];
export default class Timeline extends React.Component {
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
          <div>
          {` Selected Node: ${
            activeLink
              ? `Info: ${activeLink.key}`
              : 'None'
          }`}
        </div>
        <Sankey
         nodes={nodes.map(d => ({...d}))}
         links={links.map((d, i) => ({
           ...d,
           nodePadding: 30,
           opacity:
             activeLink && i === activeLink.index
               ? FOCUSED_LINK_OPACITY
               : BLURRED_LINK_OPACITY
            }))}
        width={800}
        height={1200}
        // do not use voronoi in combination with link mouse over
        hasVoronoi={false}
        onLinkMouseOver={node => this.setState({activeLink: node})}
        onLinkMouseOut={() => this.setState({activeLink: null})}
        >
        
        </Sankey>
        </div>
        );
      }
    }