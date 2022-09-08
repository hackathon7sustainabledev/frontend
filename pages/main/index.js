import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";

export default function Login() {
  

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"
      ></Script>
      <div
        style={{
          backgroundColor: "#212638",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
		  boxShadow: "5px 10px"
        }}
      >
		
		<Image src={require('../../assets/4.png')} />
        <h2
          className="Content HeaderAlign text-white font-black text-5xl">
          Login
        </h2>
        <br></br>
        <Form
          style={{ backgroundColor: "#2b324a", width: "50%", padding: "5%" }}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label
              className="labelText"
              style={{ color: "white"}}
            >
              <span className="text-2xl font-semibold text-[#FFBD59]">Email Address</span>
            </Form.Label>
            <Form.Control
              type="email"
              className="inputBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              style={{
                backgroundColor: "#000000",
                borderRadius: 5,
                borderWidth: 0,
                color: "#ffffff",
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formtext">
            <Form.Label
              className="labelText"
              style={{ color: "white"}}
            >
              <span className="text-2xl font-semibold text-[#FFBD59]">Organization Referal</span>
            </Form.Label>
            <Form.Control
              type="text"
              className="inputBox"
              value={orgID}
              onChange={(e) => setOrgID(e.target.value)}
              placeholder="Enter Organization ID"
              style={{
                backgroundColor: "#000000",
                borderRadius: 5,
                borderWidth: 0,
                color: "#ffffff",
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: "white"}}>
			<span className="text-2xl font-semibold text-[#FFBD59]">Password</span>
            </Form.Label>
            <Form.Control
              type="password"
              className="inputBox"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                backgroundColor: "#000000",
                borderRadius: 5,
                borderWidth: 0,
                color: "#ffffff",
              }}
              required
            />
            <nav>
			<Link href="/signup" style={{ color: "#FFBD59" }}>
			  Click here to Create Account
              </Link>
            </nav>
          </Form.Group>
          <div style={{ display: "flex" }}>
            <Button
              variant="primary"
              type="submit"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#FFBD59",
                borderWidth: 0,
                color: "#000000",
                borderRadius: 30,
				width: "180px",
              }}
            >
              <span  className="font-semibold text-3xl">SUBMIT</span>
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}
