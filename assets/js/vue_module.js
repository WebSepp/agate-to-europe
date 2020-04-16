/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var main = new Vue ({
    el: '#main',
    data: {
        image: 'images/oaguidelines_modell.png',
        datamodelldefaultImage: 'images/DataModells/AGATE_Modell_Alt_Web.png',
        datamodelldefaultTitle: "Altes Datenmodell",
        datamodelldefaultText: "Das alte AGATE Datenmodell umfasste lediglich die Entitäten Projekt, Person und Organisationseinheit.",
        updated: false,
        datamodells:[
            {
                datamodellId: 2901,
                datamodellTitle: "Altes AGATE Datenmodell",
                datamodellText: "Das alte AGATE Datenmodell umfasste lediglich die Entitäten Projekt, Person und Organisationseinheit.",
                datamodellImage: 'images/DataModells/AGATE_Modell_Alt_Web.png',
                datamodellType: "Altes Modell"

            },
            {
                datamodellId: 2902,
                datamodellTitle: "Alle in AGATE erfassten Daten",
                datamodellText: "Die Grafik zeigt noch einmal alle in AGATE erfassten Daten, die sich nach dem alten Datenmodell richten und lediglich Verbindung zu der Projekt Entität innehaben.",
                datamodellImage: 'images/DataModells/AGATE_Daten_Alt_Web.png',
                datamodellType: "Alle AGATE Daten"

            },
            {
                datamodellId: 2903,
                datamodellTitle: "Neues AGATE Datenmodell",
                datamodellText: "In dem neuen AGATE Datenmodell kommen die Entitäten Funding, Publication und Product zu den bereits erfassten Entitäten hinzu und sind zusätzlich noch untereinander und nicht mehr lediglich durch das Projekt verlinkt. Außerdem sollen ORCID und Zenodo als externe Dienstleister zur Anreicherung der Entitäten eingebunden werden.",
                datamodellImage: 'images/DataModells/AGATE_Modell_Neu_Web.png',
                datamodellType: "Neues Modell"
            },
            {
                datamodellId: 2904,
                datamodellTitle: "Neues AGATE Datenmodell mit allen OpenAIRE Elementen",
                datamodellText: "Die Abbildung zeigt das neue Datenmodell mit den untereinander verlinkten Entitäten und den Elementen, die sie abbilden können.",
                datamodellImage: 'images/DataModells/All_OpenAIRE_Elements_Web.png',
                datamodellType: "Alle OpenAIRE Elemente"
            },
            {
                datamodellId: 2905,
                datamodellTitle: "OpenAIRE Elemente der OrgUnit Entität",
                datamodellText: "Die folgende Darstellung zeigt die Elemente die nach den OpenAIRE Guidelines unter der OrgUnit Entität abgebildet werden können.",
                datamodellImage: 'images/DataModells/OrgUnit_Modell_Web.png',
                datamodellType: "OrgUnit Entität"
            },
            {
                datamodellId: 2906,
                datamodellTitle: "Mapping der OrgUnit Entität",
                datamodellText: "Die folgende Darstellung zeigt eine mögliche Zuordnung der bisher in AGATE eingetragenen Daten auf die Elemente der OrgUnit Entität nach den OpenAire Guidelines.",
                datamodellImage: 'images/DataModells/OrgUnit_Modell_Mapping_Web.png',
                datamodellType: "OrgUnit Mapping"
            },
            {
                datamodellId: 2907,
                datamodellTitle: "OpenAIRE Elemente der Person Entität",
                datamodellText: "Die folgende Darstellung zeigt  die Elemente die nach den OpenAIRE Guidelines unter der Person Entität abgebildet werden können.",
                datamodellImage: 'images/DataModells/Person_Modell_Web.png',
                datamodellType: "Person Entität"
            },
            {
                datamodellId: 2908,
                datamodellTitle: "Mapping der Person Entität",
                datamodellText: "Die folgende Darstellung zeigt eine mögliche Zuordnung der bisher in AGATE eingetragenen Daten auf die Elemente der Person Entität nach den OpenAire Guidelines.",
                datamodellImage: 'images/DataModells/Person_Modell_Mapping_Web.png',
                datamodellType: "Person Mapping"
            },
            {
                datamodellId: 2909,
                datamodellTitle: "OpenAIRE Elemente der Project Entität",
                datamodellText: "Die folgende Darstellung zeigt  die Elemente die nach den OpenAIRE Guidelines unter der Project Entität abgebildet werden können.",
                datamodellImage: 'images/DataModells/Project_Modell_Web.png',
                datamodellType: "Project Entität"
            },
            {
                datamodellId: 2910,
                datamodellTitle: "Mapping der Project Entität",
                datamodellText: "Die folgende Darstellung zeigt eine mögliche Zuordnung der bisher in AGATE eingetragenen Daten auf die Elemente der Project Entität nach den OpenAire Guidelines.",
                datamodellImage: 'images/DataModells/Project_Modell_Mapping_Web.png',
                datamodellType: "Project Mapping"
            },
            {
                datamodellId: 2911,
                datamodellTitle: "OpenAIRE Elemente der Product Entität",
                datamodellText: "Die folgende Darstellung zeigt  die Elemente die nach den OpenAIRE Guidelines unter der Product Entität abgebildet werden können.",
                datamodellImage: 'images/DataModells/Product_Modell_Web.png',
                datamodellType: "Product Entität"
            },
            {
                datamodellId: 2912,
                datamodellTitle: "OpenAIRE Elemente der Publication Entität",
                datamodellText: "Die folgende Darstellung zeigt  die Elemente die nach den OpenAIRE Guidelines unter der Publication Entität abgebildet werden können.",
                datamodellImage: 'images/DataModells/Publication_Modell_Web.png',
                datamodellType: "Publication Entität"
            },
            {
                datamodellId: 2913,
                datamodellTitle: "OpenAIRE Elemente der Funding Entität",
                datamodellText: "Die folgende Darstellung zeigt  die Elemente die nach den OpenAIRE Guidelines unter der Funding Entität abgebildet werden können.",
                datamodellImage: 'images/DataModells/Funding_Modell_Web.png',
                datamodellType: "Funding Entität"
            },
            {
                datamodellId: 2914,
                datamodellTitle: "Mapping aller Entitäten",
                datamodellText: "Die folgende Darstellung zeigt eine mögliche Zuordnung aller bisher in AGATE eingetragenen Daten auf alle Elemente und Entitäten nach den OpenAire Guidelines.",
                datamodellImage: 'images/DataModells/All_Data_All_Mapping_Web.png',
                datamodellType: "Mapping aller Entitäten"
            },


        ],
        oAentities:[
            {
                oAentityName:"Person",
                oAentityId: 1,
                oAentityImage: 'images/OA_Modell_person.png'
            },
            {
                oAentityName:"OrgUnit",
                oAentityId: 2,
                oAentityImage:'images/OA_Modell_orgunit.png'
            },
            {
                oAentityName:"Project",
                oAentityId: 3,
                oAentityImage:'images/OA_Modell_project.png'
            },
            {
                oAentityName:"Publication",
                oAentityId: 4,
                oAentityImage:'images/OA_Modell_publication.png'
            },
            {
                oAentityName:"Product",
                oAentityId: 5,
                oAentityImage:'images/OA_Modell_product.png'
            },
            {

                oAentityName:"Funding",
                oAentityId: 6,
                oAentityImage:'images/OA_Modell_funding.png'
            }
        ]
    },
    methods:{
        addToCart: function(){
            this.cart+=1
        },
        updateImage: function(entityImage){
            this.image = entityImage
        },
        updateDataModell: function(datamodellImage, datamodellText, datamodellTitle){
            this.datamodelldefaultImage = datamodellImage,
                this.datamodelldefaultTitle = datamodellTitle,
                this.datamodelldefaultText = datamodellText

        }

    }
})
