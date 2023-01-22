//Importo variables de entorno
const { Config } = require('../config');

module.exports.MessageForCustomer = {
    createMessage: (customer)=>{
        
        let whatsapp;
        let app;
        let extraPC;

        if(customer.notiWhatsapp == 'on') whatsapp="Notificaciones por WhatsApp: Si";
        else whatsapp = "Notificaciones por WhatsApp: No";

        if(customer.membersApp == 'on') app="App Móvil para socios: Si";
        else app="App Móvil para socios: No";

        if(customer.extraComputer == 'on') extraPC="Computadora extra: Si";
        else extraPC="Computadora extra: No";
        
        return {
            from: `Control Fit Software <${Config.email}>`,
            to: customer.email,
            subject: "Gracias por contactarte con nosotros",
            html: `
            <img src="https://www.controlfitsoftware.com/images/logo.png" alt="Control Fit Logo" style="background-color:black;"/>
            <h2>Hola, ${customer.name}!</h2>
            <p>Gracias por detallarnos los datos de tu plan</p>
            <p>Te dejamos acá el listado de los que elegiste:</p>
            <ul>
                <li>Nombre del gimnasio: ${customer.gymName} </li>
                <li>Cupo de socios activos: ${customer.numberOfMembers}</li>
                <li>${whatsapp}</li>
                <li>${app}</li>
                <li>${extraPC}</li>
            </ul>
            <p>Precio final del plan: AR$${customer.calculateFinalPrice(customer)}</p>
            `
        };
    }
}