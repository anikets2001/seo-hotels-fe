import Image from "next/image";
import CityDropdown from "./subcomponents/cityDropdown";
import CheckInCheckOut from "./subcomponents/checkInCheckOut";
import RoomAndGuest from "./subcomponents/RoomAndGuest";
import ModifySearch from "./subcomponents/ModifySearch";

const BookingEngine = () => {
    return (
        <div className="hidden bg-[linear-gradient(135deg,_#AA253D,_#6A2648)] fixed top-[84px] w-full z-[9999] lg:block">
            <form className="bg-[linear-gradient(135deg,_#AA253D,_#6A2648)] px-[200px] py-[12px] text-white shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-between gap-[32px]">
                    <div className="flex items-center gap-[32px]">
                        <Image
                            src="/assets/images/hotel.svg"
                            alt="flight-icon"
                            className="hotel-icon-white"
                            width={35}
                            height={56}
                            priority={true}
                            quality={75}
                            style={{ aspectRatio: '35/56' }}
                        />
                        <div className="flex gap-20 items-end">
                            <CityDropdown />
                            <CheckInCheckOut />
                            <RoomAndGuest />
                        </div>
                    </div>
                    <ModifySearch />
                </div>
            </form>
        </div>
    );
}

export default BookingEngine;