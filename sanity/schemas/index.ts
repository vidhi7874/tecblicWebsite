import { type SchemaTypeDefinition } from 'sanity';
import { heroSchema } from './home-page/hero.schema';
import { goalSection } from './home-page/goals.schema';
import { articleSchema } from './home-page/article.schema';
import { industryServeSchema } from './home-page/industry.serve';
import { techfinitySchema } from './home-page/techfinity.schema';
import { businessSchema } from './home-page/business.schema';
import { addressSchema } from './home-page/address.schema';
import { partnershipSchema } from './home-page/partnership.schema';
import { serviceSchema } from './our-service/service-landing.schema';
import { ourServiceSchema } from './our-service/our-service.schema';
import { agencySchema } from './our-service/agency.schema';
import { caseStudySchema } from './our-service/case-study-our-service.schema';
import { joinSchema } from './join-our-team/join-our-team.schema';
import { tecblicLifeSchema } from './join-our-team/life-at-tecblic.schema';
import { currentOpeningSchema } from './join-our-team/current-opening.schema';
import { perkSchema } from './join-our-team/perks.schema';
import { aboutUsSection } from './aboutus/aboutus-business.schema';
import { businessPlanSchema } from './aboutus/business-plan.schema';
import { companyExperienceSchema } from './aboutus/company-exp.schema';
import { howWeWorkSchema } from './aboutus/how-we-work.schema';
import { companyYearExperienceSchema } from './aboutus/company-year-exp.schema';
import { industrySchema } from './industry-page/warehouse.schema';
import { graphicSchema } from './industry-page/graphic.schema';
import { weWorkSchema } from './industry-page/we-work.schema';
import { caseStudyIndustrySchema } from './industry-page/case-study-ind.schema';
import { blogSchema } from './blog-page/blog-page.schema';
import { contactUsFormDataSchema } from './forms/contact-us-form.schema';
import { careerFormDataSchema } from './forms/carrer-inquires.schema';
import { caseStudySection } from './case-study/case-study-section.schema';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSchema,
    goalSection,
    articleSchema,
    industryServeSchema,
    techfinitySchema,
    businessSchema,
    addressSchema,
    partnershipSchema,

    // schema for the service-page
    serviceSchema,
    ourServiceSchema,
    agencySchema,
    caseStudySchema,

    // join our team page
    joinSchema,
    tecblicLifeSchema,
    currentOpeningSchema,
    perkSchema,

    // about us page ...
    aboutUsSection,
    businessPlanSchema,
    howWeWorkSchema,
    companyExperienceSchema,
    companyYearExperienceSchema,
    // industry page
    industrySchema,
    weWorkSchema,
    graphicSchema,
    caseStudyIndustrySchema,
    // blog page ...
    blogSchema,
    // form
    contactUsFormDataSchema,
    careerFormDataSchema,
    // case study
    caseStudySection,
  ],
};
