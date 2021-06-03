import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';



export default class Map extends Component {
    static defaultProps = {
        center: {
          lat: 49.44039063,
          lng: 26.98507458
        },
        zoom: 15,
      };
    
    render(){
        const Marker = ({ text }) => (
            <img className='map-marker' src={text}></img>
        )
        return(
            <div className='contacts-map' id='map'>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <Marker 
                              lat={49.44039063} 
                              lng={26.98507458} 
                              text={'img/map-title.png'}
                            //   animation={window.google.maps.Animation.BOUNCE}
                    />
                </GoogleMapReact>

            </div>
        )
    }
}
