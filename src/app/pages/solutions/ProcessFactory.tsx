import { ProcessFactoryHero } from '../../components/ProcessFactoryHero';
import { ProcessFactoryBenefits } from '../../components/ProcessFactoryBenefits';
import { ProcessFactoryMobile } from '../../components/ProcessFactoryMobile';
import { ProcessFactoryCTA } from '../../components/ProcessFactoryCTA';

export default function ProcessFactory() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dual Screenshots */}
      <ProcessFactoryHero />

      {/* Benefit Cards Section */}
      <ProcessFactoryBenefits />

      {/* Mobile Capabilities Section */}
      <ProcessFactoryMobile />

      {/* Final CTA */}
      <ProcessFactoryCTA />
    </div>
  );
}