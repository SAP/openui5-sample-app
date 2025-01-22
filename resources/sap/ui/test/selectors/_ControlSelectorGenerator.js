/*!
 * OpenUI5
 * (c) Copyright 2009-2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/extend","sap/base/util/isEmptyObject","sap/ui/base/ManagedObject","sap/ui/test/_OpaLogger","sap/ui/test/selectors/_ControlSelectorValidator","sap/ui/test/selectors/_selectors"],function(e,t,n,r,o,i){"use strict";var a=n.extend("sap.ui.test.selectors._ControlSelectorGenerator");var l=r.getLogger("sap.ui.test.selectors._ControlSelectorGenerator");a._generate=function(e){var t=a._getOrderedGenerators(e.settings);var n=e.includeAll?a._executeAllPlainGenerators(t,e):a._executeTopPlainGenerator(t,e);return n.catch(function(t){if(e.shallow){return Promise.reject(t)}else{return a._generateHierarchicalUp(e).catch(function(){return a._generateHierarchicalDown(e)}).catch(function(){return a._generateWithSibling(e)}).then(function(e){return e})}})};var u=20;var c=10;a.setParams=function(e){if(e.maxDepth&&Number.isInteger(e.maxDepth)&&e.maxDepth>0){a._maxDepth=e.maxDepth}if(e.maxWidth&&Number.isInteger(e.maxWidth)&&e.maxWidth>0){a._maxWidth=e.maxWidth}};a.resetParams=function(e){a._maxDepth=u;a._maxWidth=c};a.resetParams();a._executeAllPlainGenerators=function(e,n){return Promise.all(e.map(function(e){return a._executeGenerator(e,n)})).then(function(e){e=e.filter(function(e){return e&&!t(e)&&(!Array.isArray(e)||e.length)});if(e.length){l.debug("The matching "+(n.multiple?"non-unique":"unique")+" selectors are: "+JSON.stringify(e));return e}else{return Promise.reject(new Error("Could not generate a selector for control "+n.control))}})};a._executeTopPlainGenerator=function(e,t,n){n=n||0;if(n===e.length){return Promise.reject(new Error("Could not generate a selector for control "+t.control))}return a._executeGenerator(e[n],t).then(function(r){if(r.length){l.debug("The top priority "+(t.multiple?"non-unique":"unique")+" selector is: "+JSON.stringify(r[0]));return r[0]}else{return a._executeTopPlainGenerator(e,t,n+1)}})};a._executeGenerator=function(e,t){var n={};return a._getValidationRootSelector(e,t).then(function(r){n.relative=r;return a._getAncestorSelector(e,t)}).then(function(r){n.ancestor=r;var o=e.generate(t.control,n);return a._filterUnique(o,t)})};a._getValidationRootSelector=function(e,t){t=t||{};return new Promise(function(n,r){if(t.shallow||!e._isValidationRootRequired()){n(null)}else{var o=e._getValidationRoot(t.control);if(o){a._generateUniqueSelectorInSubtree(t.control,o).then(function(e){n(e)}).catch(function(e){r(e)})}else{n(null)}}})};a._getAncestorSelector=function(e,t){t=t||{};return new Promise(function(n,r){if(t.shallow||!e._isAncestorRequired()){n(null)}else{var o=e._getAncestor(t.control);if(o){a._generate({control:o}).then(function(e){n(e)}).catch(function(e){l.debug("Could not generate selector for ancestor "+o+". Error: "+e);n(null)})}else{n(null)}}})};a._generateHierarchicalUp=function(t){return a._generateUniqueAncestorSelector(t.control).then(function(n){return a._generateUniqueSelectorInSubtree(t.control,n.ancestor).then(function(t){return e({},t,{ancestor:n.selector})}).then(a._filterUniqueHierarchical(t))})};a._generateHierarchicalDown=function(t){return a._generate({control:t.control,shallow:true,multiple:true}).then(function(n){return a._generateUniqueDescendantSelector(t.control).then(function(t){return e({},n,{descendant:t})}).then(a._filterUniqueHierarchical(t))})};a._generateWithSibling=function(e){return a._generate({control:e.control,shallow:true,multiple:true}).then(function(t){return a._generateSelectorWithUniqueSibling(e,t)})};a._generateUniqueDescendantSelector=function(e,t){return new Promise(function(n,r){t=t||0;if(t>=a._maxDepth){r(new Error("Could not generate selector for descendant of "+e+". Exceeded limit of "+a._maxDepth+" levels"))}else{var o=a._getAggregatedControls(e.mAggregations);a._generateUniqueSelectorForChild(o).then(function(e){n(e)}).catch(function(){return a._callGenerateUniqueDescendant(o,t+1).then(function(e){n(e)}).catch(function(e){r(e)})})}})};a._callGenerateUniqueDescendant=function(e,t,n){n=n||0;if(n>=e.length){return Promise.reject(new Error("Could not generate unique selector for descendant at level "+t))}return a._generateUniqueDescendantSelector(e[n],t).catch(function(){return a._callGenerateUniqueDescendant(e,t,n+1)})};a._generateUniqueSelectorForChild=function(e,t){t=t||0;if(t>=e.length){return Promise.reject()}return a._generate({control:e[t],shallow:true}).then(function(e){return e}).catch(function(n){return a._generateUniqueSelectorForChild(e,t+1)})};a._generateUniqueAncestorSelector=function(e,t,n){t=t||e.getParent();n=n||0;var r=n>=a._maxDepth;if(!t||r){return Promise.reject(new Error("Could not generate unique selector for ancestor of "+e+(r?". Exceeded limit of "+a._maxDepth+" levels":"")))}return a._generate({control:t,shallow:true}).then(function(e){return{ancestor:t,selector:e}}).catch(function(r){l.debug("Could not generate selector for ancestor "+t+". Error: "+r);return a._generateUniqueAncestorSelector(e,t.getParent(),n+1)})};a._generateUniqueSelectorInSubtree=function(e,t){return a._generate({control:e,validationRoot:t,shallow:true})};a._generateSelectorWithUniqueSibling=function(e,t){return new Promise(function(n,r){var o;var i=-1;var u=function(){o=o&&o.getParent()||e.control.getParent();i+=1;if(o&&i<a._maxDepth){var c=[];var s=a._getAggregatedControls(o.mAggregations);s.forEach(function(t){if(t!==e.control){c.push(t);c=c.concat(a._getAggregatedControls(t.mAggregations))}});l.debug("Found "+c.length+" siblings at level "+i+" with ancestor "+o);return a._generateSelectorWithUniqueSiblingAtLevel({options:e,targetMultiSelector:t,level:{siblings:c,number:i,width:a._maxWidth}}).then(function(e){n(e)}).catch(function(){return u()})}else{r(new Error("Could not generate unique sibling selector at level "+i))}};u()})};a._generateSelectorWithUniqueSiblingAtLevel=function(t){t.index=t.index||0;if(t.index>=t.level.width||t.index>=t.level.siblings.length){return Promise.reject(new Error("Could not generate unique selector for the first "+t.index+" siblings"))}return a._generate({control:t.level.siblings[t.index],shallow:true}).then(function(n){var r=e({},t.targetMultiSelector,{sibling:[n,{level:t.level.number}]});return a._filterUniqueHierarchical(t.options)(r)}).catch(function(){return a._generateSelectorWithUniqueSiblingAtLevel(e(t,{index:t.index+1}))})};a._getAggregatedControls=function(e){var t=[];for(var n in e){var r=e[n];if(Array.isArray(r)){t=t.concat(r.slice(0,a._maxWidth))}else if(r){t.push(r)}}t=t.filter(function(e){return e.getMetadata&&e.getMetadata().getName()&&e.$().length});return t};a._filterUnique=function(e,t){t=t||{};var n=[];var r=new o(t.validationRoot,t.multiple);if(Array.isArray(e)){e.forEach(function(e){if(Array.isArray(e)){e.forEach(function(e){if(r._validate(e)){n.push(e)}})}else if(r._validate(e)){n.push(e)}})}else if(r._validate(e)){n.push(e)}return n};a._filterUniqueHierarchical=function(e){return function(t){l.debug("Found hierarchical selector '"+JSON.stringify(t)+"'. Checking for uniqueness");var n=a._filterUnique(t,e);if(n.length){l.debug("The matching unique selectors are: "+JSON.stringify(n));return Promise.resolve(n[0])}else{return Promise.reject(new Error("Could not generate a selector for control "+e.control))}}};a._getOrderedGenerators=function(e){var t=["globalID","viewID","labelFor","bindingPath","properties","dropdownItem","tableRowItem","controlType"];if(e&&e.preferViewId){var n=t[0];t[0]=t[1];t[1]=n}return t.map(function(e){return i[e]})};return a});
//# sourceMappingURL=_ControlSelectorGenerator.js.map