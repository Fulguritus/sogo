!function(){"use strict";function e(e,t){e.state("mail",{url:"/Mail",abstract:!0,views:{message:{template:"<ui-view/>"}},resolve:{stateAccounts:o}}).state("mail.account",{url:"/:accountId",abstract:!0,template:'<ui-view id="account"/>',resolve:{stateAccount:r}}).state("mail.account.mailbox",{url:"/:mailboxId",abstract:!0,template:'<ui-view id="mailbox"/>',resolve:{stateMailbox:n}}).state("mail.account.mailbox.newMessage",{url:"/new",views:{"message@":{template:"<ui-view/>",controller:"MessageEditorControllerPopup"}},resolve:{stateMessage:a}}).state("mail.account.mailbox.message",{url:"/:messageId",views:{"message@":{templateUrl:"UIxMailViewTemplate",controller:"MessageController",controllerAs:"viewer"}},resolve:{stateMessage:s}}).state("mail.account.mailbox.message.edit",{url:"/edit",views:{"message@":{template:"<ui-view/>",controller:"MessageEditorControllerPopup"}},resolve:{stateContent:i}}).state("mail.account.mailbox.message.action",{url:"/{actionName:(?:reply|replyall|forward)}",views:{"message@":{template:"<ui-view/>",controller:"MessageEditorControllerPopup"}}}),t.otherwise("/Mail/0/folderINBOX/new")}function o(e,t,o){var r,n=[];return e&&e.opener&&e.opener.$mailboxController?(r=e.opener.$mailboxController.accounts,t.when(r)):o.$findAll().then(function(e){return angular.forEach(e,function(t,e){var o=t.$getMailboxes();0===e?n.push(o.then(function(e){return t})):n.push(t)}),t.all(n)})}function r(t,e){return _.find(e,function(e){return e.id==t.accountId})}function n(e,t,o,r,n,a){var s,i,l=n(o.mailboxId);return(s=(i=function(e){var t=_.find(e,function(e){return e.path==l});return t||angular.forEach(e,function(e){!t&&e.children&&0<e.children.length&&(t=i(e.children))}),t})(r.$mailboxes))?(s.$topIndex=0,s.selectFolder(),s):e.reject("Mailbox doesn't exist")}function a(e,t){var o,r=e.search();return r&&(o=_.find(_.keys(r),function(e){return/^mailto:/i.test(e)})),t.$newMessage({mailto:o})}function s(e,t,o,r,n,a){var s,i;return window&&window.opener&&window.opener.$messageController&&window.opener.$messageController.message.uid==parseInt(o.messageId)?(i=new a(n.$account.id,n,window.opener.$messageController.message.$omit({privateAttributes:!0})),t.when(i)):(s={uid:o.messageId.toString()},(i=new a(n.$account.id,n,s)).$reload())}function i(e){return e.$editableContent()}function t(s,e,i){e.$on("$stateChangeError",function(e,t,o,r,n,a){i.error(a),s.close()}),e.$on("$routeChangeError",function(e,t,o,r){i.error(e,t,o,r)})}function l(e,t,o,r,n,a){var s=o.defer();r.show({hasBackdrop:!1,disableParentScroll:!1,clickOutsideToClose:!1,escapeToClose:!1,scope:t,preserveScope:!0,templateUrl:"UIxMailEditor",controller:"MessageEditorController",controllerAs:"editor",onComplete:function(e,t){return s.resolve(t)},locals:{stateAccount:n,stateMessage:a,onCompletePromise:function(){return s.promise}}}).finally(function(){e.close()})}angular.module("SOGo.MailerUI",["ngCookies","ui.router","ck","angularFileUpload","SOGo.Common","SOGo.ContactsUI","SOGo.SchedulerUI","ngAnimate","SOGo.PreferencesUI"]).config(e).run(t).controller("MessageEditorControllerPopup",l),e.$inject=["$stateProvider","$urlRouterProvider"],o.$inject=["$window","$q","Account"],r.$inject=["$stateParams","stateAccounts"],n.$inject=["$q","$state","$stateParams","stateAccount","decodeUriFilter","Mailbox"],a.$inject=["$urlService","stateAccount"],s.$inject=["encodeUriFilter","$q","$stateParams","$state","stateMailbox","Message"],i.$inject=["stateMessage"],t.$inject=["$window","$rootScope","$log"],l.$inject=["$window","$scope","$q","$mdDialog","stateAccount","stateMessage"]}();
//# sourceMappingURL=Mailer.app.popup.js.map