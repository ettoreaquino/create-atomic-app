// -------------------------------------------------------------------------- //
//  Use this file to control the export path that should be used across all   //
//  the pages. If you remember, every page (besides BasePage) must implement  //
//  a Template. thus, templates.js can be used in order to organize importa-  //
//  tion at the top of a Page Class file. Ex:                                 //
//      import { HomeTemplate } from '../templates/templates';                //
//                                                                            //
//  This is a just a matter of organization, the importation could be done    //
//  directly using the template file path. Ex:                                //
//      import HomeTemplate from '../templates/HomeTemplate';                 //
// -------------------------------------------------------------------------- //


// =============================== IMPORT =================================== //
import homeTemplate from './HomeTemplate';

// =============================== EXPORT =================================== //
export const HomeTemplate = homeTemplate;