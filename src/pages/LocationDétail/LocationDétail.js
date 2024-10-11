import React from 'react';
import { useParams } from 'react-router-dom';
import locations from '../../data/LocationsData.json';
import './LocationDétail.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Error404 from '../Erreur404/Erreur404';
import Carrousel from '../../components/Carrousel/Carrousel'
import Accordion from '../../components/Accordion/Accordion';
import Tags from '../../components/Tags/Tags';
import Rating from '../../components/Rating/Rating';
import Host from '../../components/Host/Host';

const LocationDetails = () => {
  const { id } = useParams();
  const location = locations.find(loc => loc.id === id);

  if (!location) {
    return <Error404></Error404>;
  }

  return (
    <div>
      <Header />
      <div className='location-pictures'>
        <Carrousel pictures={location.pictures} cover={location.cover} />
      </div>
      <div className='location-main'>
        <section className='location-info'>
          <div className='location-title-area'>
            <h1>{location.title}</h1>
            <p>{location.location}</p>
            <Tags tags={location.tags} />
          </div>
          <div className='location-host'>
            <div className='host'>
              <div className='two-line-name'>
                <span className='first-name'>{location.host.name.split(' ')[0]}</span>
                <span className='last-name'>{location.host.name.split(' ')[1]}</span>
              </div>
              <img src={location.host.picture} alt={location.host.name} />
            </div>
            <Rating rating={location.rating} />
          </div>
        </section>
        <section className='location-info-supp'>
          <Accordion title="Description" content={location.description} />
          <Accordion title="Équipements" content={location.equipments.join(', ')} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default LocationDetails;