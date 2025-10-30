import { PageHero } from '../components/PageHero';

export function ShopPage() {
  return (
    <>
      <PageHero title="Shop" />
      <section id="shop" className="py-20" style={{backgroundColor: '#F8F9FA'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h2 className="text-4xl mb-4 text-gray-900">Under Construction - Merchandise Coming Soon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're working hard to bring you official campaign merchandise. Check back soon!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
