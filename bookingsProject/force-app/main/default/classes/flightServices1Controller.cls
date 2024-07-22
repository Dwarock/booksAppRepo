public with sharing class flightServices1Controller {
   @AuraEnabled
	Public static list<Flight_Services__c> getFlightDetails(){
		list<Flight_Services__c> flightsList = [SELECT Id,Name,Origin__c,Destination__c,Avail_To_Date__c,FlightCapacity__c FROM Flight_Services__c];
		return flightsList;
	}
	
	@AuraEnabled
	Public static list<account> getAccounts(){
		list<account> accounts = [SELECT Id,Name FROM account];
		return flightsList;
	}
	
	@AuraEnabled
	Public static list<account> getContacts(){
		list<account> accounts = [SELECT Id,Name FROM account];
		return flightsList;
	}
    
}