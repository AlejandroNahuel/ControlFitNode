//Importo variables de entorno
const { Config } = require('../config');

module.exports.MessageForOwner = {
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
            to: `${Config.ownerEmail1}, ${Config.ownerEmail2}`,
            subject: `${customer.name} ha seleccionado un plan de servicios`,
            html: `
            <img src="https://www.controlfitsoftware.com/images/logo.png" alt="Control Fit Logo" style="background-color:black;"/>
            <h2>Hola, ${customer.name} ha solicitado el siguiente plan de servicios:</h2>
            <p><strong>Detalles</strong></p>
            <ul>
                <li>Nombre: ${customer.name}</li>
                <li>Apellido: ${customer.lastName}</li>
                <li>Teléfono de contacto: ${customer.phone}</li>
                <li>Email de contacto: ${customer.email}</li>
                <li>Nombre del gimnasio: ${customer.gymName} </li>
                <li>Cupo de socios activos: ${customer.numberOfMembers}</li>
                <li>${whatsapp}</li>
                <li>${app}</li>
                <li>${extraPC}</li>
            </ul>
            `
        };
    }
}