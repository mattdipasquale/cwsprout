// ==========================================================================
// Admin.TopicFeaturesController
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.CollectionController
  @author AuthorName
  @version 0.1
  @static
*/
Admin.topicFeaturesController = SC.CollectionController.create(
/** @scope Admin.topicFeaturesController */ {

  // commitChangesImmediately: false,

	orderById: function() {
		if (this.get('orderBy') == 'guid ASC') {
			this.set('orderBy', 'guid DESC');
		} else
		 	this.set('orderBy', 'guid ASC');
	},

	orderByTopicId: function() {
		if (this.get('orderBy') == 'topic.guid ASC') {
			this.set('orderBy', 'topic.guid DESC');
		} else
		 	this.set('orderBy', 'topic.guid ASC');
	},

	orderByTopicSubject: function() {
		if (this.get('orderBy') == 'topic.subject ASC') {
			this.set('orderBy', 'topic.subject DESC');
		} else
		 	this.set('orderBy', 'topic.subject ASC');
	},

	orderByStartDate: function() {
		if (this.get('orderBy') == 'startDate ASC') {
			this.set('orderBy', 'startDate DESC');
		} else
		 	this.set('orderBy', 'startDate ASC');
	},

	orderByEndDate: function() {
		if (this.get('orderBy') == 'endDate ASC') {
			this.set('orderBy', 'endDate DESC');
		} else
		 	this.set('orderBy', 'endDate ASC');
	},

	orderByPriority: function() {
		if (this.get('orderBy') == 'priority ASC') {
			this.set('orderBy', 'priority DESC');
		} else
		 	this.set('orderBy', 'priority ASC');
	},

	add: function(sender) {
    var defaultStartDate = new Date();
		var defaultEndDate = new Date();
		defaultEndDate.setDate(defaultStartDate.getDate() + 14);

		var topicFeature = Admin.TopicFeature.newRecord({
			topic: Admin.Topic.find(1),
			startDate: defaultStartDate,
			endDate: defaultEndDate,
			priority: 1,
		});

    // topicFeature.commitChanges();
		this.set('selection', topicFeature);
		this.showEditor();
	},

  showEditor: function(sourceView, evt){
    SC.page.get('editor').popup(sourceView, evt) ;
    Admin.masterController.set('searchButtonDefault', false);
    Admin.masterController.set('searchFieldEnabled', false);
    SC.page.get('editor').get('priority').rootElement.select();
  },

  hideEditor: function(sourceView, evt){
    SC.page.get('editor').set('isVisible', NO);
    Admin.masterController.set('searchButtonDefault', true);
    Admin.masterController.set('searchFieldEnabled', true);
    // SC.page.get('header').get('searchWord').rootElement.select(); // causes errors...
  },

  saveAndHideEditor: function(){
    this.commitChanges();
    this.hideEditor();
  },

  cancelAndHideEditor: function(){
    this.discardChanges();
    this.hideEditor();
  },
    
	//     var feature = Admin.TopicFeature.newRecord({
	//       title:    'untitled',
	//       text:     'click the Edit button to edit.',
	//       created:  now.format('yyyy-MM-dd HH:mm:ss'),
	//       modified: now.format('yyyy-MM-dd HH:mm:ss'),
	//       uid:      SN.accountController.get('uid'),
	//       docId:    '',
	//       isPublic: 0
	//     },SN.server);
	// 
	//     note.commitChanges();
	//     this.set('selection',[note]);
	//     SN.detailController.showEditor();
	//   },

	//   del: function(sender){
	//     if(!confirm('Are you sure?')) return;
	//     var content = this.get('content');
	//     var sel = (this.get('selection') || []).clone() ;
	//     var idx = sel.get('length') ;
	//     while(--idx >= 0) {
	//       var note = sel.objectAt(idx);
	//       note.destroy();
	//     }
	//   },
	//   
	//   search: function(searchWord){
	//     this.content.set('conditions', {'search': this.get(searchWord)});
	//   },
	// 
	//   showDialog: function(){
	//     SC.page.get('topic_feature_dialog').set('isVisible', YES);
	//   },
	// 
	//   hideDialog: function(){
	//     SC.page.get('topic_feature_dialog').set('isVisible', NO);
	//   },

	// headers: ['Feature ID', 'Start Date', 'End Date', 'Priority']
	
  // content: SC.Collection.create({ recordType: Admin.TopicFeature })

}) ;
