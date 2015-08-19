'use strict';
module.exports =
/*@ngInject*/
function configure ($stateProvider) {
  $stateProvider
  .state('cms-concepts', {
    parent: 'cms-concepts-base',
    templateUrl: 'concepts.cms.html',
    controller: 'ConceptsCmsCtrl',
    url: '?/'
  })
  .state('cms-concepts-base', {
    parent: 'cms',
    templateUrl: 'concepts.cms.base.html',
    contoller: 'ConceptsCmsCtrl',
    url: '/concepts',
    abstract: true
  })
  .state('cms-concepts-create', {
    parent: 'cms-concepts-base',
    templateUrl: 'concepts.create.cms.html',
    controller: 'ConceptsCreateCmsCtrl',
    url: '/create'
  });
};