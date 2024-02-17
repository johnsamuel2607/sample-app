// import React from "react";
//  import { Button } from "react-bootstrap";

// const WhatsAppMessage = ({ phoneNumber, registeredNumber, message }) => {
//   const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
//   const formattedRegisteredNumber = registeredNumber.replace(/\D/g, "");
//   const whatsAppLink = `https://wa.me/${formattedRegisteredNumber}?text=${encodeURIComponent(
//     `Your game is over. Your number is ${formattedPhoneNumber}.`
//   )}`;

//   return (
//     <Button
//       variant="primary"
//       href={whatsAppLink}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Register {phoneNumber}
//     </Button>
//   );
// };

// export default WhatsAppMessage;


// ///

// export default App;
// import React from "react";
// import WhatsAppMessage from "./WhatsAppMessage";

// const App = () => {
//   const phoneNumber = "8110092607";
//   const registeredNumber = "9884772607";

//   return (
//     <WhatsAppMessage
//       phoneNumber={phoneNumber}
//       registeredNumber={registeredNumber}
//       message="Your game is over. Your number is "
//     />
//   );
// };

// export default App;