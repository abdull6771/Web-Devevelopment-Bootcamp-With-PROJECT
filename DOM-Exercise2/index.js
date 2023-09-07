function HouseKeeper(yearsofExperience,name,cleaningReparture){
    this.yearsofExperience = yearsofExperience
    this.name = name
    this.cleaningReparture =cleaningReparture
    this.clean = function(){
        alert("Cleaning in progress")
    }
}

var housekeeper1 = new HouseKeeper(3,"timmy",["bathroom","lobby","bedroom"])