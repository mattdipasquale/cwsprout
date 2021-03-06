// ==========================================================================
// Admin
// ==========================================================================

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
function main() {
	
	document.title = 'CollegeWikis Administration';

  // Step 1: Load Your Model Data
  // The default code here will load the fixtures you have defined.
  // Comment out the preload line and add something to refresh from the server
  // when you are ready to pull data from your server.
  Admin.server.preload(Admin.FIXTURES);

  // TODO: refresh() any collections you have created to get their records.
  // ex: Admin.contacts.refresh() ;

  // Step 2: Instantiate Your Views
  // The default code just activates all the views you have on the page. If
  // your app gets any level of complexity, you should just get the views you
  // need to show the app in the first place, to speed things up.
  SC.page.awake();

  // Step 3. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: Admin.contactsController.set('content',Admin.contacts);

	var topics = Admin.Topic.collection();
	Admin.topicsController.set('content', topics);
	topics.refresh();

	var groups = Admin.Group.collection();
	Admin.groupsController.set('content', groups);
	groups.refresh();

	var networks = Admin.Network.collection();
	Admin.networksController.set('content', networks);
	networks.refresh();


	var topic_features = Admin.TopicFeature.collection();
	Admin.topicFeaturesController.set('content', topic_features);
	topic_features.refresh();

	var group_features = Admin.GroupFeature.collection();
	Admin.groupFeaturesController.set('content', group_features);
	group_features.refresh();

	var network_features = Admin.NetworkFeature.collection();
	Admin.networkFeaturesController.set('content', network_features);
	network_features.refresh();

} ;
