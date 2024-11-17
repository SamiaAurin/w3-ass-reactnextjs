import React from "react";

interface Room {
  roomTitle: string;
  roomImage: string[];
}

interface PropertySectionProps {
  title: string;
  description: string;
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
  amenities: string[];
  address: string;
  rooms: Room[];
}

const PropertySection = ({
  title,
  description,
  guestCount,
  bedroomCount,
  bathroomCount,
  amenities,
  address,
  rooms,
}: PropertySectionProps) => {
  return (
    <div className="px-6 py-8">
      <nav className="tabs flex space-x-4 mb-6">
        <a href="#" className="tab text-blue-500 font-semibold">Overview</a>
        <a href="#" className="tab text-gray-500 hover:text-blue-500">Amenities</a>
        <a href="#" className="tab text-gray-500 hover:text-blue-500">Policies</a>
      </nav>
      <div className="content flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="left-column w-full md:w-2/3">
          <div className="title-section mb-6">
            <h6 className="text-sm font-semibold text-gray-500">Entire home</h6>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>    {/* The hotel title */}
            <div className="rating flex items-center space-x-2">
              <span className="rating-score text-xl font-semibold text-green-600">9.8</span>
              <span className="text-sm">Exceptional</span>
            </div>
            <div className="see-review mt-2">
              <a href="#" className="text-blue-500 hover:underline">See all 24 reviews</a>
            </div>
          </div>
          <div className="property-details">
            <div className="property-info flex space-x-6 mb-6">
              <div>🚪 {bedroomCount} bedrooms</div>
              <div>🚽 {bathroomCount} bathrooms</div>
              <div>🛏️ Sleeps {guestCount}</div>
              <div>📏 1155 sq ft</div>
            </div>
            <div className="amenities mb-6">
              <h3 className="text-xl font-semibold">Popular amenities</h3>
              <div className="amenities-grid grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                  {amenities.length > 0 ? (
                    amenities.map((amenity, index) => (
                      <div key={index}>{amenity}</div>
                    ))
                  ) : (
                    <div>No amenities available</div>
                  )}
              </div>
              <a href="#" className="text-blue-500 hover:underline mt-4">See all property amenities</a>
            </div>
          </div>
          { /* Explore Area Section Starts */}
          <div className="explore">
                    <h3>Explore the area</h3>
                    <div className="explore-container">
                        <div className="map">
                            <img src="images/map.webp" alt="Map" />
                            <div className="map-text">
                                {address}<br />
                                <a href="#" className="see-more">
                                  View in a map
                                </a>
                            </div>
                        </div>
                        <div className="explore-info">
                            <ul className="location-list">
                                <li className="location-item">
                                    <div>🚧 Auke Bay</div>
                                    <div>6 min drive</div>
                                </li>
                                <li className="location-item">
                                    <div>🏫 University of Alaska-Southeast</div>
                                    <div>10 min drive</div>
                                </li>
                                <li className="location-item">
                                    <div>⛳ Mendenhall Golf Course</div>
                                    <div>14 min drive</div>
                                </li>
                                <li className="location-item">
                                    <div>🛫 Juneau, AK (JNU-Juneau Intl.)</div>
                                    <div>14 min drive</div>
                                </li>
                            </ul>
                            <a href="#" className="see-more">See more about this area &rarr;</a>
                        </div>
                    </div>
               </div>
               
        </div>

        {/* Right Column */}
        <div className="right-column w-full md:w-1/3">
          <div className="membership bg-gray-100 p-4 rounded-md mb-6">
            <div className="membership-logo text-3xl text-blue-500">
              <i className="fa fa-user-plus"></i>
            </div>
            <div className="membership-text mt-2">
              <h4 className="text-lg font-semibold">Members get our best prices when signed in</h4>
              <button className="signin-btn bg-blue-500 text-white px-6 py-2 rounded-md mt-4 w-full">
                Sign in
              </button>
            </div>
          </div>
          <div className="booking-card bg-white p-6 rounded-md shadow-lg">
            <div className="price text-2xl font-bold">$134 <span className="text-sm text-gray-500">per night</span></div>
            <div className="free-cancellation text-sm text-gray-500 mt-2">Free cancellation <i className="fa fa-info-circle"></i></div>
            <div className="available text-green-500 mt-2">
              <i className="fa-regular fa-circle-check"></i> Your dates are available
            </div>
            <div className="date-select flex space-x-4 mt-4">
              <div className="date-box flex-1">
                <div className="text-sm font-semibold"><i className="fa fa-calendar"></i></div>
                <div className="text-xs">Start date</div>
                <div>Nov 18</div>
              </div>
              <div className="date-box flex-1">
                <div className="text-sm font-semibold"><i className="fa fa-calendar"></i></div>
                <div className="text-xs">End date</div>
                <div>Nov 20</div>
              </div>
            </div>
            <div className="total text-lg mt-6">
              <div>Total <span className="text-sm text-gray-500">Total includes fees, not tax</span></div>
              <div>$543 <a href="#" className="price-details text-blue-500">Price details</a></div>
            </div>
            <a href="#" className="book-now bg-blue-500 text-white py-2 px-4 rounded mt-4 block w-full text-center">Book now</a>
            <div className="note text-sm mt-2 text-gray-500">You will not be charged yet</div>
          </div>
        </div>
      </div>
      <div className="middle-section">
        {/* <!-- RoomsBeds, About, Amenities --> */}
        <div className="rooms-beds">
            <h3>Rooms & beds</h3>
            <div className="bedrooms">
                <div className="bedroom-info">
                    <h4>2 bedrooms <span> (sleeps 4)</span></h4>
                    <div className="bedroom-details">
                        <div className="room">
                            <h5>Bedroom 1</h5>
                            🛏️ <span>1 Queen Bed</span>
                        </div>
                        <div className="room">
                            <h5>Bedroom 2</h5>
                            🛏️ <span>1 Twin Bed</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <hr style={{ width: "50%" }} />
        
            <div className="bathroom">
                <h4>1 bathroom</h4>
                <span>Full Bathroom</span>
            </div>
          </div>
       </div>
    </div>
  );
};

export default PropertySection;
