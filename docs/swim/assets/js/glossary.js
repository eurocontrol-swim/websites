var options = {
            valueNames: ['Term', 'Definition'],
            // Since there are no elements in the list, this will be used as template.
            //page: 10,
            //pagination: true,
            item: '<tr><td class="Term"></td><td class="Definition"></tr>'
        };

        var values = [
	{
		"Term":"Application Message Exchange Pattern",
		"Definition":"A Message Exchange Pattern that describes the information interactions at application level and that is implemented using SWIM TI primitive MEPs."
	},
	{
		"Term":"ATM Information Sharing Capability",
		"Definition":"The ability of a system or information service to share ATM information."
	},
	{
		"Term":"Availability (of a service)",
		"Definition":"The degree to which a service is operational and accessible when required for use."
	},
	{
		"Term":"Business Domain",
		"Definition":"A set of business activities that: (a) have a common mission or purpose; (b) share common operational and functional requirements and capabilities; and (c) need to be considered separately from other activities, while maintaining relevant relationships with them."
	},
	{
		"Term":"Business Process",
		"Definition":"A defined set of business activities that represent the steps required to achieve a business objective. It includes the flow and use of information and resources. "
	},
	{
		"Term":"Capability",
		"Definition":"The ability of a system to provide a service or perform a function that, either on its own or with other services or functions, can deliver a definable level of performance."
	},
	{
		"Term":"Capacity (of a service)",
		"Definition":"The maximum rate at which a service can process transactions and the maximum message size of responses. Note: Measurements can include the number of items that can be stored, the number of concurrent users, the communication bandwidth, throughput of transactions, and size of messages."
	},
	{
		"Term":"Collaborative Validation",
		"Definition":"A validation of service jointly carried out by the service provider together with service users."
	},
	{
		"Term":"Community of Interest [CoI]",
		"Definition":"A collaborative group of users who exchange information in pursuit of shared goals, interests, missions or business processes. Note: Communities of interest are established in a variety of ways and may be composed of members from one or more functions and organizations as needed for a shared mission."
	},
	{
		"Term":"Confidentiality (of a service)",
		"Definition":"The degree to which a service ensures that data are accessible only to those authorized to have access."
	},
	{
		"Term":"Data",
		"Definition":"A representation of facts, concepts or instructions in a formalized manner suitable for communication, interpretation or processing."
	},
	{
		"Term":"Data Exchange Language",
		"Definition":"Data definition language for describing data and data structures in an information exchange."
	},
	{
		"Term":"Data Format",
		"Definition":"A structure of data elements, records and files arranged to meet standards, specifications or data quality requirements."
	},
	{
		"Term":"Data Quality",
		"Definition":"A degree or level of confidence that the data provided meet the requirements of the data user in terms of accuracy, resolution, integrity (or equivalent assurance level), traceability, timeliness, completeness and format."
	},
	{
		"Term":"Data Set",
		"Definition":"Identifiable collection of data."
	},
	{
		"Term":"Dataset Metadata",
		"Definition":"Data about data."
	},
	{
		"Term":"End Point",
		"Definition":"Location at which information is received to invoke and configure interaction."
	},
	{
		"Term":"Exchange Model",
		"Definition":"Formal description of the concepts involved in an information exchange."
	},
	{
		"Term":"Exchange Schema",
		"Definition":"Formal description of the data involved in an information exchange."
	},
	{
		"Term":"Functional Requirement",
		"Definition":"Requirement that specifies a function that a system or service must be able to perform."
	},
	{
		"Term":"Independent Validation",
		"Definition":"A validation of service carried out by an independent authority."
	},
	{
		"Term":"Information",
		"Definition":"The result of the assembly, analysis, formatting, and documenting of data, to make the data useful in an ATM context."
	},
	{
		"Term":"Information Domain",
		"Definition":"The scope of the integrated data for a distinct set of business activities that produce a set of unique information products and services."
	},
	{
		"Term":"Information Exchange",
		"Definition":"Information that is required to be exchanged by actors in a business process."
	},
	{
		"Term":"Information Exchange Model",
		"Definition":"A document in a formal language identifying the information that is agreed to be shared between two or more organisations or groups. Note: An information exchange model is normally defined for a specific information domain, such as aeronautical information, meteorological information or flight information. This includes the definition of relationships between the represented information entities. An information exchange model includes for information exchange purposes a standardized exchange language."
	},
	{
		"Term":"Information Exchange Requirement",
		"Definition":"A specification of the information that is to be exchanged."
	},
	{
		"Term":"Information Quality",
		"Definition":"The degree or level of confidence that both the data quality and the process used to convert data into information meet user requirements."
	},
	{
		"Term":"Information Service",
		"Definition":"A type of service that provides an ATM information sharing capability."
	},
	{
		"Term":"Information Service Payload",
		"Definition":"The assembly of information exchanged using an information service. Note: Information Service Payloads support specified function(s) or purpose, independent of overhead required to enable the information exchange, such as headers, and security requirements."
	},
	{
		"Term":"Infrastructure Service",
		"Definition":"A type of service that provides SWIM infrastructure capabilities such as interface management, request-reply and publish-subscribe messaging, service security, and enterprise service management."
	},
	{
		"Term":"Integrity (of a service)",
		"Definition":"An expression of the assurance that a system, product or component prevents unauthorized access to, or modification of, an information service interface or information."
	},
	{
		"Term":"Interface Binding",
		"Definition":"Specification of the protocols and data formats to be used in transmitting messages defined by the associated interface. Note: Two systems that implement the same interface binding are considered technically interoperable and are able to connect to each other and exchange information. There are two types of interface bindings to be distinguished based on their position in the TCP/IP protocol: service bindings and network bindings. Service bindings specify the service interface protocols (e.g. protocols to interface with the applications, such as HTTP and AMQP). Network bindings specify the transport and network related protocols that will be used to exchange data over the network (e.g. TCP, IP v4/v6)."
	},
	{
		"Term":"Interoperability",
		"Definition":"The ability of information and communication technology (ICT) systems and of the business processes they support to exchange data and to enable the sharing of information and knowledge. "
	},
	{
		"Term":"IP-based Network",
		"Definition":"A telecommunications network using the Internet Protocol."
	},
	{
		"Term":"IT Infrastructure",
		"Definition":"All the hardware, software, networks, facilities, etc. required to develop, test, deliver, monitor, control or support applications and IT services. The term includes all the information technology but not the associated people, processes and documentation."
	},
	{
		"Term":"Loose coupling",
		"Definition":"A characteristic of systems, in which dependencies among system's constituting parts are minimal."
	},
	{
		"Term":"Message",
		"Definition":"A discrete unit of communication intended by the source for consumption by a given recipient or group of recipients. Note: The term message refers to a unit of information exchange between systems that communicate via information services. Although there are similarities, no direct comparison should be made with the term message used in other ICAO documents (e.g. CPDLC message)."
	},
	{
		"Term":"Message Exchange Pattern [MEP]",
		"Definition":"A template that describes relationships of multiple messages exchanged between interacting components to accomplish a single complete information exchange."
	},
	{
		"Term":"Message Metadata",
		"Definition":"A structure that represents information about a specific aspect of the message."
	},
	{
		"Term":"Message Payload",
		"Definition":"The structure that represents the primary application-specific content that the message sender intends to deliver to the message recipient."
	},
	{
		"Term":"Messaging Capability",
		"Definition":"The SWIM Technical Infrastructure capability enabling the delivery of messages."
	},
	{
		"Term":"Message Protocol",
		"Definition":"A protocol providing rules, formats and functions for exchanging messages between the components of a messaging system."
	},
	{
		"Term":"Metadata",
		"Definition":"Information about a resource. Note: A service, a service overview, a dataset, are examples of resources."
	},
	{
		"Term":"Modelling Language",
		"Definition":"Language or notation that is used to model some aspect of an information exchange."
	},
	{
		"Term":"Network Interface Binding",
		"Definition":"An interface binding that enables the SWIM TI to exchange data with the network."
	},
	{
		"Term":"Non Functional Requirement",
		"Definition":"Requirement that specifies criteria or constraints on the design or implementation of a system or service."
	},
	{
		"Term":"Open Standard",
		"Definition":"A standard which is made available to the general public and is developed (or approved) and maintained via a collaborative and consensus driven process. "
	},
	{
		"Term":"Operational (status of a service)",
		"Definition":"The status indicating that the service is employed in its operational environment."
	},
	{
		"Term":"Organisational Interoperability",
		"Definition":"An aspect of interoperability concerned with how organisations, such as public administrations in different Member States, cooperate to achieve their mutually agreed goals. Note: In practice, organisational interoperability implies integrating business processes and related data exchange. Organisational interoperability also aims to meet the requirements of the user community by making services available, easily identifiable, accessible and user-focused. "
	},
	{
		"Term":"Performance",
		"Definition":"The performance relative to the amount of resources used under stated conditions. It includes time behaviour, resource utilization and capacity."
	},
	{
		"Term":"Primitive Message Exchange Pattern",
		"Definition":"A Message Exchange Pattern that is directly related to the capability of the lower level protocols of the SWIM TI."
	},
	{
		"Term":"Prospective (status of a service)",
		"Definition":"The status indicating that the service is being designed, developed, or tested for operational activities and is expected to be available in the future."
	},
	{
		"Term":"Protocol",
		"Definition":"A set of semantic and syntactic rules for exchanging information."
	},
	{
		"Term":"Public Key Infrastructure [PKI]",
		"Definition":"A common infrastructure component used for signing, emitting and maintaining certificates and revocation lists."
	},
	{
		"Term":"Quality of Service [QoS]",
		"Definition":"The degree or level of confidence that the performance of a service meets users requirements. "
	},
	{
		"Term":"Recoverability (of a service)",
		"Definition":"The degree to which, in the event of an interruption or a failure, the desired state of the service can be re-established."
	},
	{
		"Term":"Reference Model",
		"Definition":"An abstract framework for understanding significant relationships among the entities of some environment."
	},
	{
		"Term":"Reliability",
		"Definition":"The degree to which a service performs specified functions under specified conditions for a specified period of time."
	},
	{
		"Term":"Resource",
		"Definition":"Identifiable asset or means that fulfils a requirement."
	},
	{
		"Term":"Retired (status of a service)",
		"Definition":"The status indicating that active support for the service has been withdrawn, the service has been partially or totally replaced by a new service, or an upgraded service has been installed."
	},
	{
		"Term":"Security",
		"Definition":"The degree to which a service protects information and data so that persons or other products or systems have the degree of data access appropriate to their types and levels of authorization. It includes confidentiality, integrity, non-repudiation, accountability, authenticity."
	},
	{
		"Term":"Security Capability",
		"Definition":"The SWIM Technical Infrastructure capability enabling secured information exchange."
	},
	{
		"Term":"Self Validation",
		"Definition":"A validation of service carried out by the service provider."
	},
	{
		"Term":"Semantic Interoperability",
		"Definition":"The ability of computer systems and organisations to exchange information with unambiguous, shared meaning."
	},
	{
		"Term":"Service",
		"Definition":"A mechanism to enable access to one or more capabilities using a prescribed interface. Note: In the context of system wide information management, the notion of service addresses machine-to-machine interaction based on service oriented architecture principles, and is not to be confused with the notion of service as used in ICAO provisions referring to business services such as AIS, ATS, etc."
	},
	{
		"Term":"Service Category",
		"Definition":"A class of services which share a common feature."
	},
	{
		"Term":"Service Consumer",
		"Definition":"An entity which seeks to satisfy a particular need through the use of capabilities offered by means of a service."
	},
	{
		"Term":"Service Definition",
		"Definition":"A document, issued by a community of interest, used to harmonize service implementations."
	},
	{
		"Term":"Service Description",
		"Definition":"Information needed in order to use, or consider using, a service."
	},
	{
		"Term":"Service Function",
		"Definition":"A type of activity describing the functionality of a service."
	},
	{
		"Term":"Service Instance",
		"Definition":"The service deployed into a running ICT system."
	},
	{
		"Term":"Service Interface",
		"Definition":"The means by which the underlying capabilities of a service are accessed."
	},
	{
		"Term":"Service Interface Binding",
		"Definition":"An interface binding that enables services to exchange data with consuming applications."
	},
	{
		"Term":"Service Interoperability",
		"Definition":"Ability of service providers and service consumers to communicate, invoke services and exchange information at both the syntactic and semantic level leading to effects as defined by the service description."
	},
	{
		"Term":"Service Lifecycle Stage",
		"Definition":"A classification of services based on their current, past, or future availability for provisioning."
	},
	{
		"Term":"Service Metadata",
		"Definition":"Data about the service."
	},
	{
		"Term":"Service Operation",
		"Definition":"Specification of a transformation or query that an object may be called to execute."
	},
	{
		"Term":"Service Orientation",
		"Definition":"The designing of systems in terms of services and service-based development."
	},
	{
		"Term":"Service Oriented Architecture [SOA]",
		"Definition":"Architectural style that supports service orientation."
	},
	{
		"Term":"Service Overview",
		"Definition":"A set of information service metadata intended to promote service discovery and an initial evaluation of the information service characteristics. "
	},
	{
		"Term":"Service Parameter",
		"Definition":"A variable that an operation can interpret when invoked."
	},
	{
		"Term":"Service Provider",
		"Definition":"An entity (person or organization) that offers the use of capabilities by means of a service."
	},
	{
		"Term":"Service Registration And Discovery Capability",
		"Definition":"The ability to register and discover Services in a SWIM environment."
	},
	{
		"Term":"Service Specification",
		"Definition":"A provider-independent service definition issued by a standards developing organisation."
	},
	{
		"Term":"Standard",
		"Definition":"Documented agreement containing technical specifications or other precise criteria to be used consistently as rules, guidelines or definitions of characteristics, to ensure that materials, products, processes and services are fit for their purpose."
	},
	{
		"Term":"Standardized Exchange Language",
		"Definition":"A language used to formalize data exchanges in a particular domain context. Note: A standardized exchange language is used to formalize data. For example, XML Schema is used to define the structure of an XML encoded message."
	},	
	{
		"Term":"SWIM Governance",
		"Definition":"The set of governance bodies, standards, policies and processes that ensure information required for global interoperability is provided by reliable, trusted services."
	},
	{
		"Term":"SWIM Service Registry",
		"Definition":"A directory containing entries with the information necessary to discover and access services."
	},
	{
		"Term":"SWIM Stakeholder",
		"Definition":"A stakeholder in the SWIM community, having distinct roles pertaining to and aligned with the components of SWIM."
	},
	{
		"Term":"Syntactic Interoperability",
		"Definition":"The ability of systems to correctly interpret the structure of exchanged data."
	},
	{
		"Term":"System Wide Information Management [SWIM]",
		"Definition":"Standards, infrastructure and governance enabling the management of ATM related information and its exchange between qualified parties via interoperable services."
	},
	{
		"Term":"Technical Infrastructure",
		"Definition":"The assembly of software and hardware used to enable the provision of information services."
	},
	{
		"Term":"Technical Infrastructure Capability",
		"Definition":"A characteristic of the SWIM TI."
	},
	{
		"Term":"Technical Infrastructure Management Capability",
		"Definition":"The SWIM technical infrastructure capability that monitors the performance of the technical infrastructure."
	},
	{
		"Term":"Technical Infrastructure Profile",
		"Definition":"Specification defining an implementation of the SWIM TI. Multiple SWIM TI Profiles can coexist, each of them focused on the implementation of technical infrastructure but with different scope and applicability."
	},
	{
		"Term":"Technical Interoperability",
		"Definition":"An aspect of interoperability which covers the technical aspects of linking information systems. It includes topics such as interface specifications, interconnection services, data integration services, and data presentation and exchange."
	},
	{
		"Term":"Time Behaviour (of a service)",
		"Definition":"A measurement of the processing times of a service. Note: This parameter may be expressed as an indication of a maximum time needed for the service provider to complete the request, measured from the time instant the service provider receives the request to the time instant the service provider sends the response or makes it available."
	},
	{
		"Term":"Transport Protocol",
		"Definition":"A protocol providing end-to-end communication services for applications."
	},
	{
		"Term":"User Validation",
		"Definition":"A validation of service carried out by service users."
	},
	{
		"Term":"Validation of Service",
		"Definition":"An activity whereby a service is checked for conformance with the service objectives and requirements. Note: The service objectives and requirements are captured in the service overview and the technical specifications."
	}
];

        var termList = new List('glossary', options, values);