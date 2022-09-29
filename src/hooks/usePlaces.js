import { useStaticQuery, graphql } from 'gatsby';

export default function usePlaces(){

    const data = useStaticQuery(graphql`
    query {
      allPlaces {
        nodes {
          id
          address
          alias
          city
          latitude
          longitude
          name
          postal
          title
          service_ids
          state {
            name
          }
        }
      }
    }
  `)
  
  const placesData = data.allPlaces.nodes.map(node => {
    const { 
      id, 
      address,
      alias,
      city,
      latitude,
      longitude,
      name,
      postal,
      service_ids,
      title  
    } = node;
    return {
      id,
      alias,
      name,
      title,
      postal,
      address,
      city,
      coordinates: [longitude, latitude],
      latitude,
      longitude,
      service_ids
    }
  });
  return {
    placesData
  }
}