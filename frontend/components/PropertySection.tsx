import React from "react";

interface Room {
  roomTitle: string;
  bedroomCount: number;
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
  latitude: number;
  longitude: number;
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
  latitude,
  longitude,
  rooms,
}: PropertySectionProps) => {
  return (
    <div className="property-section px-6 py-8">
      <nav className="tabs">
              <a href="#" className="tab active">Overview</a>
              <a href="#" className="tab">Amenities</a>
              <a href="#" className="tab">Policies</a>
      </nav> 
      <div className="content flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="left-column w-full md:w-2/3">
          <div className="title-section mb-6">
            <h6 className="text-sm font-semibold text-gray-500">Entire Home</h6> {/* The hotel description */}
            <h1 className="text-3xl font-bold mb-2">{title}: {description}</h1>    {/* The hotel title */}
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
              <div>🚪 {bedroomCount} bedrooms</div>  {/* The hotel bedroomCount */}
              <div>🚽 {bathroomCount} bathrooms</div>  {/* The hotel bathroomCount */}
              <div>🛏️ Sleeps {guestCount}</div>   {/* The hotel guestCount */}
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
                  )}      {/* The hotel amenities */}
              </div>
              <a href="#" className="text-blue-500 hover:underline mt-4">See all property amenities</a>
            </div>
          </div>
          { /* Explore Area Section Starts */}
          <div className="explore">
                    <h3>Explore the area</h3>
                    <div className="explore-container">
                        <div className="map">
                            <img src="/images/map.webp" alt="Map" />
                            <div className="map-text">
                                {address}, {longitude}, {latitude}<br />  {/* The hotel address */}
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
            <div className="travelers">Travelers<br/>2 travelers</div>
                       {/*<!-- HTML for the modal Traveller-->*/ }
                        <div className="travel-modal" id="travel-modal">
                            <div className="modal-content">
                                <h2>Travelers</h2>
                                <div className="counter">
                                    <div className="counter-section">
                                        <label>Adults:</label>
                                        <div className="counter-controls">
                                            <i className="fas fa-plus" id="adults-increase"></i>
                                            <input type="number" id="adults" min="0"  value="2" />
                                            <i className="fas fa-minus" id="adults-decrease" ></i>
                                        </div>
                                    </div>
                                    <div className="counter-section">
                                        <label>Children<br />(Age: 0 to 17):</label>
                                        <div className="counter-controls">
                                            <i className="fas fa-plus" id="children-increase"></i>
                                            <input type="number" id="children" min="0" max="17" value="0" />
                                            <i className="fas fa-minus" id="children-decrease" ></i>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <input type="checkbox" id="travelWithPets" className="travelWithPets" />
                                    <label htmlFor="travelWithPets" className="travelWithPets-label">I am traveling with pets</label>
                                </div>
                                <button type="button" id="submitDoneTraveller">Done</button>
                            </div>
                        </div>
                        {/*<!-- Modal ends --> */}            
                    <div className="total">
                        <div>Total <br/><span className="small-text">Total includes fees, not tax</span></div>
                        <div>$543  <br/><a href="#" className="price-details">Price details</a></div>
                    </div>
              <a href="#" className="book-now bg-blue-500 text-white py-2 px-4 rounded mt-4 block w-full text-center">Book now</a>
            <div className="note text-sm mt-2 text-gray-500">You will not be charged yet</div>
          </div>
          <a href="#" className="contact-host">Contact host</a>
          <hr/>
          <div className="property-number"><strong>Property #</strong> 9838104ha</div>
        </div>
      </div>
      <div className="middle-section">
          {/* <!-- RoomsBeds, About, Amenities --> */}
          <div className="rooms-beds">
            <h3>Rooms & beds</h3>
            <div className="bedrooms">
              <div className="bedroom-info">
                <h4>
                  {rooms.length} {rooms.length > 1 ? "Bedrooms" : "Bedroom"} 
                  <span> (sleeps {guestCount}) </span>
                </h4>
                <div className="bedroom-details">
                  {rooms.map((room, index) => (
                    <div className="room" key={index}>
                      <h5>{room.roomTitle}</h5> {/* Room title dynamically fetched */}
                      🛏️ <span>{room.bedroomCount} {room.bedroomCount > 1 ? "Beds" : "Bed"}</span> {/* Bedroom count dynamically fetched */}
                    </div>
                  ))}
                </div>
              </div>
            </div>


        
            <hr style={{ width: "50%" }} />
            
            <div className="bathroom">
                <h4>{bathroomCount} bathroom</h4>
                <span>Full Bathroom</span>
            </div>
            <hr style={{ width: "50%" }} />
            <div className="spaces">
                <h3>Spaces</h3>
                <div className="spaces-list">
                    <div>🏖️ Deck or patio</div>
                    <div>🍽️ Kitchen</div>
                    <div>🌇 Balcony</div>
                    <div>🌻 Garden</div>
                </div>
                <a href="#">See all rooms and beds details</a>
            </div>
          </div>
          {/*<!-- About this Property -->*/}
          {/*<!-- About this Property Ends-->*/}
          <div className="amenities-section">
            <div><h2>Amenities</h2></div>
            <div className="amenities-grid">
                  {amenities.length > 0 ? (
                    amenities.map((amenity, index) => (
                      <div key={index}><span>{amenity}</span></div>
                    ))
                  ) : (
                    <div>No amenities available</div>
                  )}
                <a href="#" className="view-all">See all 34 amenities</a>
            </div>
          </div>
      </div>
      { /* Have a Que --> */}
      <div className="question-box">
        <h3>Have a question?</h3>
        <p>Get instant answers with AI powered search of property information and reviews.</p>
        <div className="search-container">
            <div className="search-bar">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Ask a question" />
            </div>
            <button className="search-button"><i className="fas fa-search"></i></button>
        </div>
        <div className="beta-label">
            <span>➕Beta</span>
        </div>
      </div>

      {/*<!-- Rules and Info --> */}
      <div className="rule-info">
        <div className="house-section house-rules">
            <div className="left-col">
                <h3>House Rules</h3>
            </div>
            <div className="right-col">
                <div className="checkin-checkout-info1">
                    <p>Check in after 3:00 PM</p>
                    <p>Minimum age to rent: 25</p>
                    <p>Check out before 10:00 AM</p>
                    <a href="#" className="see-more">See more</a>
                </div>
                <div className="checkin-checkout-info2">
                    <div className="icons">
                        👶 Children
                        <h6>Children allowed: ages 0-17</h6>
                    </div>
                    <div className="icons">
                        🐾 Pets
                        <h6>No pets allowed</h6>
                    </div>
                    <div className="icons">
                        🎊 Events
                        <h6>No events allowed</h6> 
                    </div>
                    <div className="icons">
                        🚭 Smoking 
                        <h6>Smoking is not permitted</h6>
                    </div>
                </div>
            </div>
        </div>
    
        <div className="section damage">
            <div className="left-col">
                <h3>Damage and Incidentals</h3>
            </div>
            <div className="right-col">
                <p>You will be responsible for any damage to the rental property caused by you or your party during your stay.</p>
            </div>
            
        </div>
    
        <div className="section cancellation">
            <div className="left-col">
                <h3>Cancellation</h3>
            </div>
           <div className="right-col">
            <div className="refund-policy">
               
                <div className="timeline-container">
                    <div className="timeline-item below">
                        <div className="circle"></div>
                        <p>Today</p>
                    </div>
                    <div className="timeline-item above">
                        <p>Full refund</p>
                    </div>
                    <div className="timeline-item below">
                        <div className="circle open"></div>
                        <p>Nov 4</p>
                    </div>
                    <div className="timeline-item above">
                        <p>No refund</p>
                    </div>
                    <div className="timeline-item below">
                        <div className="circle halfopen"></div>
                        <p>Check-in</p>
                    </div>
                </div>
            
              
                <div className="refund-details">
                    <div className="refund-item">
                        <div className="date">Before<br/>Nov 4</div>
                        <div className="description">
                            <b>Full refund</b><br/>
                            Cancel your reservation before Nov 4 at 11:59 PM, and you'll get a full refund. Times are based on the property's local time.
                        </div>
                    </div>
                    <hr/>
                    <div className="refund-item">
                        <div className="date">After<br/>Nov 4</div>
                        <div className="description">
                            <b>No refund</b><br/>
                            After that, you won’t get a refund.
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    
        <div className="section important-info">
            <div className="left-col">
                <h3>Important Information</h3>
            </div>
          
            <div className="right-col">
               <p>You need to know</p>
               <p>Extra-person charges may apply and vary depending on property policy</p>
               <p>Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges</p>
               <p>Safety features at this property include a fire extinguisher and a first aid kit</p>
               <p>Online Parties are strictly Prohibited.</p>
            </div>
        </div>
    
        <div className="section faq">
            <div className="left-col">
                <h3>Frequently Asked Questions</h3>
            </div>
           <div className="right-col">
                <div className="faq-item">
                    <i className="fas fa-chevron-down"></i>
                    <span>Is Juneau Vacation Home pet-friendly?</span>
                </div>
                <div className="faq-item">
                    <i className="fas fa-chevron-down"></i>
                    <span>What time is check-in at Juneau Vacation Home?</span>  
                </div>
                <div className="faq-item">
                    <i className="fas fa-chevron-down"></i>
                    <span>Where is Juneau Vacation Home located?</span>
                </div>
                <div className="faq-item">
                    <i className="fas fa-chevron-down"></i>
                    <span>Where is Juneau Vacation Home located?</span>
                </div>
                <a href="#" className="see-more">See more</a>
           </div>
        </div>
      </div>
      {/*<!-- Reviews Starts--> */}
      <div className="review-section">
        <div className="review-rating">
            <h1><span>9.8/10</span></h1>
            <h2>Exceptional</h2>
            <h5>24 reviews <i className="fa fa-info-circle"></i></h5> 
            <h6>Reviews are verified unless labeled otherwise.</h6>   
        </div>
        <div className="review-container">
            <div className="reviews-header">Recent reviews</div>
            <div className="reviews">
                <div className="review-card">
                    <div className="rating">10/10 Excellent</div>
                    <div className="review-text">
                        A very cozy home for the two of us in a quiet area NW of town. Beautiful water view. We enjoyed the art, read up in it and visited the... 
                        <a href="#" className="read-more">Read more</a>
                    </div>
                    <div className="author">Kyle G.</div>
                    <div className="date">Sep 25, 2024</div>
                </div>
                <div className="review-card second-review-card">
                    <div className="rating">10/10 Excellent</div>
                    <div className="review-text">
                        The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.
                        <a href="#" className="read-more">Read more</a>
                    </div>
                    <div className="author">Cindy B.</div>
                    <div className="date">Sep 23, 2024</div>
                </div>
            </div>
            <a href="#" className="see-all">See all 24 reviews &rarr;</a>
        </div>
      </div>  
      {/*<!-- Reviews Ends--> */}
      <div className="last-container">
        <div className="last-section">
            <div className="section-title">
                <h4>About the host</h4>
            </div>
            <div className="host-info">
                <div className="host-details">
                    <div>Hosted by Evolve</div>
                    <div className="languages">
                        <strong>Languages:</strong><br />
                        English, French, German, Spanish
                    </div>
                </div>
            </div>
        </div>
        <div className="last-section">
            <div className="section-title">
                <h4>Send a message</h4>
            </div>
            <div className="contact"><a href="#" className="contact-button">Contact host</a></div>
        </div>
      </div>     

    </div>
  );
};

export default PropertySection;
