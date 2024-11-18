import { GetServerSideProps } from 'next';
import Navbar from '../../../../components/Navbar';
import Gallery from '../../../../components/Gallery';
import PropertySection from '../../../../components/PropertySection';
import Head from 'next/head';

interface Room {
  roomTitle: string;
  bedroomCount: number;
  roomImage: string[];
}

interface Hotel {
  title: string;
  description: string;
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
  amenities: string[];
  address: string;
  latitude: number;
  longitude: number;
  rooms: Room[];
  images: string[];
}

interface HotelPageProps {
  hotel: Hotel | null;
  error: string | null;
}

const HotelPage = ({ hotel, error }: HotelPageProps) => {
  if (error) return <p>{error}</p>;
  if (!hotel) return <p>Hotel not found</p>;

  return (
    <div>
      <Head>
        <title>{hotel.title} - Your Hotel Guide</title>
        <meta name="description" content={hotel.description} />
      </Head>
      <Navbar />
      <Gallery 
        title={hotel.title}
        description={hotel.description}
        images={hotel.images}
        address={hotel.address} 
      />
      <PropertySection
        title={hotel.title}
        description={hotel.description}
        guestCount={hotel.guestCount}
        bedroomCount={hotel.bedroomCount}
        bathroomCount={hotel.bathroomCount}
        amenities={hotel.amenities}
        address={hotel.address}
        latitude={hotel.latitude}
        longitude={hotel.longitude}
        rooms={hotel.rooms}
      />
    </div>
  );
};

// Use getServerSideProps to fetch hotel data from the API
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params!;
  let hotel = null;
  let error = null;

  try {
    const response = await fetch(`http://localhost:3002/api/hotel/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch hotel data');
    }
    hotel = await response.json();
  } catch (err) {
    // Instead of passing the entire error object, pass just the error message
    error = (err instanceof Error) ? err.message : 'Failed to fetch hotel data';
  }

  return {
    props: {
      hotel,
      error,
    },
  };
};

export default HotelPage;