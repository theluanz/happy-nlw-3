import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map,TileLayer} from 'react-leaflet';
import '../styles/pages/orphaneges-map.css';
import 'leaflet/dist/leaflet.css';


function OrphanagesMap() {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um Orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Salto Veloso</strong>
                    <span>Santa Catarina</span>
                    </footer>
            </aside>
            <Map
                center={[-26.90567, -51.40612]}
                zoom={16}
                style={{width:'100%', height:'100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>
            <Link to="#" className="create-orphanages">
                <FiPlus size={32} color="FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;