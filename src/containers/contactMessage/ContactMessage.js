import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row, Form, FloatingLabel, Alert } from 'react-bootstrap';
import {contactMessage} from "../../portfolio.js";
import emailjs from 'emailjs-com';
import ContactImg from "./ContactImg";
import "./ContactMessage.css";

const ContactMessage = (props) => {
    const theme= props.theme;
    
    const [show, setShow] = useState(false);
    const [ hide, setHide ]= useState(false);
    const [review, setReview] = useState({});
    const  buttonRef = useRef();
    const formRef = useRef();

    useEffect(()=>{
        buttonRef.current.disabled = hide ? true : false; 
    },[hide])

    const handleInputOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const data = { ...review };
        data[field] = value;
        setReview(data);

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setShow(false)
        const inputs = document.getElementById("cont-form").elements;
        const name = inputs["name"].value;
        const email = inputs["email"].value;
        const subject = inputs["subject"].value;
        const message = inputs["message"].value;
        const templateParams = {
            name: name,
            from_name: name,
            email: email,
            reply_to: email,
            subject: subject,
            message: message,
            
        };
        setHide(true);
        await emailjs.send(contactMessage.serviceID, contactMessage.templateID, templateParams, contactMessage.emailjsUserID)
            .then((response) => {
                if (response.text === "OK") {
                    setShow(true)
                }
            }, (error) => {
                setShow(false)

            });
        formRef.current.reset();
        setHide(false);
        setTimeout(() => {
            setShow(false)
        }, 3000);
    }
    
    if (!contactMessage.display || contactMessage.emailjsUserID==="none" || contactMessage.serviceID==="none"){
        return null;
    }
    return (
        <div id="contact" className="mt-4">
          <div className="contactMessage-main">
           <div className="cont-image">
           <ContactImg theme={theme}/>
           </div>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1><i className="far fa-dot-circle fs-3" style={{ color: theme.imageHighlight }} ></i> <span style={{ color: theme.text }}>Contact Message</span></h1>
                    </Col>
                    <Col md={12} className="px-5 pt-4">
                        <Form onSubmit={handleSubmit} className="form-inline justify-content-center" ref={formRef} id="cont-form">
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" className="mb-3" style={{ color: theme.imageHighlight }}>
                                    <FloatingLabel>
                                        <Form.Control
                                            as="textarea"
                                            size="lg"
                                            required
                                            style={{ height: '60px' }}
                                            type="text"
                                            placeholder="Full Name"
                                            name="name"
                                            onBlur={handleInputOnBlur}
                                        />
                                    </FloatingLabel>

                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3" style={{ color: theme.imageHighlight }}>
                                    <FloatingLabel>
                                        <Form.Control
                                            as="textarea"
                                            size="lg"
                                            required
                                            style={{ height: '60px' }}
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            onBlur={handleInputOnBlur}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3" style={{ color: theme.imageHighlight }}>
                                    <FloatingLabel>
                                        <Form.Control
                                            as="textarea"
                                            size="lg"
                                            required
                                            style={{ height: '60px' }}
                                            type="text"
                                            placeholder="Subject"
                                            name="subject"
                                            onBlur={handleInputOnBlur}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group className="mb-3" as={Col} md="12" controlId="exampleForm.ControlTextarea1" style={{ color: theme.imageHighlight }}>
                                    <FloatingLabel>
                                        <Form.Control
                                            as="textarea"
                                            required
                                            style={{ height: '100px' }}
                                            size="lg"
                                            type="text"
                                            placeholder="Message"
                                            name="message"
                                            onBlur={handleInputOnBlur}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <button ref={buttonRef} type="submit" className="btn btn-primary"style={{ color: "white", padding:"7px"}}>
                              Send Message
                            </button>
                        </Form>
                        <Alert show={show} variant="success">
                            <Alert.Heading>Your message has been sent successfully!</Alert.Heading>
                        </Alert>
                    </Col>
                </Row>
            </Container>
          </div>
        </div>
    );
};

export default ContactMessage;
