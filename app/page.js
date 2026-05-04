import Hero from '@/components/home/Hero'
import RomanceBridge from '@/components/home/RomanceBridge'
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
      <RomanceBridge />
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
