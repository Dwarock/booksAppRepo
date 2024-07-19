public class flightServiceControoler {
    @AuraEnabled
    Public static list<Flight_Services__c> getFlightDetails(){
        list<Flight_Services__c> flightsList = [SELECT Id,Name,Origin__c,Destination__c,Avail_To_Date__c,FlightCapacity__c FROM Flight_Services__c];
        return flightsList;
    }
}