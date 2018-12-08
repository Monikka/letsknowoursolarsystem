import React from 'react';
import ShowcaseButton from '../components/ShowcaseButton';
import {Treemap} from 'react-vis';

const MODE = [
    'circlePack',
    'partition',
    'partition-pivot',
    'squarify',
    'resquarify',
    'slice',
    'dice',
    'slicedice',
    'binary'
  ];
  
  const STYLES = {
    SVG: {
      stroke: '#ddd',
      strokeWidth: '0.25',
      strokeOpacity: 0.5
    },
    DOM: {
      border: 'thin solid #ddd'
    }
  };

const myData = {
    "title": "Jupiter",
    "size": 14280,
    "color": "#E1F5FE",
    "children": [
     {
      "title": "Saturn",
      "size": 12066,
      "color": "#B3E5FC",
      "children": [
       {
         "title": "Uranus",
         "size": 5111,
         "color": "#81D4FA",
         "children": [
           {
            "title": "Nepture",
            "size": 4952,
            "color": "#4FC3F7",
            "children": [
              {"title": "Mars", "size": 671, "color": "#29B6F6"},
              {"title": "Earth", "size": 1275, "color": "#039BE5"},
              {"title": "Venus", "size": 1210, "color": "#0277BD"},
              {"title": "Mercury", "size": 487.4, "color": "#01579B"}
            ]
          }

         ]
        }
      ]
     }
    ]
   }


   const myData2 = {
    "title": "",
    "color": "#E1F5FE",
    "children": [
    {
    "title": "Jupiter",
    "size": 14280,
    "color": "#E1F5FE"},
     {
      "title": "Saturn",
      "size": 12066,
      "color": "#B3E5FC"},
       {
         "title": "Uranus",
         "size": 5111,
         "color": "#81D4FA"},
           {
            "title": "Nepture",
            "size": 4952,
            "color": "#4FC3F7"},
              {"title": "Mars", "size": 671, "color": "#29B6F6"},
              {"title": "Earth", "size": 1275, "color": "#039BE5"},
              {"title": "Venus", "size": 1210, "color": "#0277BD"},
              {"title": "Mercury", "size": 487.4, "color": "#01579B"}]}
    
  export default class TreeMap extends React.Component {
    state = {
        modeIndex: 0
      };

      updateModeIndex = newIndex => () => {
        const modeIndex = newIndex < 0 ? MODE.length - 1 : newIndex >= MODE.length ? 0 : newIndex;
        this.setState({modeIndex});
      };
      
    render() { 
        const {modeIndex} = this.state;

        return (
        <div className="centered-and-flexed">
        <div className="centered-and-flexed-controls">
          <ShowcaseButton
            onClick={this.updateModeIndex(0)}
            buttonContent={'Circle Pack'}
          />
          <ShowcaseButton
            onClick={this.updateModeIndex(1)}
            buttonContent={'Heat Map'}
          />
        </div>

            <Treemap

            {...{                
                animation: {
                damping: 9,
                stiffness: 300
                },
                className: 'nested-tree-example',
                data: myData2,
                mode: MODE[modeIndex],
                renderMode: 'SVG',
                colorType: 'literal',
                height: 800,
                width: 800,
                margin: 10
              }}
        />
        </div>
        );
    }
  }
