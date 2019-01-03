// -------------------------------------------------------------------------- //
//  Similar to the pages.js file, store.js file controls the file paths that  //
//  will be injectected at the App.js class. By doing so, the stores can be   //
//  injected within Page components using the recompose library. Check        //
//  HomePage.js for an example on how to inject data in a page.               //
//                                                                            //
//  Remember that almost all the data of a page should lie within its Store   //
//  with this.props being widely used to make it available at the lower le-   //
//  vels of the atomic structure. An example of such a workflow can be        //
//  checked by investigating how data crosses levels to reach Home.js from    //
//  HomeStore.js                                                              //
// -------------------------------------------------------------------------- //


// =============================== IMPORT =================================== //
import homeStore from './HomeStore';

// =============================== EXPORT =================================== //
export const HomeStore = homeStore;