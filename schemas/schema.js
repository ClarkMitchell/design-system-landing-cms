// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import nav from './nav';
import callToAction from './callToAction';
import form from './form';
import hero from './hero';
import gallery from './gallery';
import page from './page';
import service from './service';
import services from './services';
import textWithIllustration from './textWithIllustration';
import video from './video';
import grid from './grid';
import link from './link';
import image from './image';
import imageCard from './imageCard';
import textCard from './textCard';
import imageTextCard from './imageTextCard';
import testimonial from "./testimonial";
import testimonials from "./testimonials";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    nav,
    callToAction,
    form,
    hero,
    gallery,
    page,
    service,
    services,
    textWithIllustration,
    video,
    grid,
    link,
    image,
    imageCard,
    textCard,
    imageTextCard,
    testimonial,
    testimonials,
  ]),
})
