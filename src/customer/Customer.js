module.exports.Customer = {
    name: null,
    lastName:null,
    email: null,
    gymName: null,
    phone: null,
    numberOfMembers: '100',
    notiWhatsapp: null,
    membersApp: null,
    extraComputer: null,
    calculateFinalPrice: (customer)=>{
        //Calculating final price
        let initialPrice =2700;
        let addedPrice = 0;
        let finalPrice = 0;
        
        switch(customer.numberOfMembers){
            case "100":
                addedPrice = 0;
                break;
            case "200":
                addedPrice = 400;    
                break;
            case "300":
                addedPrice = 800;
                break;
            case "400":
                addedPrice = 1200;
                break;
            case "500":
                addedPrice = 1600;
                break;
            case "600":
                addedPrice = 2000;
                break;
            case "700":
                addedPrice = 2400;
                break;
            case "800":
                addedPrice = 2800;
                break;
            case "900":
                addedPrice = 3200;
                break;
            case "1000":
                addedPrice = 3600;
                break;
        }

        if(typeof(customer.notiWhatsapp) != 'undefined'){
            addedPrice +=1500;
        }

        if(typeof(customer.membersApp) != 'undefined'){
            addedPrice+=1900;
        }

        if(typeof(customer.extraComputer) != 'undefined'){
            addedPrice+=700;
        }

        finalPrice = initialPrice + addedPrice;
        return finalPrice;
    }
};