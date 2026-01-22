# Getting Started with Angular Scheduler Component using MEAN Stack (MongoDB, Express, Angular, Node)

## Description

This repository showcases a full‑stack sample application that demonstrates how to integrate the Syncfusion Angular Scheduler component into a Angular application with a Node.js and MongoDB backend.<br />
The backend provides REST API endpoints for managing calendar events, which are stored in MongoDB. The React frontend delivers a responsive scheduling interface, enabling users to create, update, view, and delete events seamlessly using Syncfusion’s Scheduler component.

<br />

## Prerequisites
- Use Node Version >= 20.19.0 (for better performance with MongoDB driver 7.0)
- Use Latest MongoDB Software.
- Make sure there is nothing running on the ports 5000, 4200.

<br />

## Setup
- Clone the repository to your local machine.

<br />

### Backend Setup

#### <u> MongoDB </u>

1. Create a Database named `mydb` in the default connection `localhost:27017` in MongoDB Compass.
2. Create a Collection named `ScheduleData` in the above created database.
3. Make sure this connection is in connected state in MongoDB Compass.

<br />

### Frontend Setup
1. In a new terminal, navigate to the project folder:
2. Install application dependencies:
    ```bash
    npm install
    ```
<br />

## Running the Application
1. Navigate to the project folder.
2. Start the backend server:
    ```bash
    npm run server (runs the server.js file)
    ```
3. Backend server started running on `http://localhost:5000`
4. Start the frontend:
    ```bash
    npm start
    ```
5. Navigate to [http://localhost:4200](http://localhost:4200) in your browser.<br />
    The page will reload if you make edits.<br />
    You will also see any lint errors in the console.

<br />

## Sample Outputs
![FrontEnd Angular](./SampleOutputs/FrontEnd-Angular.png)
*Image illustrating the Syncfusion Angular Scheduler* 

![BackEnd MongoDB](./SampleOutputs/BackEnd-MongoDB.png)
*Image illustrating the events of the Syncfusion Angular Scheduler in the MongoDB* 

<br />

## Troubleshooting
- **404 PageNotFound**: Ensure the backend server running on `localhost:5000`.
- **CORS errors**: Ensure the frontend running on `localhost:4200`.

<br />

# Learn More

To learn more about integrating the Syncfusion Angular Schedule component,, refer to the [Syncfusion Documentation](https://ej2.syncfusion.com/angular/documentation/schedule/getting-started).