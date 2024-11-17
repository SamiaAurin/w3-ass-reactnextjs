import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../../../components/Navbar";
import Gallery from "../../../../components/Gallery";
import PropertySection from '../../../../components/PropertySection'


const HotelPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [hotel, setHotel] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;  // Only fetch data if the slug is available
    
    const fetchHotelData = async () => {
      try {
        const response = await fetch(`http://localhost:3002/api/hotel/${slug}`);
        const data = await response.json();
        setHotel(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchHotelData();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar/>
      <Gallery 
        images={hotel?.images || "Loading..."}
      />
      <PropertySection
        title={hotel?.title || "Loading..."}
        description={hotel?.description || "Loading..."}
        guestCount={hotel?.guestCount || 0}
        bedroomCount={hotel?.bedroomCount || 0}
        bathroomCount={hotel?.bathroomCount || 0}
        amenities={hotel?.amenities || []}
        address={hotel?.address || "Loading..."}
        rooms={hotel?.rooms || []}
      />
    </div>
  );
};

export default HotelPage;
