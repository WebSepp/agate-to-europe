/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var main = new Vue ({
    el: '#main',
    data: {
        image: 'images/oaguidelines_modell.jpeg',
        datamodelldefaultImage: 'images/DataModells/AGATE_Modell_Alt_Web.png',
        datamodelldefaultTitle: "Altes AGATE Datenmodell",
        datamodelldefaultText: "Das alte AGATE Datenmodell umfasste lediglich die Entitäten Projekt, Person und Organisationseinheit. Diese sind bereits mit einem global einzigartigem persistenten Identifier versehen und könnten so bereits durch Relationen untereinander Rollen in der Anwendungsdomäne spezifizieren. Diese Art von Relation besteht aufgrund der Datenlage allerdings bisher immer nur ausgehend vom Projekt. Beispielsweise die Rolle die eine Person innerhalb eines Projektes oder einer Organisationseinheit innehat. Es besteht keine Verbindung, die es ermöglichen würde Daten aus externen Systemen einzuspeisen und somit den Datensatz anzureichern.",
        agateentitydefaultTitle: "Neues AGATE Datenmodell mit allen OpenAIRE Elementen",
        agateentitydefaultText: "Die Abbildung zeigt das neue Datenmodell mit den untereinander verlinkten Entitäten und den Elementen, die sie abbilden können.",
        agateentitydefaultImage: 'images/DataModells/All_OpenAIRE_Elements_Web.png',
        agateentitydefaultType: "Alle OpenAIRE Elemente",
        overviewElementdefaultId: 2902,
        overviewElementdefaultTitle: "Alle in AGATE erfassten Daten",
        overviewElementdefaultlText: "Die Grafik zeigt noch einmal alle in AGATE erfassten Daten, die sich nach dem alten Datenmodell richten und lediglich Verbindung zu der Projekt Entität innehaben.",
        overviewElementdefaultImage: 'images/DataModells/AGATE_Daten_Alt_Web.png',
        overviewElementdefaultType: "Alle AGATE Daten",
        updated: false,

        datamodells:[
            {
                datamodellId: 2901,
                datamodellTitle: "Altes AGATE Datenmodell",
                datamodellText: "Das alte AGATE Datenmodell umfasste lediglich die Entitäten Projekt, Person und Organisationseinheit. Diese sind bereits mit einem global einzigartigem persistenten Identifier versehen und könnten so bereits durch Relationen untereinander Rollen in der Anwendungsdomäne spezifizieren. Diese Art von Relation besteht aufgrund der Datenlage allerdings bisher immer nur ausgehend vom Projekt. Beispielsweise die Rolle die eine Person innerhalb eines Projektes oder einer Organisationseinheit innehat. Es besteht keine Verbindung, die es ermöglichen würde Daten aus externen Systemen einzuspeisen und somit den Datensatz anzureichern.",
                datamodellImage: 'images/DataModells/AGATE_Modell_Alt_Web.png',
                datamodellType: "Altes Modell"

            },
            {
                datamodellId: 2903,
                datamodellTitle: "Neues AGATE Datenmodell",
                datamodellText: "In dem neuen AGATE Datenmodell kommen die Entitäten Funding, Publication und Product zu den bereits erfassten Entitäten hinzu. Den FAIR Prinzipien folgend müssen auch diesen Entitäten persistente Identifier zugewiesen werden, sodass sie modular untereinander verlinkbar sind. Das neue Datenmodell soll ebenfalls neue Rollen definieren können. Beispielsweise könnte eine Person nicht mehr nur länger eine Verlinkung zum Projekt innehaben, sondern beispielsweise auch als Autor zu einer Publikation. Durch die Erweiterung des Datenmodells können zahlreiche zusätzliche Forschungsinformationen erfasst werden. Daraus resultiert allerdings ebenfalls ein erheblicher Mehraufwand in der Datenerfassung. Um diesbezüglich Abhilfe zu schaffen kann durch die Einbindung  externer Dienstleister, wie Zenodo (für Publikationen und Produkte) und ORCID (für Personen) dieser Teil der Datenerfassung ausgelagert werden.",
                datamodellImage: 'images/DataModells/AGATE_Modell_Neu_Web.png',
                datamodellType: "Neues Modell"
            },

        ],

        agateentities:[
            {
                agateentityId: 2904,
                agateentityTitle: "Neues AGATE Datenmodell mit allen OpenAIRE Elementen",
                agateentityText: "Die Abbildung zeigt das neue Datenmodell mit den untereinander verlinkten Entitäten und den Elementen, die sie abbilden können.",
                agateentityImage: 'images/DataModells/All_OpenAIRE_Elements_Web.png',
                agateentityType: "Alle OpenAIRE Elemente"
            },
            {
                agateentityId: 2905,
                agateentityTitle: "OpenAIRE Elemente der OrgUnit Entität",
                agateentityText: "Die folgende Darstellung zeigt die Elemente die nach den OpenAIRE Guidelines unter der OrgUnit Entität abgebildet werden können.",
                agateentityImage: 'images/DataModells/OrgUnit_Modell_Web.png',
                agateentityType: "OrgUnit Entität"
            },
            {
                agateentityId: 2906,
                agateentityTitle: "Mapping der OrgUnit Entität",
                agateentityText: "Die folgende Darstellung zeigt eine mögliche Zuordnung der bisher in AGATE eingetragenen Daten auf die Elemente der OrgUnit Entität nach den OpenAire Guidelines.",
                agateentityImage: 'images/DataModells/OrgUnit_Modell_Mapping_Web.png',
                agateentityType: "OrgUnit Mapping"
            },
            {
                agateentityId: 2907,
                agateentityTitle: "OpenAIRE Elemente der Person Entität",
                agateentityText: "Die folgende Darstellung zeigt  die Elemente die nach den OpenAIRE Guidelines unter der Person Entität abgebildet werden können.",
                agateentityImage: 'images/DataModells/Person_Modell_Web.png',
                agateentityType: "Person Entität"
            },
            {
                agateentityId: 2908,
                agateentityTitle: "Mapping der Person Entität",
                agateentityText: "Die folgende Darstellung zeigt eine mögliche Zuordnung der bisher in AGATE eingetragenen Daten auf die Elemente der Person Entität nach den OpenAire Guidelines.",
                agateentityImage: 'images/DataModells/Person_Modell_Mapping_Web.png',
                agateentityType: "Person Mapping"
            },
            {
                agateentityId: 2909,
                agateentityTitle: "OpenAIRE Elemente der Project Entität",
                agateentityText: "Die folgende Darstellung zeigt  die Elemente die nach den OpenAIRE Guidelines unter der Project Entität abgebildet werden können.",
                agateentityImage: 'images/DataModells/Project_Modell_Web.png',
                agateentityType: "Project Entität"
            },
            {
                agateentityId: 2910,
                agateentityTitle: "Mapping der Project Entität",
                agateentityText: "Die folgende Darstellung zeigt eine mögliche Zuordnung der bisher in AGATE eingetragenen Daten auf die Elemente der Project Entität nach den OpenAire Guidelines.",
                agateentityImage: 'images/DataModells/Project_Modell_Mapping_Web.png',
                agateentityType: "Project Mapping"
            },
            {
                agateentityId: 2911,
                agateentityTitle: "OpenAIRE Elemente der Product Entität",
                agateentityText: "Die folgende Darstellung zeigt  die Elemente die nach den OpenAIRE Guidelines unter der Product Entität abgebildet werden können. Da diese in AGATE bisher nicht erfasst wurden kann auch keine Zuordnung stattfinden.",
                agateentityImage: 'images/DataModells/Product_Modell_Web.png',
                agateentityType: "Product Entität"
            },
            {
                agateentityId: 2912,
                agateentityTitle: "OpenAIRE Elemente der Publication Entität",
                agateentityText: "Die folgende Darstellung zeigt  die Elemente die nach den OpenAIRE Guidelines unter der Publication Entität abgebildet werden können. Da diese in AGATE bisher nicht erfasst wurden kann auch keine Zuordnung stattfinden.",
                agateentityImage: 'images/DataModells/Publication_Modell_Web.png',
                agateentityType: "Publication Entität"
            },
            {
                agateentityId: 2913,
                agateentityTitle: "OpenAIRE Elemente der Funding Entität",
                agateentityText: "Die folgende Darstellung zeigt  die Elemente die nach den OpenAIRE Guidelines unter der Funding Entität abgebildet werden können. Da diese in AGATE bisher nicht erfasst wurden kann auch keine Zuordnung stattfinden.",
                agateentityImage: 'images/DataModells/Funding_Modell_Web.png',
                agateentityType: "Funding Entität"
            },

        ],

        overviewElements:[
            {
                overviewElementId: 2902,
                overviewElementTitle: "Alle in AGATE erfassten Daten",
                overviewElementlText: "Die Grafik zeigt noch einmal alle in AGATE erfassten Daten, die sich nach dem alten Datenmodell richten und lediglich Verbindung zu der Projekt Entität innehaben.",
                overviewElementImage: 'images/DataModells/AGATE_Daten_Alt_Web.png',
                overviewElementType: "Alle AGATE Daten"

            },

            {
                overviewElementId: 2904,
                overviewElementTitle: "Neues AGATE Datenmodell mit allen OpenAIRE Elementen",
                overviewElementText: "Die Abbildung zeigt das neue Datenmodell mit den untereinander verlinkten Entitäten und den Elementen, die sie abbilden können.",
                overviewElementImage: 'images/DataModells/All_OpenAIRE_Elements_Web.png',
                overviewElementType: "Alle OpenAIRE Elemente"
            },
            {
                overviewElementId: 2914,
                overviewElementTitle: "Mapping aller Entitäten",
                overviewElementText: "Die folgende Darstellung zeigt eine mögliche Zuordnung aller bisher in AGATE eingetragenen Daten auf alle Elemente und Entitäten nach den OpenAire Guidelines.",
                overviewElementImage: 'images/DataModells/All_Data_All_Mapping_Web.png',
                overviewElementType: "Mapping aller Entitäten"
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

        },
        updateAgateEntity: function(agateentityImage, agateentityText, agateentityTitle){
            this.agateentitydefaultImage = agateentityImage,
                this.agateentitydefaultTitle = agateentityTitle,
                this.agateentitydefaultText = agateentityText

        },
        updateOverviewElement: function(overviewElementImage, overviewElementText, overviewElementTitle){
            this.overviewElementdefaultImage = overviewElementImage,
                this.overviewElementdefaultTitle = overviewElementTitle,
                this.overviewElementdefaultText = overviewElementText

        }

    }
})
