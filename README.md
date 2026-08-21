# AWS Capstone Project 5 — CI/CD Pipeline

## 📌 Project Overview

This project demonstrates a complete CI/CD pipeline for deploying a web application from GitHub to Amazon S3 using AWS developer tools.

The project automates the application build and deployment process using:

**GitHub → AWS CodePipeline → AWS CodeBuild → Amazon S3**

---

## 🎯 Objective

The objective of this project is to understand and implement a CI/CD workflow on AWS.

Whenever application source code is updated in GitHub, the pipeline can retrieve the source code, build the application, and deploy the output to Amazon S3.

---

## 🏗️ Architecture

```text
Developer
    │
    ▼
  GitHub
    │
    ▼
AWS CodePipeline
    │
    ▼
AWS CodeBuild
    │
    ▼
Amazon S3
    │
    ▼
Static Website