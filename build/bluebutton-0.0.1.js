/**
 * BlueButton.js
 */

// v.0.0.1


(function () {
var Core=function(){var b=function(b,a,d,f){b=b.getElementsByTagName(a);for(a=0;a<b.length;a++)if(b[a].getAttribute(d)===f)return b[a]};return{parseXML:function(b){if(!b||"string"!==typeof b)return console.log("Error: XML data is not a string"),null;var a;window.DOMParser?(parser=new DOMParser,a=parser.parseFromString(b,"text/xml")):(a=new ActiveXObject("Microsoft.XMLDOM"),a.async="false",a.loadXML(b));return a},getElementByTagAttrValue:b,getSection:function(c,a){return b(c,"templateId","root",a)}}}();var Allergies=function(){return{process:function(){var b=[];b.push({date:{value:"20090909",low:"20090902",high:"20100103"},observation:{date:{low:"20110215"},name:"drug allergy",code:"416098002",code_system:"2.16.840.1.113883.6.96",code_system_name:"SNOMED CT",value:{name:"Adverse reaction to substance",code:"282100009",code_system:"2.16.840.1.113883.6.96",code_system_name:"SNOMED CT"},participant:{name:"ALLERGENIC EXTRACT, PENICILLIN",code:"314422",code_system:"2.16.840.1.113883.6.88",code_system_name:"RxNorm"},
status:"active",reaction:{date:{low:"20090711"},name:"Hives",code:"247472004",code_system:"2.16.840.1.113883.6.96"},severity:"moderate to severe"}});return b}}}();var Demographics=function(){return{process:function(){var b=[];b.push({name:{prefix:"Mr.",given:["Adam","Frankie"],family:"Everyman"},dob:"1954-11-25",gender:"male",marital_status:"married",address:{street:["17 Daws Rd.","Apt 102"],city:"Blue Bell",state:"MA",country:"US",zip:"02368"},phone:{home:["555-555-1212"],work:["555-555-2323"],mobile:["555-555-3434","555-555-4545"]},email:"adam@email.com",race:"white",ethnicity:"Not Hispanic or Latino",religion:"Christian (non-Catholic, non-specific)",guardian:{name:{given:["Ralph",
"Frankie"],family:"Relative"},relationship:"Grandfather",address:{street:["17 Daws Rd.","Apt 102"],city:"Blue Bell",state:"MA",country:"US",zip:"02368"},phone:{home:"781-555-1212"}},birthplace:{state:"MA",zip:"02368",country:"US"},provider:{organization:"Good Health Clinic",phone:"781-555-1212",address:{street:["21 North Ave"],city:"Burlington",state:"MA",zip:"02368",country:"US"}}});return b}}}();var Encounters=function(){return{process:function(){var b=[];b.push({date:"20000407",name:"Office consultation - 15 minutes",finding:{name:"Bronchitis",code:"32398004",code_system:"2.16.840.1.113883.6.96"},code:"99241",code_system:"2.16.840.1.113883.6.12",code_system_name:"CPT",code_system_version:4,translation:{name:"Ambulatory",code:"AMB",code_system:"2.16.840.1.113883.5.4",code_system_name:"HL7 ActEncounterCode"},performer:{name:"General Physician",code:"59058001",code_system:"2.16.840.1.113883.6.96",
code_system_name:"SNOMED CT"},participant:{organization:"Good Health Clinic",street:["17 Daws Rd."],city:"Blue Bell",state:"MA",zip:"02368",country:"US",name:"General Acute Care Hospital",code:"GACH",code_system:"2.16.840.1.113883.5.111",code_system_name:"HL7 RoleCode"}});return b}}}();var Immunizations=function(){return{process:function(b){var c=[],a;a=Core.getSection(b,"2.16.840.1.113883.10.20.22.2.2");b=a.parentElement.getElementsByTagName("entry");for(var d=0;d<b.length;d++){a=b[d].getElementsByTagName("effectiveTime")[0];var f=a.getAttribute("value");a=b[d].getElementsByTagName("consumable")[0];a=a.getElementsByTagName("code")[0];var g=a.getAttribute("displayName"),h=a.getAttribute("code"),j=a.getAttribute("codeSystem"),k=a.getAttribute("codeSystemName");a=b[d].getElementsByTagName("routeCode")[0];
var l=a.getAttribute("displayName"),m=a.getAttribute("code"),n=a.getAttribute("codeSystem"),p=a.getAttribute("codeSystemName");a=b[d].getElementsByTagName("entryRelationship")[0];var e=a.getElementsByTagName("code")[0],q=a.getElementsByTagName("text")[0].childNodes[0].nodeValue,r=e.getAttribute("displayName"),s=e.getAttribute("code"),e=e.getAttribute("codeSystem");a=b[d].getElementsByTagName("translation")[0];var t=a.getAttribute("displayName"),u=a.getAttribute("code"),v=a.getAttribute("codeSystem");
a=a.getAttribute("codeSystemName");c.push({date:f,product:{name:g,code:h,hl7_code_system:j,code_system_name:k,translation:{name:t,code:u,code_system:v,code_system_name:a}},route:{name:l,code:m,code_system:n,code_system_name:p},instructions:q,education_type:{name:r,code:s,code_system:e}})}return c}}}();var Labs=function(){return{process:function(){var b=[];b.push({name:"CBC WO DIFFERENTIAL",code:"43789009",code_system:"2.16.840.1.113883.6.96",code_system_name:"SNOMED CT",results:[{date:"200003231430",name:"WBC",value:6.7,unit:"10+3/ul",code:"33765-9",code_system:"2.16.840.1.113883.6.1",code_system_name:"LOINC",range:{low:4.3,high:10.8}}]});return b}}}();var Medications=function(){return{process:function(){var b=[];b.push({effective_time:{low:"20110301",high:"20120301"},product:{name:"Albuterol 0.09 MG/ACTUAT inhalant solution",code:"329498",code_system:"2.16.840.1.113883.6.88",translation:{name:"Proventil 0.09 MG/ACTUAT inhalant solution",code:"573621",code_system:"2.16.840.1.113883.6.88",code_system_name:"RxNorm"}},dose_quantity:1,rate_quantity:{value:90,unit:"ml/min"},precondition:{name:"Wheezing",code:"56018004",code_system:"2.16.840.1.113883.6.96"},
reason:{name:"Bronchitis",code:"32398004",code_system:"2.16.840.1.113883.6.96"},route:{name:"RESPIRATORY (INHALATION)",code:"C38216",code_system:"2.16.840.1.113883.3.26.1.1",code_system_name:"NCI Thesaurus"},participant:{name:"drug vehicle",code:"412307009",code_system:"2.16.840.1.113883.6.96",playing_entity:{name:"Diethylene Glycol",code:"5955009",code_system:"2.16.840.1.113883.6.96",code_system_name:"SNOMED CT"}},administration:{name:"INHALANT",code:"C42944",code_system:"2.16.840.1.113883.3.26.1.1",
code_system_name:"NCI Thesaurus"},performer:{organization:"Good Health Clinic",person:"Dr. Robert Michaels"}});return b}}}();var Plan=function(){return{process:function(){var b=[];b.push({date:"20000421",name:"Colonoscopy",code:"310634005",code_system:"2.16.840.1.113883.6.96"});return b}}}();var Problems=function(){return{process:function(){var b=[];b.push({date:{from:"199803",to:"199803"},name:"Pneumonia",status:"Active",age:57,code:"233604007",code_system:"2.16.840.1.113883.6.96"});return b}}}();var Procedures=function(){return{process:function(){var b=[];b.push({date:"20110215",name:"Colonic polypectomy",code:"274025005",code_system:"2.16.840.1.113883.6.96",specimen:{name:"colonic polyp sample",code:"309226005",code_system:"2.16.840.1.113883.6.96"},performer:{organization:"Good Health Clinic",street:["17 Daws Rd."],city:"Blue Bell",state:"MA",zip:"02368",country:"US",phone:"555-555-1234"},participant:{name:"Colonoscope",code:"90412006",code_system:"2.16.840.1.113883.6.96"}});return b}}}();var Vitals=function(){return{process:function(){var b=[];b.push({date:"19991114",group:[{name:"Height",code:"8302-2",code_system:"2.16.840.1.113883.6.1",code_system_name:"LOINC",value:117,unit:"cm"},{name:"Patient Body Weight - Measured",code:"3141-9",code_system:"2.16.840.1.113883.6.1",code_system_name:"LOINC",value:86,unit:"kg"},{name:"Intravascular Systolic",code:"8480-6",code_system:"2.16.840.1.113883.6.1",code_system_name:"LOINC",value:132,unit:"mm[Hg]"}]});return b}}}();var BlueButton=function(b){var c=null,a={},c=Core.parseXML(b);a.allergies=Allergies.process(c);a.demographics=Demographics.process(c);a.encounters=Encounters.process(c);a.immunizations=Immunizations.process(c);a.labs=Labs.process(c);a.medications=Medications.process(c);a.plan=Plan.process(c);a.problems=Problems.process(c);a.procedures=Procedures.process(c);a.vitals=Vitals.process(c);b=[a.allergies,a.demographics,a.encounters,a.immunizations,a.labs,a.medications,a.plan,a.problems,a.procedures,a.vitals];
for(var d=0;d<b.length;d++)b[d].json=function(){return JSON.stringify(this,null,2)};return{data:a,xmlDOM:c,allergies:function(){return a.allergies},demographics:function(){return a.demographics},encounters:function(){return a.encounters},immunizations:function(){return a.immunizations},labs:function(){return a.labs},medications:function(){return a.medications},plan:function(){return a.plan},problems:function(){return a.problems},procedures:function(){return a.procedures},vitals:function(){return a.vitals}}};
window.BlueButton=BlueButton;
})();
