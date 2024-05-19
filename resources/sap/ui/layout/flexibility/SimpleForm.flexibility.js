/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/apply/api/DelegateMediatorAPI","sap/ui/layout/changeHandler/RenameSimpleForm","sap/ui/layout/changeHandler/MoveSimpleForm","sap/ui/layout/changeHandler/HideSimpleForm","sap/ui/layout/changeHandler/UnhideSimpleForm","sap/ui/layout/changeHandler/AddSimpleFormGroup","sap/ui/layout/changeHandler/AddSimpleFormField"],function(e,i,a,l,r,m,o){"use strict";e.registerWriteDelegate({controlType:"sap.ui.layout.form.SimpleForm",delegate:"sap/ui/comp/smartfield/flexibility/SmartFieldWriteDelegate",requiredLibraries:{"sap.ui.comp":{minVersion:"1.81",lazy:false}}});return{renameLabel:i,renameTitle:i,moveSimpleFormField:a,moveSimpleFormGroup:a,hideSimpleFormField:l,unhideSimpleFormField:r,removeSimpleFormGroup:l,addSimpleFormGroup:m,addSimpleFormField:o}},true);
//# sourceMappingURL=SimpleForm.flexibility.js.map