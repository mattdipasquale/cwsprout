/* Start ----------------------------------------------------- models/network_feature.js*/

// ==========================================================================
// Admin.NetworkFeature
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
Admin.NetworkFeature = SC.Record.extend(
/** @scope Admin.NetworkFeature.prototype */ {

  dataSource: Admin.server,
  properties: ['network', 'feature'],
  topicType: 'Admin.Network',
	featureType: 'Admin.Feature',

}) ;


/* End ------------------------------------------------------- models/network_feature.js*/

