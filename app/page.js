import Hero from '@/components/home/Hero'
import WhyAltitude from '@/components/home/WhyAltitude'
import OriginStory from '@/components/home/OriginStory'
import RegionsTeaser from '@/components/home/RegionsTeaser'
import ProductSection from '@/components/home/ProductSection'
import ProcessSection from '@/components/home/ProcessSection'
import SubscriptionSection from '@/components/home/SubscriptionSection'
import WholesaleSection from '@/components/home/WholesaleSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <RegionsTeaser />
      <WhyAltitude />
      <OriginStory />
      <ProcessSection />
      <SubscriptionSection />
      <WholesaleSection />
    </>
  )
}
