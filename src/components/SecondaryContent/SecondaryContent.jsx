import SeoTable from "./subcomponents/SeoTable";
import Faqs from "./subcomponents/Faqs";

const SecondaryContent = () => {
    return (
        <section className="mt-6">
            <div className="premium-card rounded-2xl lg:px-6 lg:py-8">
                <div className="mb-8 space-y-5 seo-content">
                    <div>
                        <h2 className="lg:text-3xl text-2xl font-semibold leading-7 tracking-normal text-gray-900">Exploring Mumbai for Every Traveller</h2>
                        <p className="text-base text-gray-600 mt-2  text-justify">
                            Mumbai is a city of contrasts where heritage, business districts, nightlife, beaches, and local food all coexist in one
                            vibrant destination. From iconic landmarks near Colaba and Marine Drive to fast-growing hubs like BKC and Powai, travelers
                            can plan their stay based on convenience, lifestyle, and budget.
                        </p>
                    </div>
                </div>
                <SeoTable />
                <Faqs />
            </div>
        </section>
    );
}

export default SecondaryContent;