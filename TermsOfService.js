// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// // import './TermsOfService.css';

// const TermsOfService = () => {
//   return (
//     <Container fluid className="terms-container">
//       <Row>
//         <Col>
//           <h1 className="terms-title">Terms of Service</h1>
//           <p className="terms-paragraph">
//             These terms and conditions outline the rules and regulations for the use of our service.
//           </p>
//           <h2 className="terms-title">Cookies</h2>
//           <p className="terms-paragraph">
//             We employ the use of cookies. By accessing our service, you agreed to use cookies in agreement with our Privacy Policy.
//           </p>
//           <h2 className="terms-title">License</h2>
//           <p className="terms-paragraph">
//             Unless otherwise stated, we own the intellectual property rights for all material on our service. All intellectual property rights are reserved.
//           </p>
//           {/* Add more terms as required */}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default TermsOfService;


import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import tosImage from './tos.jpg'; // update with your actual image path

const TermsOfService = () => {
  return (
    <Container fluid className="p-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card border="secondary" className="p-3">
            <Image src= "https://img.freepik.com/free-vector/tiny-people-signing-legal-principles-document-protection-privacy-data-control-employee-statement-with-text-protocol-flat-vector-illustration-regulation-procedure-concept_74855-26122.jpg?w=1800&t=st=1690310350~exp=1690310950~hmac=3ab9ca58cd4039eef49c84a91a6f20534e324bfb693720900be39055c3100ea2" alt="Terms of Service" fluid />
            <Card.Title>Terms of Service</Card.Title>
            <Card.Body>
              <p>By using our blog ('Website'), you agree to respect our intellectual property rights, only link to our content in appropriate ways, and not hold us responsible for third-party websites. We reserve the right to change these terms at any time. Continued use of the Website implies acceptance of these changes.</p>
            </Card.Body>
            <Row className="mt-3">
              <Col>
                <Button variant="secondary" className="w-100">Cancel</Button>
              </Col>
              <Col>
                <Button variant="primary" className="w-100">I Agree</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TermsOfService;
