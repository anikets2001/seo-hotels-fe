const MapView = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-[0_10px_24px_rgba(15,23,42,0.08)] p-4 mb-4">
            <p className="font-bold text-[16px] text-gray-900 mb-3">View on map</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28048.431550778954!2d77.0473970743164!3d28.508024700000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1861c6b722a7%3A0xcc2b1f4a5fe604e1!2sYatra%20Online%20Limited!5e0!3m2!1sen!2sin!4v1777032744549!5m2!1sen!2sin"
                title="Map showing Yatra Online Limited location"
                width="340"
                height="250"
                style={{ border: 0, borderRadius: 10 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default MapView;